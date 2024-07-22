// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from '../utils/api';
// import './SearchResultsPage.css';
// import SingleProduct from '../components/singleProduct/SingleProduct';

// const SearchResultsPage: React.FC = () => {
//     const [results, setResults] = useState([]);
//     const location = useLocation();

//     useEffect(() => {
//         const query = new URLSearchParams(location.search).get('query');
//         const fetchResults = async () => {
//             try {
//                 const response = await axios.get(`/products/search?name=${query}`);
//                 setResults(response.data);
//             } catch (error) {
//                 console.error('Error fetching search results', error);
//             }
//         };

//         if (query) {
//             fetchResults();
//         }
//     }, [location.search]);

//     return (
//         <div className="search-results-page">
//             <h2>Search Results</h2>
//             {results.length > 0 ? (
//                 <div className="search-results">
//                     {results.map((product: any) => (
//                         <SingleProduct key={product._id} product={product} />
//                     ))}
//                 </div>
//             ) : (
//                 <p>No results found</p>
//             )}
//         </div>
//     );
// };

// export default SearchResultsPage;
















// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from '../utils/api';
// import SingleProduct from '../components/singleProduct/SingleProduct';
// import './SearchResultsPage.css';

// const SearchResultsPage: React.FC = () => {
//     const [results, setResults] = useState([]);
//     const location = useLocation();

//     const fetchSearchResults = async (query: string) => {
//         try {
//             const response = await axios.get(`/products/search?name=${query}`);
//             setResults(response.data);
//         } catch (error) {
//             console.error('Error fetching search results', error);
//         }
//     };

//     useEffect(() => {
//         const params = new URLSearchParams(location.search);
//         const query = params.get('query') || '';
//         if (query) {
//             fetchSearchResults(query);
//         }
//     }, [location.search]);

//     return (
//         <div className="search-results-page">
//             <h2>Search Results</h2>
//             {results.length > 0 ? (
//                 <div className="results-list">
//                     {results.map((product: any) => (
//                         <SingleProduct key={product._id} product={product} />
//                     ))}
//                 </div>
//             ) : (
//                 <p>No results found</p>
//             )}
//         </div>
//     );
// };

// export default SearchResultsPage;

















import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from '../utils/api';
// import SingleProduct from '../singleProduct/SingleProduct';
import SingleProduct from '../components/singleProduct/SingleProduct';
import './SearchResultsPage.css';

const SearchResultsPage: React.FC = () => {
    const [results, setResults] = useState([]);
    const location = useLocation();

    const fetchSearchResults = async (query: string) => {
        try {
            const response = await axios.get(`/products/search?name=${query}`);
            setResults(response.data);
        } catch (error) {
            console.error('Error fetching search results', error);
        }
    };

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const query = params.get('query') || '';
        if (query) {
            fetchSearchResults(query);
        }
    }, [location.search]);

    return (
        <div className="search-results-page">
            <h2>Search Results</h2>
            {results.length > 0 ? (
                <div className="results-list">
                    {results.map((product: any) => (
                        <SingleProduct key={product._id} product={product} />
                    ))}
                </div>
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
};

export default SearchResultsPage;