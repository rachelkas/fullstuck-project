// import React, { useState } from 'react';
// import { FaSearch } from 'react-icons/fa';
// import axios from '../../utils/api';
// import './SearchBar.css';

// const SearchBar: React.FC = () => {
//     const [query, setQuery] = useState('');
//     const [results, setResults] = useState([]);

//     const handleSearch = async (e: React.FormEvent) => {
//         e.preventDefault();
//         if (query.trim() === '') return;
//         try {
//             console.log(`Searching for: ${query}`);
//             const response = await axios.get(`/products/search?name=${query}`);
//             console.log('Search results:', response.data);
//             setResults(response.data);
//         } catch (error) {
//             console.error('Error fetching search results', error);
//         }
//     };

//     return (
//         <div className="search-bar-container">
//             <form onSubmit={handleSearch} className="search-form">
//                 <button type="submit"><FaSearch /></button>
//                 <input
//                     type="text"
//                     placeholder="Search"
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                 />
//             </form>
//             {results.length > 0 && (
//                 <div className="search-results">
//                     {results.map((product: any) => (
//                         <div key={product._id} className="search-result-item">
//                             {product.name}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default SearchBar;







// import React, { useState } from 'react';
// import { FaSearch } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import axios from '../../utils/api';
// import './SearchBar.css';

// const SearchBar: React.FC = () => {
//     const [query, setQuery] = useState('');
//     const [suggestions, setSuggestions] = useState([]);
//     const navigate = useNavigate();

//     const handleSearch = async (e: React.FormEvent) => {
//         e.preventDefault();
//         if (query.trim() === '') return;
//         navigate(`/search?query=${query}`);
//     };

//     const fetchSuggestions = async (searchQuery: string) => {
//         try {
//             const response = await axios.get(`/products/search?name=${searchQuery}`);
//             setSuggestions(response.data);
//         } catch (error) {
//             console.error('Error fetching search suggestions', error);
//         }
//     };

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const value = e.target.value;
//         setQuery(value);
//         if (value.trim() !== '') {
//             fetchSuggestions(value);
//         } else {
//             setSuggestions([]);
//         }
//     };

//     return (
//         <div className="search-bar-container">
//             <form onSubmit={handleSearch} className="search-form">
//                 <button type="submit"><FaSearch /></button>
//                 <input
//                     type="text"
//                     placeholder="Search"
//                     value={query}
//                     onChange={handleChange}
//                 />
//             </form>
//             {suggestions.length > 0 && (
//                 <div className="search-suggestions">
//                     {suggestions.map((product: any) => (
//                         <div key={product._id} className="suggestion-item">
//                             {product.name}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default SearchBar;




























import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import debounce from 'lodash/debounce';
import './SearchBar.css';

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const searchBarRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const fetchResults = async (query: string) => {
        if (query.trim() === '') return;
        try {
            const response = await axios.get(`/products/search?name=${query}`);
            setResults(response.data);
            setShowResults(true);
        } catch (error) {
            console.error('Error fetching search results', error);
        }
    };

    const debouncedFetchResults = useCallback(
        debounce((query: string) => {
            fetchResults(query);
        }, 450), // Delay of 300ms
        []
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        debouncedFetchResults(value);
    };

    const handleClickOutside = (e: MouseEvent) => {
        if (searchBarRef.current && !searchBarRef.current.contains(e.target as Node)) {
            setShowResults(false);
        }
    };

    const handleResultClick = (productName: string) => {
        setQuery(productName);
        setShowResults(false);
        navigate(`/search?query=${productName}`);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="search-bar-container" ref={searchBarRef}>
            <form onSubmit={(e) => { e.preventDefault(); navigate(`/search?query=${query}`); }} className="search-form">
                <button type="submit"><FaSearch /></button>
                <input
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={handleChange}
                />
            </form>
            {showResults && results.length > 0 && (
                <div className="search-results">
                    {results.map((product: any) => (
                        <div key={product._id} className="search-result-item" onClick={() => handleResultClick(product.name)}>
                            {product.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;