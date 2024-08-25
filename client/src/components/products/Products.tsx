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
