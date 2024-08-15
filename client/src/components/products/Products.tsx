// import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { fetchProducts } from '../../slices/productSlice';
// import { RootState, useAppDispatch } from '../../store';
// import Pagination from '../Pagination/Pagination';
// import './products.css';

// const Products: React.FC = () => {
//     const dispatch = useAppDispatch();
//     const products = useSelector((state: RootState) => state.products.items);
//     const loading = useSelector((state: RootState) => state.products.loading);
//     const error = useSelector((state: RootState) => state.products.error);

//     useEffect(() => {
//         dispatch(fetchProducts());
//     }, [dispatch]);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error}</p>;

//     return (
//         <div className="products-page">
//             <h2>Products</h2>
//             <div className="products-list">
//                 {products.map(product => (
//                     <div key={product._id} className="single-product">
//                         <h3>{product.productName}</h3>
//                         <img src={product.image} alt={product.productName} />
//                         <div className="product-description">
//                             <p>{product.description}</p>
//                             <p><span className="bold-text">Price: </span>${product.price}</p>
//                         </div>
//                         <button type="button">Add to cart</button>
//                     </div>
//                 ))}
//             </div>
//             <Pagination productsPerPage={10} totalProducts={products.length} paginate={() => { }} currentPage={1} />
//         </div>
//     );
// };

// export default Products;

































// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { RootState, useAppDispatch } from '../../store'; // Import useAppDispatch
// import { fetchProducts } from '../../slices/productSlice';
// import SingleProduct from '../singleProduct/SingleProduct';
// import Pagination from '../Pagination/Pagination';
// import './products.css';

// const Products: React.FC = () => {
//     const dispatch = useAppDispatch(); // Use the custom typed dispatch hook
//     const products = useSelector((state: RootState) => state.products.items);
//     const loading = useSelector((state: RootState) => state.products.loading);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [productsPerPage] = useState(3);

//     useEffect(() => {
//         dispatch(fetchProducts());
//     }, [dispatch]);

//     // Get current products
//     const indexOfLastProduct = currentPage * productsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//     const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

//     // Change page
//     const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//     return (
//         <div>
//             <h1>Products</h1>
//             <div className="product-grid">
//                 {loading ? (
//                     <p>Loading...</p>
//                 ) : (
//                     currentProducts.map((product) => (
//                         <SingleProduct
//                             key={product._id}
//                             id={product._id}
//                             image={product.image}
//                             name={product.productName}
//                             price={product.price}
//                             description={product.description}
//                             onAddToCart={() => console.log(`Add to cart: ${product._id}`)}
//                             onAddToFavorites={() => console.log(`Add to favorites: ${product._id}`)}
//                         />
//                     ))
//                 )}
//             </div>
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







































// // src/components/products/Products.tsx
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

//     // Get current products
//     const indexOfLastProduct = currentPage * productsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//     const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

//     // Change page
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











































































import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { fetchProducts } from '../../slices/productSlice';
import SingleProduct from '../singleProduct/SingleProduct';
import Pagination from '../Pagination/Pagination';
import './products.css';

const Products: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const products = useSelector((state: RootState) => state.products.items);
    const loading = useSelector((state: RootState) => state.products.loading);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 3;

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className="products-container">
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
