// // src/pages/SearchResultsPage.tsx

// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import api from '../utils/api';
// import './SearchResultsPage.css';

// interface Product {
//     _id: string;
//     productName: string;
//     image: string;
//     description: string;
//     price: number;
// }

// const SearchResultsPage: React.FC = () => {
//     const [results, setResults] = useState<Product[]>([]);
//     const location = useLocation();

//     const fetchSearchResults = async (query: string) => {
//         try {
//             const response = await api.get(`/products/search?name=${query}`);
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
//                     {results.map((product) => (
//                         <div key={product._id} className="single-product">
//                             <h3>{product.productName}</h3>
//                             <img src={product.image} alt={product.productName} />
//                             <div className="product-description">
//                                 <p>{product.description}</p>
//                                 <p><span className="bold-text">Price: </span>${product.price}</p>
//                             </div>
//                         </div>
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
import api from '../utils/api';
import './SearchResultsPage.css';

interface Product {
    _id: string;
    productName: string;
    image: string;
    description: string;
    price: number;
}

const SearchResultsPage: React.FC = () => {
    const [results, setResults] = useState<Product[]>([]);
    const location = useLocation();

    const fetchSearchResults = async (query: string) => {
        try {
            const response = await api.get(`/products/search?name=${query}`);
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
                    {results.map((product) => (
                        <div key={product._id} className="single-product">
                            <h3>{product.productName}</h3>
                            <img src={product.image} alt={product.productName} />
                            <div className="product-description">
                                <p>{product.description}</p>
                                <p><span className="bold-text">Price: </span>${product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
};

export default SearchResultsPage;
