// // src/components/searchBar/SearchBar.tsx

// import React, { useState, useCallback, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaSearch } from 'react-icons/fa';
// import { debounce } from 'lodash';
// import api from '../../utils/api';
// import './SearchBar.css';

// interface Product {
//     _id: string;
//     productName: string;
// }

// const SearchBar: React.FC = () => {
//     const [query, setQuery] = useState('');
//     const [results, setResults] = useState<Product[]>([]);
//     const [showResults, setShowResults] = useState(false);
//     const searchBarRef = useRef<HTMLDivElement>(null);
//     const navigate = useNavigate();

//     const fetchResults = async (query: string) => {
//         if (query.trim() === '') return;
//         try {
//             const response = await api.get(`/products/search?name=${query}`);
//             setResults(response.data);
//         } catch (error) {
//             console.error('Error fetching search results:', error);
//         }
//     };

//     const debouncedFetchResults = useCallback(
//         debounce((query: string) => {
//             fetchResults(query);
//         }, 500),
//         []
//     );

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const value = e.target.value;
//         setQuery(value);
//         debouncedFetchResults(value);
//         setShowResults(true);
//     };

//     const handleSelectResult = (name: string) => {
//         setQuery('');
//         setShowResults(false);
//         navigate(`/search?query=${name}`);
//     };

//     const handleClickOutside = (e: MouseEvent) => {
//         if (searchBarRef.current && !searchBarRef.current.contains(e.target as Node)) {
//             setShowResults(false);
//         }
//     };

//     React.useEffect(() => {
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     return (
//         <div className="search-bar-container" ref={searchBarRef}>
//             <input
//                 type="text"
//                 value={query}
//                 onChange={handleInputChange}
//                 placeholder="Search..."
//                 className="search-input"
//                 onFocus={() => setShowResults(true)}
//             />
//             <button type="button" onClick={() => handleSelectResult(query)}>
//                 <FaSearch />
//             </button>
//             {showResults && results.length > 0 && (
//                 <ul className="results-list">
//                     {results.map((result) => (
//                         <li key={result._id} onClick={() => handleSelectResult(result.productName)}>
//                             {result.productName}
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default SearchBar;













































































import React, { useState, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { debounce } from 'lodash';
import api from '../../utils/api';
import './SearchBar.css';

interface Product {
    _id: string;
    productName: string;
}

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Product[]>([]);
    const [showResults, setShowResults] = useState(false);
    const searchBarRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const fetchResults = async (query: string) => {
        if (query.trim() === '') return;
        try {
            const response = await api.get(`/products/search?name=${query}`);
            setResults(response.data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    const debouncedFetchResults = useCallback(
        debounce((query: string) => {
            fetchResults(query);
        }, 500),
        []
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        debouncedFetchResults(value);
        setShowResults(true);
    };

    const handleSelectResult = (name: string) => {
        setQuery('');
        setShowResults(false);
        navigate(`/search?query=${name}`);
    };

    const handleClickOutside = (e: MouseEvent) => {
        if (searchBarRef.current && !searchBarRef.current.contains(e.target as Node)) {
            setShowResults(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="search-bar-container" ref={searchBarRef}>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search..."
                className="search-input"
                onFocus={() => setShowResults(true)}
            />
            <button type="button" onClick={() => handleSelectResult(query)}>
                <FaSearch />
            </button>
            {showResults && results.length > 0 && (
                <ul className="results-list">
                    {results.map((result) => (
                        <li key={result._id} onClick={() => handleSelectResult(result.productName)}>
                            {result.productName}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
