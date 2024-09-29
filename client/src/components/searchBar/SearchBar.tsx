import React, { useState, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { debounce } from 'lodash';
import { toast } from 'react-toastify'; // Import toast for notifications
import api from '../../utils/api';
import './SearchBar.css';
import { Product } from '../../common/interfaces';

// Functional component for the SearchBar
const SearchBar: React.FC = () => {
    const [query, setQuery] = useState(''); // State to store search query input
    const [results, setResults] = useState<Product[]>([]); // State to store search results
    const [showResults, setShowResults] = useState(false); // State to control the display of the search results dropdown
    const searchBarRef = useRef<HTMLDivElement>(null); // Ref to the search bar container, used to detect clicks outside the component
    const navigate = useNavigate(); // Hook to navigate programmatically

    // Function to fetch search results from the backend
    const fetchResults = async (query: string) => {
        if (query.trim() === '') return; // Prevent fetching if the query is empty

        try {
            const response = await api.get(`/products/search?name=${query}`); // Fetch products matching the search query
            setResults(response.data); // Set the search results to state
        } catch (error) {
            console.error('Error fetching search results:', error); // Log any errors
        }
    };

    // Debounced version of fetchResults to limit the number of API calls as the user types
    const debouncedFetchResults = useCallback(
        debounce((query: string) => {
            fetchResults(query); // Fetch results with a delay of 500ms
        }, 500),
        []
    );

    // Handle changes in the input field
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        // Detect Hebrew characters and show a toast notification if found
        const hebrewRegex = /[\u0590-\u05FF]/;
        const toastId = "hebrew-toast";  // Use a fixed toastId to prevent duplicates

        if (hebrewRegex.test(value)) {
            // Check if the toast is already displayed using toast.isActive
            if (!toast.isActive(toastId)) {
                toast.error('You can search only in English!', {
                    toastId,  // Specify the toastId to control uniqueness
                    position: "top-right",
                    autoClose: 3000,  // Set the timeout to automatically close the toast
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            return;
        }

        setQuery(value); // Update the query state with the new input value
        debouncedFetchResults(value); // Fetch results using the debounced function
        setShowResults(true); // Show the results dropdown
    };

    // Handle selection of a search result
    const handleSelectResult = (name: string) => {
        setQuery(''); // Clear the search query input
        setShowResults(false); // Hide the search results dropdown
        navigate(`/search?name=${name}`); // Navigate to the search results page for the selected product
    };

    // Close the search results if the user clicks outside the search bar
    const handleClickOutside = (e: MouseEvent) => {
        if (searchBarRef.current && !searchBarRef.current.contains(e.target as Node)) {
            setShowResults(false); // Hide the results dropdown if clicked outside
        }
    };

    // Add event listener to detect clicks outside the search bar
    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []); // Only run this effect once on component mount

    return (
        <div className="search-bar-container" ref={searchBarRef}>
            <input
                type="text"
                value={query} // Input value bound to query state
                onChange={handleInputChange} // Handle input changes
                placeholder="Search..." // Placeholder text for the input field
                className="search-input"
                onFocus={() => setShowResults(true)} // Show results when input is focused
            />
            <button className='search-input-button' type="button" onClick={() => handleSelectResult(query)}>
                <FaSearch /> {/* Search icon button */}
            </button>
            <div className='search-bar-result-list-container'>
                {showResults && results.length > 0 && ( // Conditionally render search results dropdown
                    <ul className="results-list">
                        {results.map((result) => (
                            <li className='search-bar-results-list-dropdown' key={result._id} onClick={() => handleSelectResult(result.productName)}>
                                {result.productName} {/* Display product name in the results */}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
