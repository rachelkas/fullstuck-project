// src/pages/SearchResultsPage.tsx

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import api from '../utils/api';
import { RootState } from '../store';  // Import RootState type for accessing the Redux store state
import './pages-style/SearchResultsPage.css';  // Import the CSS for styling

// Define the Product interface to type the product data
interface Product {
    _id: string;
    productName: string;
    image: string;
    description: string;
    price: number;
}

const SearchResultsPage: React.FC = () => {
    // State to manage the search results
    const [results, setResults] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);  // State to handle loading status
    const [error, setError] = useState<string | null>(null);  // State to handle any error messages
    const location = useLocation();  // Hook to access the current URL location

    // Access the products stored in Redux
    const productsInRedux = useSelector((state: RootState) => state.products.items);

    // Function to fetch search results, either from Redux or from the backend API
    const fetchSearchResults = async (query: string) => {
        // Filter the products from Redux that match the search query
        const filteredProducts = productsInRedux.filter(product =>
            product.productName.toLowerCase().includes(query.toLowerCase())
        );

        // If products are found in Redux, use them and stop loading
        if (filteredProducts.length > 0) {
            setResults(filteredProducts);
            setLoading(false);
            return;
        }

        // If no results in Redux, fetch from the backend API
        setLoading(true);
        try {
            const response = await api.get(`/products/search?name=${query}`);
            setResults(response.data);  // Set the fetched data to the results state
            setLoading(false);  // Stop loading after fetching
        } catch (error) {
            console.error('Error fetching search results', error);  // Log error
            setError('Error fetching search results');  // Display error message
            setLoading(false);  // Stop loading
        }
    };

    // Effect hook to fetch the search results when the search query in the URL changes
    useEffect(() => {
        const params = new URLSearchParams(location.search);  // Get the search parameters from the URL
        const query = params.get('name') || '';  // Extract the 'name' query parameter
        if (query) {
            fetchSearchResults(query);  // Fetch the search results based on the query
        }
    }, [location.search]);  // Run the effect whenever the URL changes

    return (
        <div className="search-results-page">
            <h2>Search Results</h2>
            {/* Display loading message while fetching */}
            {loading && <p>Loading...</p>}
            {/* Display any error message */}
            {error && <p>{error}</p>}
            {/* Show a message if there are no results */}
            {!loading && results.length === 0 && <p>No results found</p>}
            {/* Display the search results if available */}
            {!loading && results.length > 0 && (
                <div className="results-list">
                    {results.map((product) => (
                        <div key={product._id} className="single-product">
                            <h3>{product.productName}</h3>
                            <img src={product.image} alt={product.productName} />
                            <div className="product-description">
                                <p>{product.description}</p>
                                <p><strong>Price:</strong> ${product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchResultsPage;
