// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState, AppDispatch } from '../../store';
// import { fetchProducts } from '../../slices/productSlice';
// import SingleProduct from '../singleProduct/SingleProduct';
// import Pagination from '../Pagination/Pagination';
// import './products.css';

// const Products: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();
//     const products = useSelector((state: RootState) => state.products.items);
//     const loading = useSelector((state: RootState) => state.products.loading);
//     const [currentPage, setCurrentPage] = useState(1);
//     const productsPerPage = 3;

//     useEffect(() => {
//         dispatch(fetchProducts());
//     }, [dispatch]);

//     const indexOfLastProduct = currentPage * productsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//     const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

//     const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//     return (
//         <div className="products-container">
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 currentProducts.map((product) => (
//                     <SingleProduct key={product._id} product={product} />
//                 ))
//             )}
//             <Pagination
//                 productsPerPage={productsPerPage}
//                 totalProducts={products.length}
//                 paginate={paginate}
//                 currentPage={currentPage}
//             />
//         </div>
//     );
// };

// export default Products;




























// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState, AppDispatch } from '../../store';
// import { fetchProducts } from '../../slices/productSlice';
// import SingleProduct from '../singleProduct/SingleProduct';
// import Pagination from '../Pagination/Pagination';
// import './products.css';

// const Products: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();
//     const products = useSelector((state: RootState) => state.products.items);
//     const loading = useSelector((state: RootState) => state.products.loading);

//     const [currentPage, setCurrentPage] = useState(1);
//     const productsPerPage = 3;

//     const [minPrice, setMinPrice] = useState<number | string>(''); // Price filtering state
//     const [maxPrice, setMaxPrice] = useState<number | string>('');

//     useEffect(() => {
//         dispatch(fetchProducts());
//     }, [dispatch]);

//     // Filter products based on price range
//     const filteredProducts = products.filter(product => {
//         const productPrice = product.price;
//         const min = minPrice !== '' ? Number(minPrice) : 0;
//         const max = maxPrice !== '' ? Number(maxPrice) : Number.MAX_VALUE;
//         return productPrice >= min && productPrice <= max;
//     });

//     const indexOfLastProduct = currentPage * productsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//     const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

//     const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//     const handlePriceFilter = (e: React.FormEvent) => {
//         e.preventDefault();
//         setCurrentPage(1); // Reset to the first page after filtering
//     };

//     return (
//         <div className="products-container">
//             <form className="price-filter-form" onSubmit={handlePriceFilter}>
//                 <label>
//                     Min Price:
//                     <input
//                         type="number"
//                         value={minPrice}
//                         onChange={(e) => setMinPrice(e.target.value)}
//                         placeholder="Min"
//                     />
//                 </label>
//                 <label>
//                     Max Price:
//                     <input
//                         type="number"
//                         value={maxPrice}
//                         onChange={(e) => setMaxPrice(e.target.value)}
//                         placeholder="Max"
//                     />
//                 </label>
//                 <button type="submit">Filter</button>
//             </form>

//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 currentProducts.map((product) => (
//                     <SingleProduct key={product._id} product={product} />
//                 ))
//             )}
//             <Pagination
//                 productsPerPage={productsPerPage}
//                 totalProducts={filteredProducts.length}
//                 paginate={paginate}
//                 currentPage={currentPage}
//             />
//         </div>
//     );
// };

// export default Products;













































// src/components/products/Products.tsx
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState, AppDispatch } from '../../store';
// import { fetchProducts } from '../../slices/productSlice';
// import SingleProduct from '../singleProduct/SingleProduct';
// import Pagination from '../Pagination/Pagination';
// import './products.css';
// import { useNavigate } from 'react-router-dom';

// const Products: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();
//     const products = useSelector((state: RootState) => state.products.items);
//     const loading = useSelector((state: RootState) => state.products.loading);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [minPrice, setMinPrice] = useState('');
//     const [maxPrice, setMaxPrice] = useState('');
//     const productsPerPage = 3;
//     const navigate = useNavigate();

//     // Fetch all products on initial load
//     useEffect(() => {
//         dispatch(fetchProducts({ minPrice: '', maxPrice: '' }));
//     }, [dispatch]);

//     // Handle filtering by price
//     const handleFilter = () => {
//         dispatch(fetchProducts({ minPrice, maxPrice }));
//     };

//     // Clear filter and fetch all products
//     const handleCancelFilter = () => {
//         setMinPrice('');
//         setMaxPrice('');
//         dispatch(fetchProducts({ minPrice: '', maxPrice: '' }));
//     };

//     // Clear filter and navigate to home
//     const handleLogoOrHomeClick = () => {
//         handleCancelFilter();
//         navigate('/');
//     };

//     const indexOfLastProduct = currentPage * productsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//     const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

//     const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//     return (
//         <div className="products-container">
//             <div className="filter-container">
//                 <input
//                     type="number"
//                     placeholder="Min Price"
//                     value={minPrice}
//                     onChange={(e) => setMinPrice(e.target.value)}
//                 />
//                 <input
//                     type="number"
//                     placeholder="Max Price"
//                     value={maxPrice}
//                     onChange={(e) => setMaxPrice(e.target.value)}
//                 />
//                 <button onClick={handleFilter}>Filter</button>
//                 <button onClick={handleCancelFilter} className="cancel-btn">Cancel</button>
//             </div>
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 currentProducts.map((product) => (
//                     <SingleProduct key={product._id} product={product} />
//                 ))
//             )}
//             <Pagination
//                 productsPerPage={productsPerPage}
//                 totalProducts={products.length}
//                 paginate={paginate}
//                 currentPage={currentPage}
//             />
//         </div>
//     );
// };

// export default Products;





















// src/components/products/Products.tsx
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState, AppDispatch } from '../../store';
// import { fetchProducts } from '../../slices/productSlice';
// import SingleProduct from '../singleProduct/SingleProduct';
// import Pagination from '../Pagination/Pagination';
// import './products.css';
// import { useNavigate } from 'react-router-dom';
// import PriceFilter from '../PriceFilter'; // Import the PriceFilter component

// const Products: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();
//     const products = useSelector((state: RootState) => state.products.items);
//     const loading = useSelector((state: RootState) => state.products.loading);
//     const [currentPage, setCurrentPage] = useState(1);
//     const productsPerPage = 3;
//     const navigate = useNavigate();

//     // Handle price filter changes
//     const handleFilter = (minPrice: number, maxPrice: number) => {
//         dispatch(fetchProducts({ minPrice: minPrice.toString(), maxPrice: maxPrice.toString() }));
//     };

//     // Clear the filter
//     const handleCancelFilter = () => {
//         dispatch(fetchProducts({ minPrice: '', maxPrice: '' }));
//     };

//     const indexOfLastProduct = currentPage * productsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//     const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

//     const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//     return (
//         <div className="products-container">
//             <div className="products-content">
//                 {/* Products List */}
//                 {loading ? (
//                     <p>Loading...</p>
//                 ) : (
//                     currentProducts.map((product) => (
//                         <SingleProduct key={product._id} product={product} />
//                     ))
//                 )}

//                 <Pagination
//                     productsPerPage={productsPerPage}
//                     totalProducts={products.length}
//                     paginate={paginate}
//                     currentPage={currentPage}
//                 />
//             </div>

//             <div className="filter-sidebar">
//                 {/* Price filter in the sidebar */}
//                 <PriceFilter onFilter={handleFilter} onCancel={handleCancelFilter} />
//             </div>
//         </div>
//     );
// };

// export default Products;





























// src/components/products/Products.tsx
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState, AppDispatch } from '../../store';
// import { fetchProducts } from '../../slices/productSlice';
// import SingleProduct from '../singleProduct/SingleProduct';
// import Pagination from '../Pagination/Pagination';
// import './products.css';
// import { useNavigate } from 'react-router-dom';
// import PriceFilter from '../PriceFilter';

// const Products: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();
//     const products = useSelector((state: RootState) => state.products.items);
//     const loading = useSelector((state: RootState) => state.products.loading);
//     const [currentPage, setCurrentPage] = useState(1);
//     const productsPerPage = 3;

//     // Fetch products on initial load
//     useEffect(() => {
//         dispatch(fetchProducts({ minPrice: '', maxPrice: '' })); // Fetch without filter initially
//     }, [dispatch]);

//     const handleFilter = (minPrice: number, maxPrice: number) => {
//         dispatch(fetchProducts({ minPrice: minPrice.toString(), maxPrice: maxPrice.toString() }));
//     };

//     const handleCancelFilter = () => {
//         dispatch(fetchProducts({ minPrice: '', maxPrice: '' }));
//     };

//     const indexOfLastProduct = currentPage * productsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//     const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

//     const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//     return (
//         <div className="products-container">
//             <PriceFilter onFilter={handleFilter} onResetFilters={handleCancelFilter} minPrice={0} maxPrice={0} />
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 currentProducts.map((product) => (
//                     <SingleProduct key={product._id} product={product} />
//                 ))
//             )}
//             <Pagination
//                 productsPerPage={productsPerPage}
//                 totalProducts={products.length}
//                 paginate={paginate}
//                 currentPage={currentPage}
//             />
//         </div>
//     );
// };

// export default Products;








































// src/components/products/Products.tsx
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState, AppDispatch } from '../../store';
// import { fetchProducts } from '../../slices/productSlice';
// import SingleProduct from '../singleProduct/SingleProduct';
// import Pagination from '../Pagination/Pagination';
// import './products.css';
// import { useNavigate } from 'react-router-dom';
// import PriceFilter from '../PriceFilter'; // Import the PriceFilter

// const Products: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();
//     const products = useSelector((state: RootState) => state.products.items);
//     const loading = useSelector((state: RootState) => state.products.loading);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [minPrice, setMinPrice] = useState(0);
//     const [maxPrice, setMaxPrice] = useState(1000); // Default max price, will be updated
//     const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]); // Price range for filter
//     const productsPerPage = 3;
//     const navigate = useNavigate();

//     // Fetch all products on initial load and get the max price
//     useEffect(() => {
//         dispatch(fetchProducts({ minPrice: '', maxPrice: '' })).then((response: any) => {
//             const fetchedProducts = response.payload; // Assuming fetchProducts action returns products
//             if (fetchedProducts && fetchedProducts.length > 0) {
//                 const fetchedMaxPrice = Math.max(...fetchedProducts.map((product: any) => product.price));
//                 setMaxPrice(fetchedMaxPrice); // Set the max price as the price of the most expensive item
//                 setPriceRange([0, fetchedMaxPrice]); // Set the price range with 0 as min and the max price as the max
//             }
//         });
//     }, [dispatch]);


//     // Handle filtering by price
//     const handleFilter = () => {
//         dispatch(
//             fetchProducts({
//                 minPrice: priceRange[0].toString(), // Convert to string
//                 maxPrice: priceRange[1].toString(), // Convert to string
//             })
//         );
//     };

//     // Reset filters
//     const handleResetFilters = () => {
//         setPriceRange([0, maxPrice]); // Reset to default range
//         dispatch(fetchProducts({ minPrice: '', maxPrice: '' }));
//     };

//     // Handle slider change in PriceFilter
//     const handleSliderChange = (value: number | number[]) => {
//         if (Array.isArray(value)) {
//             setPriceRange([value[0], value[1]]); // Safely assign the value
//         }
//     };

//     const indexOfLastProduct = currentPage * productsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//     const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

//     const paginate = (pageNumber: number) => setCurrentPage(pageNumber);


//     return (
//         <div className="products-container">
//             <PriceFilter
//                 onApplyFilter={handleFilter} // Apply the filter
//                 onResetFilters={handleResetFilters} // Reset filters
//                 maxPrice={maxPrice} // Max price for the slider
//                 minPrice={minPrice} // Min price for the slider
//                 priceRange={priceRange} // Current price range
//                 handleSliderChange={handleSliderChange} // Handle slider movement
//             />
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 currentProducts.map((product) => (
//                     <SingleProduct key={product._id} product={product} />
//                 ))
//             )}
//             <Pagination
//                 productsPerPage={productsPerPage}
//                 totalProducts={products.length}
//                 paginate={paginate}
//                 currentPage={currentPage}
//             />
//         </div>
//     );
// };

// export default Products;



































// src/components/products/Products.tsx
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { fetchProducts } from '../../slices/productSlice';
import SingleProduct from '../singleProduct/SingleProduct';
import Pagination from '../Pagination/Pagination';
import './products.css';
import { useNavigate } from 'react-router-dom';
import PriceFilter from '../PriceFilter'; // Import the PriceFilter component for filtering products by price

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
            {loading ? (
                <p>Loading...</p> // Display loading message when data is being fetched
            ) : (
                currentProducts.map((product) => (
                    <SingleProduct key={product._id} product={product} /> // Display individual products
                ))
            )}
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
