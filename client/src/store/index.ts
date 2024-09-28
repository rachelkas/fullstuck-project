// src/store/index.ts

// import { configureStore } from '@reduxjs/toolkit';
// import productReducer from '../slices/productSlice';  // Import product slice reducer
// import userReducer from '../slices/userSlice';  // Import user slice reducer
// import orderReducer from '../slices/orderSlice';  // Import order slice reducer

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
























































import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../slices/productSlice';  // Import product slice reducer
import userReducer from '../slices/userSlice';  // Import user slice reducer
import orderReducer from '../slices/orderSlice';  // Import order slice reducer
import { persistStore, persistReducer } from 'redux-persist'; // Redux Persist
import storage from 'redux-persist/lib/storage'; // Default local storage for web
import { combineReducers } from 'redux'; // To combine reducers
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

// Combine all reducers into one
const rootReducer = combineReducers({
    products: productReducer,
    user: userReducer,
    order: orderReducer,
});

// Configuration for persisting store
const persistConfig = {
    key: 'root', // Key for local storage
    storage, // The storage to be used (default is localStorage)
    whitelist: ['user'], // Specify which part of the state should be persisted
};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with persisted reducer
const store = configureStore({
    reducer: persistedReducer, // Replace root reducer with the persisted reducer
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Ignore these actions for redux-persist
            },
        }),
});

// Create a persistor to persist the store
export const persistor = persistStore(store);

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
