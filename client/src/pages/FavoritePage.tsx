// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState, AppDispatch } from '../store';
// import { fetchFavoriteItems, removeFromFavorites, addToCart } from '../slices/userSlice';
// import './favoritePage.css';

// const FavoritePage: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();
//     const favoriteItems = useSelector((state: RootState) => state.user.favorites);

//     useEffect(() => {
//         dispatch(fetchFavoriteItems());
//     }, [dispatch]);

//     const handleRemoveFromFavorites = (productId: string) => {
//         dispatch(removeFromFavorites(productId));
//     };

//     const handleAddToCart = (productId: string) => {
//         dispatch(addToCart(productId));
//     };

//     return (
//         <div className="favorite-page">
//             <h2>Favorite Page</h2>
//             {favoriteItems.length ? (
//                 favoriteItems.map((item) => (
//                     <div key={item._id} className="favorite-item">
//                         <img src={item.productId.image} alt={`${item.productId.productName} image`} />
//                         <p>{item.productId.productName}</p>
//                         <p>Price: ${item.productId.price}</p>
//                         <button onClick={() => handleAddToCart(item.productId._id)}>Add to Cart</button>
//                         <button onClick={() => handleRemoveFromFavorites(item.productId._id)}>Remove</button>
//                     </div>
//                 ))
//             ) : (
//                 <p>You have no favorite items</p>
//             )}
//         </div>
//     );
// };

// export default FavoritePage;






















// // src/pages/FavoritePage.tsx

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState, AppDispatch } from '../store';
// import { fetchFavoriteItems, removeFromFavorites, addToCart } from '../slices/userSlice';
// import './favoritePage.css';

// const FavoritePage: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();
//     const favoriteItems = useSelector((state: RootState) => state.user.favorites);

//     useEffect(() => {
//         dispatch(fetchFavoriteItems());
//     }, [dispatch]);

//     const handleRemoveFromFavorites = (productId: string) => {
//         dispatch(removeFromFavorites(productId));
//     };

//     const handleAddToCart = (productId: string) => {
//         dispatch(addToCart(productId));
//     };

//     return (
//         <div className="favorite-page">
//             <h2>Favorite Page</h2>
//             {favoriteItems.length ? (
//                 favoriteItems.map((item) => (
//                     <div key={item._id} className="favorite-item">
//                         <img src={item.productId.image} alt={`${item.productId.productName} image`} />
//                         <p>{item.productId.productName}</p>
//                         <p>Price: ${item.productId.price}</p>
//                         <button onClick={() => handleAddToCart(item.productId._id)}>Add to Cart</button>
//                         <button onClick={() => handleRemoveFromFavorites(item.productId._id)}>Remove</button>
//                     </div>
//                 ))
//             ) : (
//                 <p>You have no favorite items</p>
//             )}
//         </div>
//     );
// };

// export default FavoritePage;







































// // src/pages/FavoritePage.tsx

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState, AppDispatch } from '../store';
// import { fetchFavoriteItems, removeFromFavorites, addToCart } from '../slices/userSlice';
// import './favoritePage.css';

// const FavoritePage: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();
//     const favoriteItems = useSelector((state: RootState) => state.user.favorites);
//     const products = useSelector((state: RootState) => state.products.items); // Fetch all products

//     // Fetch favorite items on component mount
//     useEffect(() => {
//         dispatch(fetchFavoriteItems());
//     }, [dispatch]);

//     // Filter the products by those in the favorites list
//     const favoriteProducts = products.filter((product) =>
//         favoriteItems.includes(product._id)
//     );

//     const handleRemoveFromFavorites = (productId: string) => {
//         dispatch(removeFromFavorites(productId));
//     };

//     const handleAddToCart = (productId: string) => {
//         dispatch(addToCart(productId));
//     };

//     return (
//         <div className="favorite-page">
//             <h2>Favorite Page</h2>
//             {favoriteProducts.length > 0 ? (
//                 favoriteProducts.map((item) => (
//                     <div key={item._id} className="favorite-item">
//                         {item.image ? (
//                             <img src={item.image} alt={`${item.name} image`} />
//                         ) : (
//                             <p>No image available</p>
//                         )}
//                         <p>{item.name}</p>
//                         <p>Price: ${item.price}</p>
//                         <button onClick={() => handleAddToCart(item._id)}>Add to Cart</button>
//                         <button onClick={() => handleRemoveFromFavorites(item._id)}>Remove</button>
//                     </div>
//                 ))
//             ) : (
//                 <p>You have no favorite items</p>
//             )}
//         </div>
//     );
// };

// export default FavoritePage;





















































// src/pages/FavoritePage.tsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { fetchFavoriteItems, removeFromFavorites, addToCart } from '../slices/userSlice';
import './favoritePage.css';

const FavoritePage: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const favoriteItems = useSelector((state: RootState) => state.user.favorites); // Get favorite items from the Redux store
    const products = useSelector((state: RootState) => state.products.items); // Fetch all products

    // Fetch favorite items on component mount
    useEffect(() => {
        dispatch(fetchFavoriteItems()); // Dispatch fetchFavoriteItems to load user's favorite items
    }, [dispatch]);

    // Filter the products by those in the favorites list
    const favoriteProducts = products.filter((product) =>
        favoriteItems.includes(product._id)
    );

    // Handle removing a product from favorites
    const handleRemoveFromFavorites = (productId: string) => {
        dispatch(removeFromFavorites(productId)); // Dispatch action to remove item from favorites
    };

    // Handle adding a product to the cart
    const handleAddToCart = (productId: string) => {
        dispatch(addToCart(productId)); // Dispatch action to add item to the cart
    };

    return (
        <div className="favorite-page">
            <h2>Favorite Page</h2>
            {favoriteProducts.length > 0 ? (
                favoriteProducts.map((item) => (
                    <div key={item._id} className="favorite-item">
                        {item.image ? (
                            <img src={item.image} alt={`${item.name} image`} /> // Display product image if available
                        ) : (
                            <p>No image available</p> // Fallback if no image is present
                        )}
                        <p>{item.name}</p>
                        <p>Price: ${item.price}</p>
                        <button onClick={() => handleAddToCart(item._id)}>Add to Cart</button> {/* Button to add item to cart */}
                        <button onClick={() => handleRemoveFromFavorites(item._id)}>Remove</button> {/* Button to remove item from favorites */}
                    </div>
                ))
            ) : (
                <p>You have no favorite items</p> // Message displayed if no favorite items
            )}
        </div>
    );
};

export default FavoritePage;
