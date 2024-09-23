// import { useDispatch } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// // Import your slices here
// import productReducer from '../slices/productSlice';
// import userReducer from '../slices/userSlice';

// const store = configureStore({
//     reducer: {
//         products: productReducer,
//         user: userReducer,  // Add user reducer here
//     },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch: () => AppDispatch = useDispatch;
// export default store;



















// import { useDispatch } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// // Import your slices here
// import productReducer from '../slices/productSlice';
// import userReducer from '../slices/userSlice';

// const store = configureStore({
//     reducer: {
//         products: productReducer,
//         user: userReducer,  // Add user reducer here
//     },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch: () => AppDispatch = useDispatch;
// export default store;































// src/store/index.ts

// import { configureStore } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';
// import productReducer from '../slices/productSlice';
// import userReducer from '../slices/userSlice';

// const store = configureStore({
//     reducer: {
//         products: productReducer,
//         user: userReducer,
//     },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export default store;

























// src/store/index.ts

// import { configureStore } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';
// import productReducer from '../slices/productSlice';
// import userReducer from '../slices/userSlice';

// const store = configureStore({
//     reducer: {
//         products: productReducer,
//         user: userReducer,
//     },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export default store;






















// import { configureStore } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';
// import productReducer from '../slices/productSlice';
// import userReducer from '../slices/userSlice';

// const store = configureStore({
//     reducer: {
//         products: productReducer,
//         user: userReducer,
//     },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export default store;























// import { configureStore } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';
// import productReducer from '../slices/productSlice';
// import userReducer from '../slices/userSlice';

// const store = configureStore({
//     reducer: {
//         products: productReducer,
//         user: userReducer,

//     },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();

// export default store;




































// import { configureStore } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';
// import productReducer from '../slices/productSlice';
// import userReducer from '../slices/userSlice';
// import orderReducer from '../slices/orderSlice'; // Import the orderSlice

// const store = configureStore({
//     reducer: {
//         products: productReducer,
//         user: userReducer,
//         order: orderReducer, // Add order reducer to the store
//     },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();

// export default store;

















































// // src/store/index.ts

// import { configureStore } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';
// import productReducer from '../slices/productSlice';  // Import the product slice reducer
// import userReducer from '../slices/userSlice';  // Import the user slice reducer
// import orderReducer from '../slices/orderSlice';  // Import the order slice reducer

// // Configure the Redux store with the reducers for products, user, and orders
// const store = configureStore({
//     reducer: {
//         products: productReducer,  // Reducer for managing product state
//         user: userReducer,  // Reducer for managing user authentication, cart, and favorites
//         order: orderReducer,  // Reducer for managing orders state
//     },
// });

// // Define RootState type based on the store's state
// export type RootState = ReturnType<typeof store.getState>;

// // Define AppDispatch type based on the store's dispatch function
// export type AppDispatch = typeof store.dispatch;

// // Custom hook to dispatch actions within components
// export const useAppDispatch = () => useDispatch<AppDispatch>();

// // Export the configured store
// export default store;







































// src/store/index.ts

// import { configureStore } from '@reduxjs/toolkit';
// import productReducer from '../slices/productSlice';
// import userReducer from '../slices/userSlice';
// import orderReducer from '../slices/orderSlice';

// const store = configureStore({
//     reducer: {
//         products: productReducer,
//         user: userReducer,
//         order: orderReducer,
//     },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;
































// src/store/index.ts

import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../slices/productSlice';  // Import product slice reducer
import userReducer from '../slices/userSlice';  // Import user slice reducer
import orderReducer from '../slices/orderSlice';  // Import order slice reducer

const store = configureStore({
    reducer: {
        products: productReducer,
        user: userReducer,
        order: orderReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
