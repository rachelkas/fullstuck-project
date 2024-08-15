// import React from 'react';
// import { CiHeart } from 'react-icons/ci';
// import './SingleProduct.css';

// interface SingleProductProps {
//     product: {
//         _id: string;
//         productName: string;
//         image: string;
//         description: string;
//         price: number;
//     };
// }

// const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
//     const { productName, image, description, price } = product;

//     return (
//         <div className="single-product-card">
//             <img src={image} alt={productName} className="product-image" />
//             <div className="product-info">
//                 <h3 className="product-name">{productName}</h3>
//                 <p className="product-description">{description}</p>
//                 <p className="product-price">${price}</p>
//             </div>
//             <div className="product-actions">
//                 <button type="button" className="add-to-cart-btn">Add to cart</button>
//                 <button className="favorite-btn"><CiHeart /></button>
//             </div>
//         </div>
//     );
// }

// export default SingleProduct;

















// // SingleProduct.tsx
// import React from 'react';
// import { CiHeart } from 'react-icons/ci';
// import './singleProduct.css';

// interface SingleProductProps {
//     id: string;
//     image: string;
//     name: string;
//     price: number;
//     description: string;
//     onAddToCart: (id: string) => void;
//     onAddToFavorites: (id: string) => void;
// }

// const SingleProduct: React.FC<SingleProductProps> = ({
//     id,
//     image,
//     name,
//     price,
//     description,
//     onAddToCart,
//     onAddToFavorites
// }) => {
//     return (
//         <div className="single-product">
//             <img src={image} alt={name} className="product-image" />
//             <div className="product-details">
//                 <h3>{name}</h3>
//                 <p>{description}</p>
//                 <p>Price: ${price}</p>
//                 <button className="btn btn-primary" onClick={() => onAddToCart(id)}>Add to cart</button>
//                 <button className="btn btn-favorite" onClick={() => onAddToFavorites(id)}>
//                     <CiHeart />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default SingleProduct;









































// src/components/singleProduct/SingleProduct.tsx

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { CiHeart } from 'react-icons/ci';
// import { addToCart, addToFavorites } from '../../slices/userSlice';
// import { SingleProductProps } from '../../types';
// import { RootState } from '../../store';
// import './singleProduct.css';

// const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
//     const dispatch = useDispatch();
//     const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

//     const handleAddToCart = () => {
//         if (isAuthenticated) {
//             dispatch(addToCart(product._id) as any);
//         } else {
//             // Optionally, you can show a toast or redirect to login
//             alert('Please login to add products to the cart');
//         }
//     };

//     const handleAddToFavorites = () => {
//         if (isAuthenticated) {
//             dispatch(addToFavorites(product._id) as any);
//         } else {
//             // Optionally, you can show a toast or redirect to login
//             alert('Please login to add products to favorites');
//         }
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
//                     <CiHeart />
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default SingleProduct;


















































import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CiHeart } from 'react-icons/ci';
import { addToCart, addToFavorites } from '../../slices/userSlice';
import { SingleProductProps } from '../../types';
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
