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




































import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import productReducer from '../slices/productSlice';
import userReducer from '../slices/userSlice';
import orderReducer from '../slices/orderSlice'; // Import the orderSlice

const store = configureStore({
    reducer: {
        products: productReducer,
        user: userReducer,
        order: orderReducer, // Add order reducer to the store
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
