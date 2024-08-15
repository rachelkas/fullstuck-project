// // src/pages/FavoritePage.tsx

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState, AppDispatch } from '../store';
// import { fetchFavoriteItems } from '../slices/userSlice';

// const FavoritePage: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();

//     useEffect(() => {
//         dispatch(fetchFavoriteItems());
//     }, [dispatch]);

//     const favoriteItems = useSelector((state: RootState) => state.user.favorites);

//     return (
//         <div>
//             <h2>Favorite Page</h2>
//             {favoriteItems.length ? (
//                 favoriteItems.map((item) => (
//                     <div key={item._id}>
//                         <p>{item.productName}</p>
//                         <p>{item.price}</p>
//                     </div>
//                 ))
//             ) : (
//                 <p>You have no favorite items</p>
//             )}
//         </div>
//     );
// }

// export default FavoritePage;


























// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState, AppDispatch } from '../store';
// import { fetchFavoriteItems, removeFromFavorites } from '../slices/userSlice';

// const FavoritePage: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();
//     const favoriteItems = useSelector((state: RootState) => state.user.favorites);

//     useEffect(() => {
//         dispatch(fetchFavoriteItems());
//     }, [dispatch]);

//     const handleRemoveFromFavorites = (productId: string) => {
//         dispatch(removeFromFavorites(productId));
//     };

//     return (
//         <div>
//             <h2>Favorite Page</h2>
//             {favoriteItems.length ? (
//                 favoriteItems.map((item) => (
//                     <div key={item._id}>
//                         <p>{item.productName}</p>
//                         <p>{item.price}</p>
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


































































import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { fetchFavoriteItems } from '../slices/userSlice';

const FavoritePage: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFavoriteItems());
    }, [dispatch]);

    const favoriteItems = useSelector((state: RootState) => state.user.favorites);

    return (
        <div>
            <h2>Favorite Page</h2>
            {favoriteItems.length ? (
                favoriteItems.map((item) => (
                    <div key={item._id}>
                        <p>{item.productName}</p>
                        <p>{item.price}</p>
                    </div>
                ))
            ) : (
                <p>You have no favorite items</p>
            )}
        </div>
    );
};

export default FavoritePage;