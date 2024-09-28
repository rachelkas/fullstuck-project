import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CiHeart } from 'react-icons/ci';
import { BiPencil, BiTrash } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai'; // Filled heart icon
import { useNavigate } from 'react-router-dom';
import { addToCart, addToFavorites, removeFromFavorites } from '../../slices/userSlice';
import { deleteProduct } from '../../slices/productSlice';
import { SingleProductProps } from '../../common/interfaces';
import { RootState } from '../../store';
import './singleProduct.css';
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import { toast } from 'react-toastify'; // Import the toast function

const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
    // Initialize dispatch to trigger Redux actions
    const dispatch = useDispatch();

    // Hook to navigate between pages using React Router
    const navigate = useNavigate();

    // Check if the user is authenticated and get the user's role from the Redux store
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
    const userRole = useSelector((state: RootState) => state.user.userDetails.role);

    // Get the user's favorite products from the Redux store
    const favorites = useSelector((state: RootState) => state.user.favorites);

    // Local state to handle the favorite button click visually
    const [isFavoriteClicked, setFavoriteClicked] = useState(false);

    // Check if the current product is already in the user's favorites
    const isFavorite = favorites.some((fav: any) => fav === product._id || fav._id === product._id);

    // Handle adding a product to the cart
    const handleAddToCart = () => {
        if (isAuthenticated) {
            // Dispatch the action to add the product to the cart
            dispatch(addToCart(product._id) as any);
            toast.success("Product added to cart!", { autoClose: 2000 });
        } else {
            // Show a toast if the user is not authenticated
            toast.error('Please login to add products to the cart', { autoClose: 2000 });
        }
    };

    // Handle adding or removing a product from the favorites
    const handleAddToFavorites = () => {
        if (isAuthenticated) {
            if (isFavorite) {
                // Remove from favorites if it's already favorited
                dispatch(removeFromFavorites(product._id) as any);
                setFavoriteClicked(false); // Reset heart click
                toast.info("Product removed from favorites", { autoClose: 2000 });
            } else {
                // Add to favorites if it's not already favorited
                dispatch(addToFavorites(product._id) as any);
                setFavoriteClicked(true); // Heart is clicked
                toast.success("Product added to favorites", { autoClose: 2000 });
            }
        } else {
            // Show a toast if the user is not authenticated
            toast.error('Please login to add products to favorites', { autoClose: 2000 });
        }
    };

    // Handle editing the product (for admin users)
    const handleEditProduct = () => {
        navigate(`/edit-product/${product._id}`); // Navigate to the edit product page
    };

    // Handle deleting the product (for admin users)
    const handleDeleteProduct = () => {
        dispatch(deleteProduct(product._id) as any); // Dispatch the delete action
        toast.info("Product deleted", { autoClose: 2000 });
    };

    return (
        <div className="single-product">
            <h3>{product.productName}</h3>

            {product.image ? (
                <img src={product.image} alt={product.productName} />
            ) : (
                <p>No image available</p>
            )}

            <div className="product-description">
                <p>{product.description}</p>
                <p><span className="bold-text">Price: </span>${product.price}</p>
            </div>

            <div className="product-actions">
                <button onClick={handleAddToCart} className="add-to-cart-btn">Add to Cart</button>

                <button
                    className={`add-to-favorites-btn ${isFavoriteClicked ? 'clicked' : ''}`}
                    onClick={handleAddToFavorites}
                >
                    {isFavoriteClicked ? <AiFillHeart /> : <CiHeart />}
                </button>

                {userRole === 'admin' && (
                    <>
                        <button onClick={handleEditProduct} className="edit-product-btn">
                            <BiPencil />
                        </button>
                        <button onClick={handleDeleteProduct} className="delete-product-btn">
                            <BiTrash />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default SingleProduct;
