import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { fetchFavoriteItems } from '../slices/userSlice';

const FavoritePage: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const favoriteItems = useSelector((state: RootState) => state.user.favorites);

    useEffect(() => {
        dispatch(fetchFavoriteItems());
    }, [dispatch]);

    return (
        <div>
            <h2>Favorite Page2</h2>
            {favoriteItems.length ? (
                favoriteItems.map((item) => (

                    <div key={item._id}>
                        <img src={item.productId.image} alt={`${item.productId.productName} image`} />
                        <p>{item.productId.productName}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: ${item.productId.price}</p>
                    </div>
                ))
            ) : (
                <p>You have no favorite items</p>
            )}
        </div>
    );
};

export default FavoritePage;
