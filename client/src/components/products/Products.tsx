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
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { fetchProducts } from '../../slices/productSlice';
import SingleProduct from '../singleProduct/SingleProduct';
import Pagination from '../Pagination/Pagination';
import './products.css';
import { useNavigate } from 'react-router-dom';

const Products: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const products = useSelector((state: RootState) => state.products.items);
    const loading = useSelector((state: RootState) => state.products.loading);
    const [currentPage, setCurrentPage] = useState(1);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const productsPerPage = 3;
    const navigate = useNavigate();

    // Fetch all products on initial load
    useEffect(() => {
        dispatch(fetchProducts({ minPrice: '', maxPrice: '' }));
    }, [dispatch]);

    // Handle filtering by price
    const handleFilter = () => {
        dispatch(fetchProducts({ minPrice, maxPrice }));
    };

    // Clear filter and fetch all products
    const handleCancelFilter = () => {
        setMinPrice('');
        setMaxPrice('');
        dispatch(fetchProducts({ minPrice: '', maxPrice: '' }));
    };

    // Clear filter and navigate to home
    const handleLogoOrHomeClick = () => {
        handleCancelFilter();
        navigate('/');
    };

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className="products-container">
            <div className="filter-container">
                <input
                    type="number"
                    placeholder="Min Price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />
                <button onClick={handleFilter}>Filter</button>
                <button onClick={handleCancelFilter} className="cancel-btn">Cancel</button>
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                currentProducts.map((product) => (
                    <SingleProduct key={product._id} product={product} />
                ))
            )}
            <Pagination
                productsPerPage={productsPerPage}
                totalProducts={products.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
    );
};

export default Products;
