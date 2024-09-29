import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { fetchProducts } from '../../slices/productSlice';
import SingleProduct from '../singleProduct/SingleProduct';
import Pagination from '../Pagination/Pagination';
import './products.css';
import { useNavigate } from 'react-router-dom';
import PriceFilter from '../priceFilter/PriceFilter'; // Import the PriceFilter component for filtering products by price

// Functional component to display a list of products with pagination and price filtering
const Products: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const products = useSelector((state: RootState) => state.products.items); // Get products from Redux state
    const loading = useSelector((state: RootState) => state.products.loading); // Get loading state
    const [currentPage, setCurrentPage] = useState(1); // State for current page in pagination
    const [minPrice, setMinPrice] = useState(0); // State for minimum price filter
    const [maxPrice, setMaxPrice] = useState(1000); // Default maximum price, can be updated dynamically
    const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]); // State for selected price range
    const productsPerPage = 3; // Number of products to display per page
    const navigate = useNavigate();

    // Fetch all products on initial load and set the max price dynamically
    useEffect(() => {
        dispatch(fetchProducts({ minPrice: '', maxPrice: '' })).then((response: any) => {
            const fetchedProducts = response.payload; // Fetching products from the API
            if (fetchedProducts && fetchedProducts.length > 0) {
                const fetchedMaxPrice = Math.max(...fetchedProducts.map((product: any) => product.price)); // Find the maximum price
                setMaxPrice(fetchedMaxPrice); // Update the max price state
                setPriceRange([0, fetchedMaxPrice]); // Set price range based on fetched data
            }
        });
    }, [dispatch]); // Effect runs when the dispatch function changes

    // Handle filtering by price range
    const handleFilter = () => {
        dispatch(
            fetchProducts({
                minPrice: priceRange[0].toString(), // Convert the minimum price to string
                maxPrice: priceRange[1].toString(), // Convert the maximum price to string
            })
        );
    };

    // Reset the filters to the default state
    const handleResetFilters = () => {
        setPriceRange([0, maxPrice]); // Reset the price range to default
        dispatch(fetchProducts({ minPrice: '', maxPrice: '' })); // Fetch all products without filters
    };

    // Handle changes in the price range slider
    const handleSliderChange = (value: number | number[]) => {
        if (Array.isArray(value)) {
            setPriceRange([value[0], value[1]]); // Update the price range state with the new values
        }
    };

    // Calculate the indices for the current page's products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct); // Slice products for current page

    // Update the current page number for pagination
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className="products-container">
            <PriceFilter
                onApplyFilter={handleFilter} // Apply the filter on button click
                onResetFilters={handleResetFilters} // Reset filters to default
                maxPrice={maxPrice} // Max price for the slider
                minPrice={minPrice} // Min price for the slider
                priceRange={priceRange} // Current price range selected by the user
                handleSliderChange={handleSliderChange} // Update the slider values when the user changes it
            />
            <div className="products-row">
                {loading ? (
                    <p>Loading...</p> // Display loading message when data is being fetched
                ) : (
                    currentProducts.map((product) => (
                        <SingleProduct key={product._id} product={product} /> // Display individual products
                    ))
                )}
            </div>
            <Pagination
                productsPerPage={productsPerPage} // Number of products per page
                totalProducts={products.length} // Total number of products available
                paginate={paginate} // Function to change the page
                currentPage={currentPage} // Current active page
            />
        </div>
    );
};

export default Products;
