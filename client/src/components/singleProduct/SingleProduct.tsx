// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { CiHeart } from 'react-icons/ci';
// import { BiPencil } from 'react-icons/bi';
// import { useNavigate } from 'react-router-dom';
// import { addToCart, addToFavorites } from '../../slices/userSlice';
// import { SingleProductProps } from '../../common/interfaces';
// import { RootState } from '../../store';
// import './singleProduct.css';

// const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

//     const handleAddToCart = () => {
//         if (isAuthenticated) {
//             dispatch(addToCart(product._id) as any);
//         } else {
//             alert('Please login to add products to the cart');
//         }
//     };

//     const handleAddToFavorites = () => {
//         if (isAuthenticated) {
//             dispatch(addToFavorites(product._id) as any);
//         } else {
//             alert('Please login to add products to favorites');
//         }
//     };

//     const handleEditProduct = () => {
//         navigate(`/edit-product/${product._id}`);
//     }

//     return (
//         <div className="single-product">
//             <h3>{product.productName}</h3>
//             {/* <img src={} alt="" /> */}
//             <img src={product.image} alt={product.productName} />
//             <div className="product-description">
//                 <p>{product.description}</p>
//                 <p><span className="bold-text">Price: </span>${product.price}</p>
//             </div>
//             <div className="product-actions">
//                 <button onClick={handleAddToCart} className="add-to-cart-btn">Add to Cart</button>
//                 <button onClick={handleAddToFavorites} className="add-to-favorites-btn">
//                     <CiHeart />
//                 </button>

//                 <button onClick={handleEditProduct}  className="edit-product-btn">

//                     <BiPencil />

//                 </button>

//             </div>
//         </div>
//     );
// }

// export default SingleProduct;



































// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { CiHeart } from 'react-icons/ci';
// import { BiPencil } from 'react-icons/bi';
// import { useNavigate } from 'react-router-dom';
// import { addToCart, addToFavorites } from '../../slices/userSlice';
// import { SingleProductProps } from '../../common/interfaces';
// import { RootState } from '../../store';
// import './singleProduct.css';

// const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
//     const userRole = useSelector((state: RootState) => state.user.userDetails.role); // Get the user role

//     const handleAddToCart = () => {
//         if (isAuthenticated) {
//             dispatch(addToCart(product._id) as any);
//         } else {
//             alert('Please login to add products to the cart');
//         }
//     };

//     const handleAddToFavorites = () => {
//         if (isAuthenticated) {
//             dispatch(addToFavorites(product._id) as any);
//         } else {
//             alert('Please login to add products to favorites');
//         }
//     };

//     const handleEditProduct = () => {
//         navigate(`/edit-product/${product._id}`);
//     }

//     return (
//         <div className="single-product">
//             <h3>{product.productName}</h3>
//             <img src={product.image} alt={product.productName} />
//             <div className="product-description">
//                 <p>{product.description}</p>
//                 <p><span className="bold-text">Price: </span>${product.price}</p>
//             </div>
//             <div className="product-actions">
//                 <button onClick={handleAddToCart} className="add-to-cart-btn">Add to Cart</button>
//                 <button onClick={handleAddToFavorites} className="add-to-favorites-btn">
//                     <CiHeart />
//                 </button>
//                 {userRole === 'admin' && (
//                     <button onClick={handleEditProduct} className="edit-product-btn">
//                         <BiPencil />
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default SingleProduct;

























// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { CiHeart } from 'react-icons/ci';
// import { BiPencil } from 'react-icons/bi';
// import { AiFillHeart } from 'react-icons/ai'; // Import full heart icon
// import { useNavigate } from 'react-router-dom';
// import { addToCart, addToFavorites, removeFromFavorites } from '../../slices/userSlice';
// import { SingleProductProps } from '../../common/interfaces';
// import { RootState } from '../../store';
// import './singleProduct.css';

// const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
//     const userRole = useSelector((state: RootState) => state.user.userDetails.role);
//     const favorites = useSelector((state: RootState) => state.user.favorites); // Access favorites

//     const isFavorite = favorites.includes(product._id); // Check if the product is in favorites

//     const handleAddToCart = () => {
//         if (isAuthenticated) {
//             dispatch(addToCart(product._id) as any);
//         } else {
//             alert('Please login to add products to the cart');
//         }
//     };

//     const handleAddToFavorites = () => {
//         if (isAuthenticated) {
//             if (isFavorite) {
//                 dispatch(removeFromFavorites(product._id) as any);
//             } else {
//                 dispatch(addToFavorites(product._id) as any);
//             }
//         } else {
//             alert('Please login to add products to favorites');
//         }
//     };

//     const handleEditProduct = () => {
//         navigate(`/edit-product/${product._id}`);
//     };

//     return (
//         <div className="single-product">
//             <h3>{product.productName}</h3>
//             <img src={product.image} alt={product.productName} />
//             <div className="product-description">
//                 <p>{product.description}</p>
//                 <p><span className="bold-text">Price: </span>${product.price}</p>
//             </div>
//             <div className="product-actions">
//                 <button onClick={handleAddToCart} className="add-to-cart-btn">Add to Cart</button>
//                 <button onClick={handleAddToFavorites} className="add-to-favorites-btn">
//                     {isFavorite ? <AiFillHeart className="full-heart" /> : <CiHeart />}
//                 </button>
//                 {userRole === 'admin' && (
//                     <button onClick={handleEditProduct} className="edit-product-btn">
//                         <BiPencil />
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default SingleProduct;












































// src/components/singleProduct/SingleProduct.tsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CiHeart } from 'react-icons/ci';
import { BiPencil, BiTrash } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai'; // Import full heart icon
import { useNavigate } from 'react-router-dom';
import { addToCart, addToFavorites, removeFromFavorites } from '../../slices/userSlice';
import { deleteProduct } from '../../slices/productSlice';
import { SingleProductProps } from '../../common/interfaces';
import { RootState } from '../../store';
import './singleProduct.css';

const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
    const userRole = useSelector((state: RootState) => state.user.userDetails.role);
    const favorites = useSelector((state: RootState) => state.user.favorites); // Access favorites

    // Check if the product is in favorites
    const isFavorite = favorites.some((fav: any) => fav === product._id || fav._id === product._id);

    // Handle adding product to cart
    const handleAddToCart = () => {
        if (isAuthenticated) {
            dispatch(addToCart(product._id) as any);
        } else {
            alert('Please login to add products to the cart');
        }
    };

    // Handle adding/removing product from favorites
    const handleAddToFavorites = () => {
        if (isAuthenticated) {
            if (isFavorite) {
                dispatch(removeFromFavorites(product._id) as any);
            } else {
                dispatch(addToFavorites(product._id) as any);
            }
        } else {
            alert('Please login to add products to favorites');
        }
    };

    // Handle product edit by admin
    const handleEditProduct = () => {
        navigate(`/edit-product/${product._id}`);
    };

    //handle delete product by admin
    const handleDeleteProduct = () => {
        dispatch(deleteProduct(product._id) as any); // Make sure product._id is passed correctly
    };

    return (
        <div className="single-product">
            <h3>{product.productName}</h3>
            {/* Display image or fallback text if no image is available */}
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
                <button onClick={handleAddToFavorites} className="add-to-favorites-btn">
                    {isFavorite ? <AiFillHeart className="full-heart" /> : <CiHeart />}
                </button>
                {userRole === 'admin' && (
                    <button onClick={handleEditProduct} className="edit-product-btn">
                        <BiPencil />
                    </button>
                    // Add delete button for admin


                )}
                {userRole === 'admin' && (
                    <button onClick={handleDeleteProduct} className="delete-product-btn">
                        <BiTrash />
                    </button>
                )}
            </div>
        </div>
    );
};

export default SingleProduct;
