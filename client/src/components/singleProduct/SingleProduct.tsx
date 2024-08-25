import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CiHeart } from 'react-icons/ci';
import { addToCart, addToFavorites } from '../../slices/userSlice';
import { SingleProductProps } from '../../common/interfaces';
import { RootState } from '../../store';
import './singleProduct.css';

const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

    const handleAddToCart = () => {
        if (isAuthenticated) {
            dispatch(addToCart(product._id) as any);
        } else {
            alert('Please login to add products to the cart');
        }
    };

    const handleAddToFavorites = () => {
        if (isAuthenticated) {
            dispatch(addToFavorites(product._id) as any);
        } else {
            alert('Please login to add products to favorites');
        }
    };

    return (
        <div className="single-product">
            <h3>{product.productName}</h3>
            <img src={product.image} alt={product.productName} />
            <div className="product-description">
                <p>{product.description}</p>
                <p><span className="bold-text">Price: </span>${product.price}</p>
            </div>
            <div className="product-actions">
                <button onClick={handleAddToCart} className="add-to-cart-btn">Add to Cart</button>
                <button onClick={handleAddToFavorites} className="add-to-favorites-btn">
                    <CiHeart />
                </button>
            </div>
        </div>
    );
}

export default SingleProduct;
