import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { fetchFavoriteItems, removeFromFavorites, addToCart } from '../slices/userSlice';
import './pages-style/favoritePage.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import styles for toast

const FavoritePage: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const favoriteItems = useSelector((state: RootState) => state.user.favorites);
    const products = useSelector((state: RootState) => state.products.items);

    // Fetch favorite items on component mount
    useEffect(() => {
        dispatch(fetchFavoriteItems());
    }, [dispatch]);

    // Filter the products by those in the favorites list
    const favoriteProducts = products.filter((product) =>
        favoriteItems.includes(product._id)
    );

    // Handle removing a product from favorites
    const handleRemoveFromFavorites = (productId: string) => {
        dispatch(removeFromFavorites(productId));

    };

    // Handle adding a product to the cart
    const handleAddToCart = (productId: string) => {
        dispatch(addToCart(productId));

    };

    return (
        <div className="favorite-page">
            <h2>Favorite Products</h2>
            {favoriteProducts.length > 0 ? (
                favoriteProducts.map((item) => (
                    <div key={item._id} className="favorite-item">
                        {item.image ? (
                            <img src={item.image} alt={`${item.productName} image`} />
                        ) : (
                            <p>No image available</p>
                        )}
                        <p>{item.productName}</p>
                        <p className="description">{item.description}</p>
                        <p className="price">Price: ${item.price}</p>
                        <div className="favorite-buttons">
                            <button onClick={() => handleAddToCart(item._id)}>Add to Cart</button>
                            <button onClick={() => handleRemoveFromFavorites(item._id)}>Remove</button>
                        </div>
                    </div>
                ))
            ) : (
                <p>You have no favorite items</p>
            )}
        </div>
    );
};

export default FavoritePage;
