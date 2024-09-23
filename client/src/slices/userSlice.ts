// // src/slices/userSlice.ts

// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { customAxios } from '../utils/api';
// import { toast } from 'react-toastify';
// import { RootState } from '../store';
// import { IUserDetails, UserState } from '../common/interfaces';

// const initialState: UserState = {
//     token: null,
//     cart: [],
//     favorites: [],
//     isAuthenticated: false,
//     userDetails: { firstName: '', lastName: '', email: '', role: '', _id: '' },
// };

// // Thunk to add item to cart
// export const addToCart = createAsyncThunk('user/addToCart', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         const response = await customAxios.post(
//             '/cart/add',
//             { productId, userId },
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             }
//         );
//         toast.success('Added to cart!');
//         return response.data.cartItem;
//     } catch (error) {
//         toast.error('Failed to add to cart.');
//         return thunkAPI.rejectWithValue((error as any).response.data);
//     }
// });

// // Thunk to remove item from cart
// export const removeFromCart = createAsyncThunk('user/removeFromCart', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         await customAxios.delete(`/cart/remove/${productId}`, {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         toast.success('Removed from cart!');
//         return productId;
//     } catch (error) {
//         toast.error('Failed to remove from cart.');
//         return thunkAPI.rejectWithValue((error as any).response.data);
//     }
// });

// // Thunk to update cart item quantity
// export const updateCartQuantity = createAsyncThunk(
//     'user/updateCartQuantity',
//     async ({ productId, quantity }: { productId: string; quantity: number }, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         const userId = state.user.userDetails._id;
//         try {
//             await customAxios.put(
//                 `/cart/update/${productId}`,
//                 { quantity },
//                 {
//                     params: { userId },
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             toast.success('Quantity updated!');
//             return { productId, quantity };
//         } catch (error) {
//             toast.error('Failed to update quantity.');
//             return thunkAPI.rejectWithValue((error as any).response.data);
//         }
//     }
// );

// // Thunk to add item to favorites
// export const addToFavorites = createAsyncThunk(
//     'user/addToFavorites',
//     async (productId: string, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         const userId = state.user.userDetails._id;
//         try {
//             const response = await customAxios.post(
//                 '/favorites/add',
//                 { productId, userId },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             toast.success('Added to favorites!');
//             return productId; // Now returning just the product ID for easier management
//         } catch (error) {
//             toast.error('Failed to add to favorites.');
//             return thunkAPI.rejectWithValue((error as any).response.data);
//         }
//     }
// );

// // Thunk to remove item from favorites
// export const removeFromFavorites = createAsyncThunk('user/removeFromFavorites', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         await customAxios.delete(`/favorites/remove`, {
//             params: { productId, userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         toast.success('Removed from favorites!');
//         return productId; // Returning the product ID after removing
//     } catch (error) {
//         toast.error('Failed to remove from favorites.');
//         return thunkAPI.rejectWithValue((error as any).response.data);
//     }
// });

// // Thunk to fetch cart items
// export const fetchCartItems = createAsyncThunk('user/fetchCartItems', async (_, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         const response = await customAxios.get('/cart', {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         return response.data;
//     } catch (error) {
//         toast.error('Failed to fetch cart items.');
//         return thunkAPI.rejectWithValue((error as any).response.data);
//     }
// });

// // Thunk to fetch favorite items
// export const fetchFavoriteItems = createAsyncThunk('user/fetchFavoriteItems', async (_, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         const response = await customAxios.get('/favorites', {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         return response.data;
//     } catch (error) {
//         toast.error('Failed to fetch favorite items.');
//         return thunkAPI.rejectWithValue((error as any).response.data);
//     }
// });

// // Thunk to login user and fetch cart/favorite data
// // export const loginUser = createAsyncThunk(
// //     'user/loginUser',
// //     async (userData: { email: string; password: string }, thunkAPI) => {
// //         try {
// //             const response = await customAxios.post('/login', userData);
// //             const { token, userDetails } = response.data;
// //             thunkAPI.dispatch(setToken(token));
// //             thunkAPI.dispatch(setUserDetails(userDetails));
// //             // Fetch cart and favorites after login
// //             thunkAPI.dispatch(fetchCartItems());
// //             thunkAPI.dispatch(fetchFavoriteItems());
// //             return response.data;
// //         } catch (error: any) {
// //             return thunkAPI.rejectWithValue(error.response.data);
// //         }
// //     }
// // );

// // Thunk to login user and fetch cart/favorite data
// export const loginUser = createAsyncThunk(
//     'user/loginUser',
//     async (userData: { email: string; password: string }, thunkAPI) => {
//         try {
//             const response = await customAxios.post('/login', userData);
//             const { token, userDetails } = response.data;
//             thunkAPI.dispatch(setToken(token));
//             thunkAPI.dispatch(setUserDetails(userDetails));
//             // Fetch cart and favorites after login
//             await thunkAPI.dispatch(fetchCartItems());
//             await thunkAPI.dispatch(fetchFavoriteItems());
//             return response.data;
//         } catch (error: any) {
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// // Thunk to logout user
// export const logoutUser = createAsyncThunk('user/logoutUser', async (_, thunkAPI) => {
//     thunkAPI.dispatch(clearUserState());
//     toast.success('Logged out successfully');
// });

// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         setToken: (state, action: PayloadAction<string | null>) => {
//             state.token = action.payload;
//             state.isAuthenticated = !!action.payload;
//         },
//         setUserDetails: (state, action: PayloadAction<IUserDetails>) => {
//             state.userDetails = action.payload;
//         },
//         clearUserState: (state) => {
//             state.token = null;
//             state.cart = [];
//             state.favorites = [];
//             state.isAuthenticated = false;
//             state.userDetails = { firstName: '', lastName: '', email: '', role: '', _id: '' };
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(addToCart.fulfilled, (state, action) => {
//                 state.cart.push(action.payload);
//             })
//             .addCase(removeFromCart.fulfilled, (state, action) => {
//                 state.cart = state.cart.filter(item => item.productId._id !== action.payload);
//             })
//             .addCase(updateCartQuantity.fulfilled, (state, action) => {
//                 const index = state.cart.findIndex(item => item.productId._id === action.payload.productId);
//                 if (index !== -1) {
//                     state.cart[index].quantity = action.payload.quantity;
//                 }
//             })
//             .addCase(addToFavorites.fulfilled, (state, action) => {
//                 state.favorites.push(action.payload); // Adding product ID to favorites
//             })
//             .addCase(removeFromFavorites.fulfilled, (state, action) => {
//                 state.favorites = state.favorites.filter(favoriteId => favoriteId !== action.payload); // Removing product ID from favorites
//             })
//             .addCase(fetchCartItems.fulfilled, (state, action) => {
//                 state.cart = action.payload;
//             })
//             .addCase(fetchFavoriteItems.fulfilled, (state, action) => {
//                 state.favorites = action.payload.map((item: any) => item.productId._id); // Storing just product IDs in favorites
//             });
//     },
// });

// export const { setToken, clearUserState, setUserDetails } = userSlice.actions;

// export default userSlice.reducer;





































// // src/slices/userSlice.ts

// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { customAxios } from '../utils/api';
// import { toast } from 'react-toastify';
// import { RootState } from '../store';
// import { IUserDetails, UserState } from '../common/interfaces';

// const initialState: UserState = {
//     token: null,
//     cart: [],
//     favorites: [],
//     isAuthenticated: false,
//     userDetails: { firstName: '', lastName: '', email: '', role: '', _id: '' },
// };

// // Thunk to add item to cart
// export const addToCart = createAsyncThunk('user/addToCart', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         const response = await customAxios.post(
//             '/cart/add',
//             { productId, userId },
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             }
//         );
//         toast.success('Added to cart!');
//         return response.data.cartItem;
//     } catch (error: any) {
//         toast.error('Failed to add to cart.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to remove item from cart
// export const removeFromCart = createAsyncThunk('user/removeFromCart', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         await customAxios.delete(`/cart/remove/${productId}`, {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         toast.success('Removed from cart!');
//         return productId;
//     } catch (error: any) {
//         toast.error('Failed to remove from cart.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to update cart item quantity
// export const updateCartQuantity = createAsyncThunk(
//     'user/updateCartQuantity',
//     async ({ productId, quantity }: { productId: string; quantity: number }, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         const userId = state.user.userDetails._id;
//         try {
//             await customAxios.put(
//                 `/cart/update/${productId}`,
//                 { quantity },
//                 {
//                     params: { userId },
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             toast.success('Quantity updated!');
//             return { productId, quantity };
//         } catch (error: any) {
//             toast.error('Failed to update quantity.');
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// // Thunk to add item to favorites
// export const addToFavorites = createAsyncThunk(
//     'user/addToFavorites',
//     async (productId: string, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         const userId = state.user.userDetails._id;
//         try {
//             const response = await customAxios.post(
//                 '/favorites/add',
//                 { productId, userId },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             toast.success('Added to favorites!');
//             return productId; // Now returning just the product ID for easier management
//         } catch (error: any) {
//             toast.error('Failed to add to favorites.');
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// // Thunk to remove item from favorites
// export const removeFromFavorites = createAsyncThunk('user/removeFromFavorites', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         await customAxios.delete(`/favorites/remove`, {
//             params: { productId, userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         toast.success('Removed from favorites!');
//         return productId; // Returning the product ID after removing
//     } catch (error: any) {
//         toast.error('Failed to remove from favorites.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to fetch cart items
// export const fetchCartItems = createAsyncThunk('user/fetchCartItems', async (_, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         const response = await customAxios.get('/cart', {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         return response.data;
//     } catch (error: any) {
//         toast.error('Failed to fetch cart items.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to fetch favorite items
// export const fetchFavoriteItems = createAsyncThunk('user/fetchFavoriteItems', async (_, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         const response = await customAxios.get('/favorites', {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         return response.data;
//     } catch (error: any) {
//         toast.error('Failed to fetch favorite items.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to login user and fetch cart/favorite data
// export const loginUser = createAsyncThunk(
//     'user/loginUser',
//     async (userData: { email: string; password: string }, thunkAPI) => {
//         try {
//             const response = await customAxios.post('/login', userData);
//             const { token, userDetails } = response.data;
//             thunkAPI.dispatch(setToken(token));
//             thunkAPI.dispatch(setUserDetails(userDetails));
//             // Fetch cart and favorites after login
//             await thunkAPI.dispatch(fetchCartItems());
//             await thunkAPI.dispatch(fetchFavoriteItems());
//             return response.data;
//         } catch (error: any) {
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// // Thunk to logout user
// export const logoutUser = createAsyncThunk('user/logoutUser', async (_, thunkAPI) => {
//     thunkAPI.dispatch(clearUserState());
//     toast.success('Logged out successfully');
// });

// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         setToken: (state, action: PayloadAction<string | null>) => {
//             state.token = action.payload;
//             state.isAuthenticated = !!action.payload;
//         },
//         setUserDetails: (state, action: PayloadAction<IUserDetails>) => {
//             state.userDetails = action.payload;
//         },
//         clearUserState: (state) => {
//             state.token = null;
//             state.cart = [];
//             state.favorites = [];
//             state.isAuthenticated = false;
//             state.userDetails = { firstName: '', lastName: '', email: '', role: '', _id: '' };
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(addToCart.fulfilled, (state, action) => {
//                 state.cart.push(action.payload);
//             })
//             .addCase(removeFromCart.fulfilled, (state, action) => {
//                 state.cart = state.cart.filter(item => item.productId._id !== action.payload);
//             })
//             .addCase(updateCartQuantity.fulfilled, (state, action) => {
//                 const index = state.cart.findIndex(item => item.productId._id === action.payload.productId);
//                 if (index !== -1) {
//                     state.cart[index].quantity = action.payload.quantity;
//                 }
//             })
//             .addCase(addToFavorites.fulfilled, (state, action) => {
//                 state.favorites.push(action.payload); // Adding product ID to favorites
//             })
//             .addCase(removeFromFavorites.fulfilled, (state, action) => {
//                 state.favorites = state.favorites.filter(favoriteId => favoriteId !== action.payload); // Removing product ID from favorites
//             })
//             .addCase(fetchCartItems.fulfilled, (state, action) => {
//                 state.cart = action.payload;
//             })
//             .addCase(fetchFavoriteItems.fulfilled, (state, action) => {
//                 state.favorites = action.payload.map((item: any) => item.productId._id); // Storing just product IDs in favorites
//             });
//     },
// });

// export const { setToken, clearUserState, setUserDetails } = userSlice.actions;

// export default userSlice.reducer;



























































































// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { customAxios } from '../utils/api';
// import { toast } from 'react-toastify';
// import { RootState } from '../store';
// import { IUserDetails, UserState } from '../common/interfaces';

// const initialState: UserState = {
//     token: null,
//     cart: [],
//     favorites: [],
//     isAuthenticated: false,
//     userDetails: { firstName: '', lastName: '', email: '', role: '', _id: '' },
// };

// // Thunk to add item to cart
// export const addToCart = createAsyncThunk('user/addToCart', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         const response = await customAxios.post(
//             '/cart/add',
//             { productId, userId },
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             }
//         );
//         toast.success('Added to cart!');
//         return response.data.cartItem;
//     } catch (error: any) {
//         toast.error('Failed to add to cart.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to remove item from cart
// export const removeFromCart = createAsyncThunk('user/removeFromCart', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         await customAxios.delete(`/cart/remove/${productId}`, {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         toast.success('Removed from cart!');
//         return productId;
//     } catch (error: any) {
//         toast.error('Failed to remove from cart.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to update cart item quantity
// export const updateCartQuantity = createAsyncThunk(
//     'user/updateCartQuantity',
//     async ({ productId, quantity }: { productId: string; quantity: number }, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         const userId = state.user.userDetails._id;
//         try {
//             await customAxios.put(
//                 `/cart/update/${productId}`,
//                 { quantity },
//                 {
//                     params: { userId },
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             toast.success('Quantity updated!');
//             return { productId, quantity };
//         } catch (error: any) {
//             toast.error('Failed to update quantity.');
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// // Thunk to add item to favorites
// export const addToFavorites = createAsyncThunk(
//     'user/addToFavorites',
//     async (productId: string, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         const userId = state.user.userDetails._id;
//         try {
//             const response = await customAxios.post(
//                 '/favorites/add',
//                 { productId, userId },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             toast.success('Added to favorites!');
//             return productId;
//         } catch (error: any) {
//             toast.error('Failed to add to favorites.');
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// // Thunk to remove item from favorites
// export const removeFromFavorites = createAsyncThunk('user/removeFromFavorites', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         await customAxios.delete(`/favorites/remove`, {
//             params: { productId, userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         toast.success('Removed from favorites!');
//         return productId;
//     } catch (error: any) {
//         toast.error('Failed to remove from favorites.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to fetch cart items
// export const fetchCartItems = createAsyncThunk('user/fetchCartItems', async (_, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         const response = await customAxios.get('/cart', {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         return response.data;
//     } catch (error: any) {
//         toast.error('Failed to fetch cart items.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to fetch favorite items
// export const fetchFavoriteItems = createAsyncThunk('user/fetchFavoriteItems', async (_, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         const response = await customAxios.get('/favorites', {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         return response.data;
//     } catch (error: any) {
//         toast.error('Failed to fetch favorite items.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to create an order and clear cart after the order is successful
// export const createOrder = createAsyncThunk('user/createOrder', async (_, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     const cart = state.user.cart;

//     const orderData = {
//         userId,
//         items: cart.map(item => ({
//             productId: item.productId._id,
//             quantity: item.quantity,
//             price: item.productId.price
//         })),
//         totalPrice: cart.reduce((acc, item) => acc + item.productId.price * item.quantity, 0),
//     };

//     try {
//         const response = await customAxios.post('/orders/create', orderData, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });

//         toast.success('Order created successfully!');

//         // Clear cart after order is created
//         thunkAPI.dispatch(clearCart());

//         return response.data;
//     } catch (error: any) {
//         toast.error('Failed to create order.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to login user and fetch cart/favorite data
// export const loginUser = createAsyncThunk(
//     'user/loginUser',
//     async (userData: { email: string; password: string }, thunkAPI) => {
//         try {
//             const response = await customAxios.post('/login', userData);
//             const { token, userDetails } = response.data;
//             thunkAPI.dispatch(setToken(token));
//             thunkAPI.dispatch(setUserDetails(userDetails));
//             // Fetch cart and favorites after login
//             await thunkAPI.dispatch(fetchCartItems());
//             await thunkAPI.dispatch(fetchFavoriteItems());
//             return response.data;
//         } catch (error: any) {
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// // Thunk to logout user
// export const logoutUser = createAsyncThunk('user/logoutUser', async (_, thunkAPI) => {
//     thunkAPI.dispatch(clearUserState());
//     toast.success('Logged out successfully');
// });

// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         setToken: (state, action: PayloadAction<string | null>) => {
//             state.token = action.payload;
//             state.isAuthenticated = !!action.payload;
//         },
//         setUserDetails: (state, action: PayloadAction<IUserDetails>) => {
//             state.userDetails = action.payload;
//         },
//         clearUserState: (state) => {
//             state.token = null;
//             state.cart = [];
//             state.favorites = [];
//             state.isAuthenticated = false;
//             state.userDetails = { firstName: '', lastName: '', email: '', role: '', _id: '' };
//         },
//         clearCart: (state) => {
//             state.cart = [];
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(addToCart.fulfilled, (state, action) => {
//                 state.cart.push(action.payload);
//             })
//             .addCase(removeFromCart.fulfilled, (state, action) => {
//                 state.cart = state.cart.filter(item => item.productId._id !== action.payload);
//             })
//             .addCase(updateCartQuantity.fulfilled, (state, action) => {
//                 const index = state.cart.findIndex(item => item.productId._id === action.payload.productId);
//                 if (index !== -1) {
//                     state.cart[index].quantity = action.payload.quantity;
//                 }
//             })
//             .addCase(addToFavorites.fulfilled, (state, action) => {
//                 state.favorites.push(action.payload);
//             })
//             .addCase(removeFromFavorites.fulfilled, (state, action) => {
//                 state.favorites = state.favorites.filter(favoriteId => favoriteId !== action.payload);
//             })
//             .addCase(fetchCartItems.fulfilled, (state, action) => {
//                 state.cart = action.payload;
//             })
//             .addCase(fetchFavoriteItems.fulfilled, (state, action) => {
//                 state.favorites = action.payload.map((item: any) => item.productId._id);
//             })
//             .addCase(createOrder.fulfilled, (state) => {
//                 state.cart = [];
//             });
//     },
// });

// export const { setToken, clearUserState, setUserDetails, clearCart } = userSlice.actions;

// export default userSlice.reducer;
























































































// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { customAxios } from '../utils/api';
// import { toast } from 'react-toastify';
// import { RootState } from '../store';
// import { IUserDetails, UserState } from '../common/interfaces';

// const initialState: UserState = {
//     token: null,
//     cart: [],
//     favorites: [],
//     isAuthenticated: false,
//     userDetails: { firstName: '', lastName: '', email: '', role: '', _id: '' },
// };

// // Thunk to add item to cart
// export const addToCart = createAsyncThunk('user/addToCart', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         const response = await customAxios.post(
//             '/cart/add',
//             { productId, userId },
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             }
//         );
//         toast.success('Added to cart!');
//         return response.data.cartItem;
//     } catch (error: any) {
//         toast.error('Failed to add to cart.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to remove item from cart
// export const removeFromCart = createAsyncThunk('user/removeFromCart', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         await customAxios.delete(`/cart/remove/${productId}`, {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         toast.success('Removed from cart!');
//         return productId;
//     } catch (error: any) {
//         toast.error('Failed to remove from cart.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to update cart item quantity
// export const updateCartQuantity = createAsyncThunk(
//     'user/updateCartQuantity',
//     async ({ productId, quantity }: { productId: string; quantity: number }, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         const userId = state.user.userDetails._id;
//         try {
//             await customAxios.put(
//                 `/cart/update/${productId}`,
//                 { quantity },
//                 {
//                     params: { userId },
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             toast.success('Quantity updated!');
//             return { productId, quantity };
//         } catch (error: any) {
//             toast.error('Failed to update quantity.');
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// // Thunk to add item to favorites
// export const addToFavorites = createAsyncThunk(
//     'user/addToFavorites',
//     async (productId: string, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         const userId = state.user.userDetails._id;
//         try {
//             const response = await customAxios.post(
//                 '/favorites/add',
//                 { productId, userId },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             toast.success('Added to favorites!');
//             return productId;
//         } catch (error: any) {
//             toast.error('Failed to add to favorites.');
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// // Thunk to remove item from favorites
// export const removeFromFavorites = createAsyncThunk('user/removeFromFavorites', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         await customAxios.delete(`/favorites/remove`, {
//             params: { productId, userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         toast.success('Removed from favorites!');
//         return productId;
//     } catch (error: any) {
//         toast.error('Failed to remove from favorites.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to fetch cart items
// export const fetchCartItems = createAsyncThunk('user/fetchCartItems', async (_, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         const response = await customAxios.get('/cart', {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         return response.data;
//     } catch (error: any) {
//         toast.error('Failed to fetch cart items.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to fetch favorite items
// export const fetchFavoriteItems = createAsyncThunk('user/fetchFavoriteItems', async (_, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         const response = await customAxios.get('/favorites', {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         return response.data;
//     } catch (error: any) {
//         toast.error('Failed to fetch favorite items.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to create an order and clear cart after the order is successful
// export const createOrder = createAsyncThunk('user/createOrder', async (_, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     const cart = state.user.cart;

//     const orderData = {
//         userId,
//         items: cart.map(item => ({
//             productId: item.productId._id,
//             quantity: item.quantity,
//             price: item.productId.price
//         })),
//         totalPrice: cart.reduce((acc, item) => acc + item.productId.price * item.quantity, 0),
//     };

//     try {
//         const response = await customAxios.post('/orders/create', orderData, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });

//         toast.success('Order created successfully!');

//         // Clear cart after order is created
//         thunkAPI.dispatch(clearCart());

//         return response.data;
//     } catch (error: any) {
//         toast.error('Failed to create order.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to login user and fetch cart/favorite data
// export const loginUser = createAsyncThunk(
//     'user/loginUser',
//     async (userData: { email: string; password: string }, thunkAPI) => {
//         try {
//             const response = await customAxios.post('/login', userData);
//             const { token, userDetails } = response.data;
//             thunkAPI.dispatch(setToken(token));
//             thunkAPI.dispatch(setUserDetails(userDetails));
//             // Fetch cart and favorites after login
//             await thunkAPI.dispatch(fetchCartItems());
//             await thunkAPI.dispatch(fetchFavoriteItems());
//             return response.data;
//         } catch (error: any) {
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// // Thunk to logout user
// export const logoutUser = createAsyncThunk('user/logoutUser', async (_, thunkAPI) => {
//     thunkAPI.dispatch(clearUserState());
//     toast.success('Logged out successfully');
// });

// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         setToken: (state, action: PayloadAction<string | null>) => {
//             state.token = action.payload;
//             state.isAuthenticated = !!action.payload;
//         },
//         setUserDetails: (state, action: PayloadAction<IUserDetails>) => {
//             state.userDetails = action.payload;
//         },
//         clearUserState: (state) => {
//             state.token = null;
//             state.cart = [];
//             state.favorites = [];
//             state.isAuthenticated = false;
//             state.userDetails = { firstName: '', lastName: '', email: '', role: '', _id: '' };
//         },
//         clearCart: (state) => {
//             state.cart = [];
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(addToCart.fulfilled, (state, action) => {
//                 state.cart.push(action.payload);
//             })
//             .addCase(removeFromCart.fulfilled, (state, action) => {
//                 state.cart = state.cart.filter(item => item.productId._id !== action.payload);
//             })
//             .addCase(updateCartQuantity.fulfilled, (state, action) => {
//                 const index = state.cart.findIndex(item => item.productId._id === action.payload.productId);
//                 if (index !== -1) {
//                     state.cart[index].quantity = action.payload.quantity;
//                 }
//             })
//             .addCase(addToFavorites.fulfilled, (state, action) => {
//                 state.favorites.push(action.payload);
//             })
//             .addCase(removeFromFavorites.fulfilled, (state, action) => {
//                 state.favorites = state.favorites.filter(favoriteId => favoriteId !== action.payload);
//             })
//             .addCase(fetchCartItems.fulfilled, (state, action) => {
//                 state.cart = action.payload;
//             })
//             .addCase(fetchFavoriteItems.fulfilled, (state, action) => {
//                 state.favorites = action.payload.map((item: any) => item.productId._id);
//             })
//             .addCase(createOrder.fulfilled, (state) => {
//                 state.cart = [];
//             });
//     },
// });

// export const { setToken, clearUserState, setUserDetails, clearCart } = userSlice.actions;

// export default userSlice.reducer;

























































// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { customAxios } from '../utils/api';
// import { toast } from 'react-toastify';
// import { RootState } from '../store';
// import { IUserDetails, UserState } from '../common/interfaces';

// const initialState: UserState = {
//     token: null,
//     cart: [],
//     favorites: [],
//     isAuthenticated: false,
//     userDetails: { firstName: '', lastName: '', email: '', role: '', _id: '' },
// };

// // Thunk to add item to cart
// export const addToCart = createAsyncThunk('user/addToCart', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         const response = await customAxios.post(
//             '/cart/add',
//             { productId, userId },
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             }
//         );
//         toast.success('Added to cart!');
//         return response.data.cartItem;
//     } catch (error: any) {
//         toast.error('Failed to add to cart.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to remove item from cart
// export const removeFromCart = createAsyncThunk('user/removeFromCart', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         await customAxios.delete(`/cart/remove/${productId}`, {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         toast.success('Removed from cart!');
//         return productId;
//     } catch (error: any) {
//         toast.error('Failed to remove from cart.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to update cart item quantity
// export const updateCartQuantity = createAsyncThunk(
//     'user/updateCartQuantity',
//     async ({ productId, quantity }: { productId: string; quantity: number }, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         const userId = state.user.userDetails._id;
//         try {
//             await customAxios.put(
//                 `/cart/update/${productId}`,
//                 { quantity },
//                 {
//                     params: { userId },
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             toast.success('Quantity updated!');
//             return { productId, quantity };
//         } catch (error: any) {
//             toast.error('Failed to update quantity.');
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// // Thunk to add item to favorites
// export const addToFavorites = createAsyncThunk(
//     'user/addToFavorites',
//     async (productId: string, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         const userId = state.user.userDetails._id;
//         try {
//             const response = await customAxios.post(
//                 '/favorites/add',
//                 { productId, userId },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             toast.success('Added to favorites!');
//             return productId;
//         } catch (error: any) {
//             toast.error('Failed to add to favorites.');
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// // Thunk to remove item from favorites
// export const removeFromFavorites = createAsyncThunk('user/removeFromFavorites', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         await customAxios.delete(`/favorites/remove`, {
//             params: { productId, userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         toast.success('Removed from favorites!');
//         return productId;
//     } catch (error: any) {
//         toast.error('Failed to remove from favorites.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to fetch cart items
// export const fetchCartItems = createAsyncThunk('user/fetchCartItems', async (_, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         const response = await customAxios.get('/cart', {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         return response.data;
//     } catch (error: any) {
//         toast.error('Failed to fetch cart items.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to fetch favorite items
// export const fetchFavoriteItems = createAsyncThunk('user/fetchFavoriteItems', async (_, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         const response = await customAxios.get('/favorites', {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         return response.data;
//     } catch (error: any) {
//         toast.error('Failed to fetch favorite items.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to create an order and clear cart after the order is successful
// export const createOrder = createAsyncThunk('user/createOrder', async (_, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     const cart = state.user.cart;

//     const orderData = {
//         userId,
//         items: cart.map(item => ({
//             productId: item.productId._id,
//             quantity: item.quantity,
//             price: item.productId.price
//         })),
//         totalPrice: cart.reduce((acc, item) => acc + item.productId.price * item.quantity, 0),
//     };

//     try {
//         const response = await customAxios.post('/orders/create', orderData, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });

//         toast.success('Order created successfully!');

//         // Clear cart after order is created
//         thunkAPI.dispatch(clearCart());

//         return response.data;
//     } catch (error: any) {
//         toast.error('Failed to create order.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to login user and fetch cart/favorite data
// export const loginUser = createAsyncThunk(
//     'user/loginUser',
//     async (userData: { email: string; password: string }, thunkAPI) => {
//         try {
//             const response = await customAxios.post('/login', userData);
//             const { token, userDetails } = response.data;
//             thunkAPI.dispatch(setToken(token));
//             thunkAPI.dispatch(setUserDetails(userDetails));
//             // Fetch cart and favorites after login
//             await thunkAPI.dispatch(fetchCartItems());
//             await thunkAPI.dispatch(fetchFavoriteItems());
//             return response.data;
//         } catch (error: any) {
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// // Thunk to logout user
// export const logoutUser = createAsyncThunk('user/logoutUser', async (_, thunkAPI) => {
//     thunkAPI.dispatch(clearUserState());
//     toast.success('Logged out successfully');
// });


// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         setToken: (state, action: PayloadAction<string | null>) => {
//             state.token = action.payload;
//             state.isAuthenticated = !!action.payload;
//         },
//         setUserDetails: (state, action: PayloadAction<IUserDetails>) => {
//             state.userDetails = action.payload;
//         },
//         clearUserState: (state) => {
//             state.token = null;
//             state.cart = [];
//             state.favorites = [];
//             state.isAuthenticated = false;
//             state.userDetails = { firstName: '', lastName: '', email: '', role: '', _id: '' };
//         },
//         clearCart: (state) => {
//             state.cart = [];
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(addToCart.fulfilled, (state, action) => {
//                 state.cart.push(action.payload);
//             })
//             .addCase(removeFromCart.fulfilled, (state, action) => {
//                 state.cart = state.cart.filter(item => item.productId._id !== action.payload);
//             })
//             .addCase(updateCartQuantity.fulfilled, (state, action) => {
//                 const index = state.cart.findIndex(item => item.productId._id === action.payload.productId);
//                 if (index !== -1) {
//                     state.cart[index].quantity = action.payload.quantity;
//                 }
//             })
//             .addCase(addToFavorites.fulfilled, (state, action) => {
//                 state.favorites.push(action.payload);
//             })
//             .addCase(removeFromFavorites.fulfilled, (state, action) => {
//                 state.favorites = state.favorites.filter(favoriteId => favoriteId !== action.payload);
//             })
//             .addCase(fetchCartItems.fulfilled, (state, action) => {
//                 state.cart = action.payload;
//             })
//             .addCase(fetchFavoriteItems.fulfilled, (state, action) => {
//                 state.favorites = action.payload.map((item: any) => item.productId._id);
//             })
//             .addCase(createOrder.fulfilled, (state) => {
//                 state.cart = [];
//             });
//     },
// });

// export const { setToken, clearUserState, setUserDetails, clearCart } = userSlice.actions;

// export default userSlice.reducer;






























































// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { customAxios } from '../utils/api';
// import { toast } from 'react-toastify';
// import { RootState } from '../store';
// import { IUserDetails, UserState } from '../common/interfaces';

// const initialState: UserState = {
//     token: null,
//     cart: [],
//     favorites: [],
//     isAuthenticated: false,
//     userDetails: { firstName: '', lastName: '', email: '', role: '', _id: '' },
// };

// // Thunk to add item to cart
// export const addToCart = createAsyncThunk('user/addToCart', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         const response = await customAxios.post(
//             '/cart/add',
//             { productId, userId },
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             }
//         );
//         toast.success('Added to cart!');
//         return response.data.cartItem;
//     } catch (error: any) {
//         toast.error('Failed to add to cart.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to remove item from cart
// export const removeFromCart = createAsyncThunk('user/removeFromCart', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         await customAxios.delete(`/cart/remove/${productId}`, {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         toast.success('Removed from cart!');
//         return productId;
//     } catch (error: any) {
//         toast.error('Failed to remove from cart.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to update cart item quantity
// export const updateCartQuantity = createAsyncThunk(
//     'user/updateCartQuantity',
//     async ({ productId, quantity }: { productId: string; quantity: number }, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         const userId = state.user.userDetails._id;
//         try {
//             await customAxios.put(
//                 `/cart/update/${productId}`,
//                 { quantity },
//                 {
//                     params: { userId },
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             toast.success('Quantity updated!');
//             return { productId, quantity };
//         } catch (error: any) {
//             toast.error('Failed to update quantity.');
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// // Thunk to add item to favorites
// export const addToFavorites = createAsyncThunk(
//     'user/addToFavorites',
//     async (productId: string, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         const userId = state.user.userDetails._id;
//         try {
//             const response = await customAxios.post(
//                 '/favorites/add',
//                 { productId, userId },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             toast.success('Added to favorites!');
//             return productId;
//         } catch (error: any) {
//             toast.error('Failed to add to favorites.');
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// // Thunk to remove item from favorites
// export const removeFromFavorites = createAsyncThunk('user/removeFromFavorites', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         await customAxios.delete(`/favorites/remove`, {
//             params: { productId, userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         toast.success('Removed from favorites!');
//         return productId;
//     } catch (error: any) {
//         toast.error('Failed to remove from favorites.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to fetch cart items
// export const fetchCartItems = createAsyncThunk('user/fetchCartItems', async (_, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         const response = await customAxios.get('/cart', {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         return response.data;
//     } catch (error: any) {
//         toast.error('Failed to fetch cart items.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to fetch favorite items
// export const fetchFavoriteItems = createAsyncThunk('user/fetchFavoriteItems', async (_, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         const response = await customAxios.get('/favorites', {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         return response.data;
//     } catch (error: any) {
//         toast.error('Failed to fetch favorite items.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to create an order and clear cart after the order is successful
// export const createOrder = createAsyncThunk('user/createOrder', async (_, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     const cart = state.user.cart;

//     const orderData = {
//         userId,
//         items: cart.map(item => ({
//             productId: item.productId._id,
//             quantity: item.quantity,
//             price: item.productId.price,
//         })),
//         totalPrice: cart.reduce((acc, item) => acc + item.productId.price * item.quantity, 0),
//     };

//     try {
//         const response = await customAxios.post('/orders/create', orderData, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });

//         toast.success('Order created successfully!');

//         // Clear cart after order is created
//         thunkAPI.dispatch(clearCart());

//         return response.data;
//     } catch (error: any) {
//         toast.error('Failed to create order.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to login user and fetch cart/favorite data
// export const loginUser = createAsyncThunk(
//     'user/loginUser',
//     async (userData: { email: string; password: string }, thunkAPI) => {
//         try {
//             const response = await customAxios.post('/login', userData);
//             const { token, userDetails } = response.data;
//             thunkAPI.dispatch(setToken(token));
//             thunkAPI.dispatch(setUserDetails(userDetails));
//             // Fetch cart and favorites after login
//             await thunkAPI.dispatch(fetchCartItems());
//             await thunkAPI.dispatch(fetchFavoriteItems());
//             return response.data;
//         } catch (error: any) {
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// // Thunk to logout user
// export const logoutUser = createAsyncThunk('user/logoutUser', async (_, thunkAPI) => {
//     thunkAPI.dispatch(clearUserState());
//     toast.success('Logged out successfully');
// });


// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         setToken: (state, action: PayloadAction<string | null>) => {
//             state.token = action.payload;
//             state.isAuthenticated = !!action.payload;
//         },
//         setUserDetails: (state, action: PayloadAction<IUserDetails>) => {
//             state.userDetails = action.payload;
//         },
//         clearUserState: (state) => {
//             state.token = null;
//             state.cart = [];
//             state.favorites = [];
//             state.isAuthenticated = false;
//             state.userDetails = { firstName: '', lastName: '', email: '', role: '', _id: '' };
//         },
//         clearCart: (state) => {
//             state.cart = [];
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(addToCart.fulfilled, (state, action) => {
//                 state.cart.push(action.payload);
//             })
//             .addCase(removeFromCart.fulfilled, (state, action) => {
//                 state.cart = state.cart.filter(item => item.productId._id !== action.payload);
//             })
//             .addCase(updateCartQuantity.fulfilled, (state, action) => {
//                 const index = state.cart.findIndex(item => item.productId._id === action.payload.productId);
//                 if (index !== -1) {
//                     state.cart[index].quantity = action.payload.quantity;
//                 }
//             })
//             .addCase(addToFavorites.fulfilled, (state, action) => {
//                 state.favorites.push(action.payload);
//             })
//             .addCase(removeFromFavorites.fulfilled, (state, action) => {
//                 state.favorites = state.favorites.filter(favoriteId => favoriteId !== action.payload);
//             })
//             .addCase(fetchCartItems.fulfilled, (state, action) => {
//                 state.cart = action.payload;
//             })
//             .addCase(fetchFavoriteItems.fulfilled, (state, action) => {
//                 state.favorites = action.payload.map((item: any) => item.productId._id);
//             })
//             .addCase(createOrder.fulfilled, (state) => {
//                 state.cart = [];
//             });
//     },
// });

// export const { setToken, clearUserState, setUserDetails, clearCart } = userSlice.actions;

// export default userSlice.reducer;





















































// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { customAxios } from '../utils/api';
// import { toast } from 'react-toastify';
// import { RootState } from '../store';
// import { IUserDetails, UserState } from '../common/interfaces';

// const initialState: UserState = {
//     token: null,
//     cart: [],
//     favorites: [],
//     isAuthenticated: false,
//     userDetails: { firstName: '', lastName: '', email: '', role: '', _id: '' },
// };

// // Thunk to add item to cart
// export const addToCart = createAsyncThunk('user/addToCart', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         const response = await customAxios.post(
//             '/cart/add',
//             { productId, userId },
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             }
//         );
//         toast.success('Added to cart!');
//         return response.data.cartItem;
//     } catch (error: any) {
//         toast.error('Failed to add to cart.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to remove item from cart
// export const removeFromCart = createAsyncThunk('user/removeFromCart', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         await customAxios.delete(`/cart/remove/${productId}`, {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         toast.success('Removed from cart!');
//         return productId;
//     } catch (error: any) {
//         toast.error('Failed to remove from cart.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to update cart item quantity
// export const updateCartQuantity = createAsyncThunk(
//     'user/updateCartQuantity',
//     async ({ productId, quantity }: { productId: string; quantity: number }, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         const userId = state.user.userDetails._id;
//         try {
//             await customAxios.put(
//                 `/cart/update/${productId}`,
//                 { quantity },
//                 {
//                     params: { userId },
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             toast.success('Quantity updated!');
//             return { productId, quantity };
//         } catch (error: any) {
//             toast.error('Failed to update quantity.');
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// // Thunk to add item to favorites
// export const addToFavorites = createAsyncThunk(
//     'user/addToFavorites',
//     async (productId: string, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         const userId = state.user.userDetails._id;
//         try {
//             const response = await customAxios.post(
//                 '/favorites/add',
//                 { productId, userId },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             toast.success('Added to favorites!');
//             return productId;
//         } catch (error: any) {
//             toast.error('Failed to add to favorites.');
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// // Thunk to remove item from favorites
// export const removeFromFavorites = createAsyncThunk('user/removeFromFavorites', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         await customAxios.delete(`/favorites/remove`, {
//             params: { productId, userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         toast.success('Removed from favorites!');
//         return productId;
//     } catch (error: any) {
//         toast.error('Failed to remove from favorites.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to fetch cart items
// export const fetchCartItems = createAsyncThunk('user/fetchCartItems', async (_, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         const response = await customAxios.get('/cart', {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         return response.data;
//     } catch (error: any) {
//         toast.error('Failed to fetch cart items.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to fetch favorite items
// export const fetchFavoriteItems = createAsyncThunk('user/fetchFavoriteItems', async (_, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         const response = await customAxios.get('/favorites', {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         return response.data;
//     } catch (error: any) {
//         toast.error('Failed to fetch favorite items.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to create an order and clear cart after the order is successful
// export const createOrder = createAsyncThunk('user/createOrder', async (_, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     const cart = state.user.cart;

//     const orderData = {
//         userId,
//         items: cart.map(item => ({
//             productId: item.productId._id,
//             quantity: item.quantity,
//             price: item.productId.price,
//         })),
//         totalPrice: cart.reduce((acc, item) => acc + item.productId.price * item.quantity, 0),
//     };

//     try {
//         const response = await customAxios.post('/orders/create', orderData, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });

//         toast.success('Order created successfully!');

//         // Clear cart after order is created
//         thunkAPI.dispatch(clearCart());

//         return response.data;
//     } catch (error: any) {
//         toast.error('Failed to create order.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to login user and fetch cart/favorite data
// export const loginUser = createAsyncThunk(
//     'user/loginUser',
//     async (userData: { email: string; password: string }, thunkAPI) => {
//         try {
//             const response = await customAxios.post('/login', userData);
//             const { token, userDetails } = response.data;
//             thunkAPI.dispatch(setToken(token));
//             thunkAPI.dispatch(setUserDetails(userDetails));
//             // Fetch cart and favorites after login
//             await thunkAPI.dispatch(fetchCartItems());
//             await thunkAPI.dispatch(fetchFavoriteItems());
//             return response.data;
//         } catch (error: any) {
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// // Thunk to logout user
// export const logoutUser = createAsyncThunk('user/logoutUser', async (_, thunkAPI) => {
//     thunkAPI.dispatch(clearUserState());
//     toast.success('Logged out successfully');
// });


// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         setToken: (state, action: PayloadAction<string | null>) => {
//             state.token = action.payload;
//             state.isAuthenticated = !!action.payload;
//         },
//         setUserDetails: (state, action: PayloadAction<IUserDetails>) => {
//             state.userDetails = action.payload;
//         },
//         clearUserState: (state) => {
//             state.token = null;
//             state.cart = [];
//             state.favorites = [];
//             state.isAuthenticated = false;
//             state.userDetails = { firstName: '', lastName: '', email: '', role: '', _id: '' };
//         },
//         clearCart: (state) => {
//             console.log('Clearing cart...');
//             state.cart = [];
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(addToCart.fulfilled, (state, action) => {
//                 state.cart.push(action.payload);
//             })
//             .addCase(removeFromCart.fulfilled, (state, action) => {
//                 state.cart = state.cart.filter(item => item.productId._id !== action.payload);
//             })
//             .addCase(updateCartQuantity.fulfilled, (state, action) => {
//                 const index = state.cart.findIndex(item => item.productId._id === action.payload.productId);
//                 if (index !== -1) {
//                     state.cart[index].quantity = action.payload.quantity;
//                 }
//             })
//             .addCase(addToFavorites.fulfilled, (state, action) => {
//                 state.favorites.push(action.payload);
//             })
//             .addCase(removeFromFavorites.fulfilled, (state, action) => {
//                 state.favorites = state.favorites.filter(favoriteId => favoriteId !== action.payload);
//             })
//             .addCase(fetchCartItems.fulfilled, (state, action) => {
//                 state.cart = action.payload;
//             })
//             .addCase(fetchFavoriteItems.fulfilled, (state, action) => {
//                 state.favorites = action.payload.map((item: any) => item.productId._id);
//             })
//             .addCase(createOrder.fulfilled, (state) => {
//                 console.log("Order fulfilled, clearing cart...");
//                 state.cart = [];
//             });
//     },
// });

// export const { setToken, clearUserState, setUserDetails, clearCart } = userSlice.actions;

// export default userSlice.reducer;










































































// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { customAxios } from '../utils/api';
// import { toast } from 'react-toastify';
// import { RootState } from '../store';
// import { IUserDetails, UserState } from '../common/interfaces';

// const initialState: UserState = {
//     token: null,
//     cart: [],
//     favorites: [],
//     isAuthenticated: false,
//     userDetails: { firstName: '', lastName: '', email: '', role: '', _id: '' },
// };

// // Thunk to add item to cart
// export const addToCart = createAsyncThunk('user/addToCart', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         const response = await customAxios.post(
//             '/cart/add',
//             { productId, userId },
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             }
//         );
//         toast.success('Added to cart!');
//         return response.data.cartItem;
//     } catch (error: any) {
//         toast.error('Failed to add to cart.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to remove item from cart
// export const removeFromCart = createAsyncThunk('user/removeFromCart', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         await customAxios.delete(`/cart/remove/${productId}`, {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         toast.success('Removed from cart!');
//         return productId;
//     } catch (error: any) {
//         toast.error('Failed to remove from cart.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to update cart item quantity
// export const updateCartQuantity = createAsyncThunk(
//     'user/updateCartQuantity',
//     async ({ productId, quantity }: { productId: string; quantity: number }, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         const userId = state.user.userDetails._id;
//         try {
//             await customAxios.put(
//                 `/cart/update/${productId}`,
//                 { quantity },
//                 {
//                     params: { userId },
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             toast.success('Quantity updated!');
//             return { productId, quantity };
//         } catch (error: any) {
//             toast.error('Failed to update quantity.');
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// // Thunk to add item to favorites
// export const addToFavorites = createAsyncThunk(
//     'user/addToFavorites',
//     async (productId: string, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         const userId = state.user.userDetails._id;
//         try {
//             const response = await customAxios.post(
//                 '/favorites/add',
//                 { productId, userId },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             toast.success('Added to favorites!');
//             return productId;
//         } catch (error: any) {
//             toast.error('Failed to add to favorites.');
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// // Thunk to remove item from favorites
// export const removeFromFavorites = createAsyncThunk('user/removeFromFavorites', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         await customAxios.delete(`/favorites/remove`, {
//             params: { productId, userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         toast.success('Removed from favorites!');
//         return productId;
//     } catch (error: any) {
//         toast.error('Failed to remove from favorites.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to fetch cart items
// export const fetchCartItems = createAsyncThunk('user/fetchCartItems', async (_, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         const response = await customAxios.get('/cart', {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         return response.data;
//     } catch (error: any) {
//         toast.error('Failed to fetch cart items.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to fetch favorite items
// export const fetchFavoriteItems = createAsyncThunk('user/fetchFavoriteItems', async (_, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         const response = await customAxios.get('/favorites', {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         return response.data;
//     } catch (error: any) {
//         toast.error('Failed to fetch favorite items.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to create an order and clear cart after the order is successful
// export const createOrder = createAsyncThunk('user/createOrder', async (_, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     const cart = state.user.cart;

//     const orderData = {
//         userId,
//         items: cart.map(item => ({
//             productId: item.productId._id,
//             quantity: item.quantity,
//             price: item.productId.price,
//         })),
//         totalPrice: cart.reduce((acc, item) => acc + item.productId.price * item.quantity, 0),
//     };

//     try {
//         const response = await customAxios.post('/orders/create', orderData, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });

//         toast.success('Order created successfully!');

//         // Clear cart after order is created
//         thunkAPI.dispatch(clearCart());

//         return response.data;
//     } catch (error: any) {
//         toast.error('Failed to create order.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to login user and fetch cart/favorite data
// export const loginUser = createAsyncThunk(
//     'user/loginUser',
//     async (userData: { email: string; password: string }, thunkAPI) => {
//         try {
//             const response = await customAxios.post('/login', userData);
//             const { token, userDetails } = response.data;
//             thunkAPI.dispatch(setToken(token));
//             thunkAPI.dispatch(setUserDetails(userDetails));
//             // Fetch cart and favorites after login
//             await thunkAPI.dispatch(fetchCartItems());
//             await thunkAPI.dispatch(fetchFavoriteItems());
//             return response.data;
//         } catch (error: any) {
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// // Thunk to logout user
// export const logoutUser = createAsyncThunk('user/logoutUser', async (_, thunkAPI) => {
//     thunkAPI.dispatch(clearUserState());
//     toast.success('Logged out successfully');
// });


// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         setToken: (state, action: PayloadAction<string | null>) => {
//             state.token = action.payload;
//             state.isAuthenticated = !!action.payload;
//         },
//         setUserDetails: (state, action: PayloadAction<IUserDetails>) => {
//             state.userDetails = action.payload;
//         },
//         clearUserState: (state) => {
//             state.token = null;
//             state.cart = [];
//             state.favorites = [];
//             state.isAuthenticated = false;
//             state.userDetails = { firstName: '', lastName: '', email: '', role: '', _id: '' };
//         },
//         clearCart: (state) => {
//             console.log('Clearing cart...');
//             state.cart = [];
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(addToCart.fulfilled, (state, action) => {
//                 state.cart.push(action.payload);
//             })
//             .addCase(removeFromCart.fulfilled, (state, action) => {
//                 state.cart = state.cart.filter(item => item.productId._id !== action.payload);
//             })
//             .addCase(updateCartQuantity.fulfilled, (state, action) => {
//                 const index = state.cart.findIndex(item => item.productId._id === action.payload.productId);
//                 if (index !== -1) {
//                     state.cart[index].quantity = action.payload.quantity;
//                 }
//             })
//             .addCase(addToFavorites.fulfilled, (state, action) => {
//                 state.favorites.push(action.payload);
//             })
//             .addCase(removeFromFavorites.fulfilled, (state, action) => {
//                 state.favorites = state.favorites.filter(favoriteId => favoriteId !== action.payload);
//             })
//             .addCase(fetchCartItems.fulfilled, (state, action) => {
//                 state.cart = action.payload;
//             })
//             .addCase(fetchFavoriteItems.fulfilled, (state, action) => {
//                 state.favorites = action.payload.map((item: any) => item.productId._id);
//             })
//             .addCase(createOrder.fulfilled, (state) => {
//                 console.log("Order fulfilled, clearing cart...");
//                 state.cart = [];
//             });
//     },
// });

// export const { setToken, clearUserState, setUserDetails, clearCart } = userSlice.actions;

// export default userSlice.reducer;



































































// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { customAxios } from '../utils/api';
// import { toast } from 'react-toastify';
// import { RootState } from '../store';
// import { IUserDetails, UserState } from '../common/interfaces';

// const initialState: UserState = {
//     token: null,
//     cart: [],
//     favorites: [],
//     isAuthenticated: false,
//     userDetails: { firstName: '', lastName: '', email: '', role: '', _id: '' },
//     latestOrder: null, // Add latestOrder state
// };

// // Thunk to add item to cart
// export const addToCart = createAsyncThunk('user/addToCart', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         const response = await customAxios.post(
//             '/cart/add',
//             { productId, userId },
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             }
//         );
//         toast.success('Added to cart!');
//         return response.data.cartItem;
//     } catch (error: any) {
//         toast.error('Failed to add to cart.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to remove item from cart
// export const removeFromCart = createAsyncThunk('user/removeFromCart', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         await customAxios.delete(`/cart/remove/${productId}`, {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         toast.success('Removed from cart!');
//         return productId;
//     } catch (error: any) {
//         toast.error('Failed to remove from cart.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to update cart item quantity
// export const updateCartQuantity = createAsyncThunk(
//     'user/updateCartQuantity',
//     async ({ productId, quantity }: { productId: string; quantity: number }, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         const userId = state.user.userDetails._id;
//         try {
//             await customAxios.put(
//                 `/cart/update/${productId}`,
//                 { quantity },
//                 {
//                     params: { userId },
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             toast.success('Quantity updated!');
//             return { productId, quantity };
//         } catch (error: any) {
//             toast.error('Failed to update quantity.');
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// // Thunk to add item to favorites
// export const addToFavorites = createAsyncThunk(
//     'user/addToFavorites',
//     async (productId: string, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         const userId = state.user.userDetails._id;
//         try {
//             const response = await customAxios.post(
//                 '/favorites/add',
//                 { productId, userId },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             toast.success('Added to favorites!');
//             return productId;
//         } catch (error: any) {
//             toast.error('Failed to add to favorites.');
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// // Thunk to remove item from favorites
// export const removeFromFavorites = createAsyncThunk('user/removeFromFavorites', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         await customAxios.delete(`/favorites/remove`, {
//             params: { productId, userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         toast.success('Removed from favorites!');
//         return productId;
//     } catch (error: any) {
//         toast.error('Failed to remove from favorites.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to fetch cart items
// export const fetchCartItems = createAsyncThunk('user/fetchCartItems', async (_, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         const response = await customAxios.get('/cart', {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         return response.data;
//     } catch (error: any) {
//         toast.error('Failed to fetch cart items.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to fetch favorite items
// export const fetchFavoriteItems = createAsyncThunk('user/fetchFavoriteItems', async (_, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         const response = await customAxios.get('/favorites', {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         return response.data;
//     } catch (error: any) {
//         toast.error('Failed to fetch favorite items.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to fetch the latest order
// export const fetchLatestOrder = createAsyncThunk('user/fetchLatestOrder', async (_, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         const response = await customAxios.get(`/orders/latest?userId=${userId}`, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         return response.data;
//     } catch (error: any) {
//         toast.error('Failed to fetch the latest order.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to create an order and clear cart after the order is successful
// // Thunk to create an order and clear cart after the order is successful
// export const createOrder = createAsyncThunk('user/createOrder', async ({ selectedCartItems, totalAmount }: { selectedCartItems: any[], totalAmount: number }, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;

//     const orderData = {
//         userId,
//         items: selectedCartItems.map(item => ({
//             productId: item.productId._id,
//             quantity: item.quantity,
//             price: item.productId.price,
//         })),
//         totalPrice: totalAmount,
//     };

//     try {
//         const response = await customAxios.post('/orders/create', orderData, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });

//         toast.success('Order created successfully!');

//         // Clear cart after order is created
//         thunkAPI.dispatch(clearCart());

//         return response.data;
//     } catch (error: any) {
//         toast.error('Failed to create order.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to login user and fetch cart/favorite data
// export const loginUser = createAsyncThunk(
//     'user/loginUser',
//     async (userData: { email: string; password: string }, thunkAPI) => {
//         try {
//             const response = await customAxios.post('/login', userData);
//             const { token, userDetails } = response.data;
//             thunkAPI.dispatch(setToken(token));
//             thunkAPI.dispatch(setUserDetails(userDetails));
//             // Fetch cart and favorites after login
//             await thunkAPI.dispatch(fetchCartItems());
//             await thunkAPI.dispatch(fetchFavoriteItems());
//             return response.data;
//         } catch (error: any) {
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// // Thunk to logout user
// export const logoutUser = createAsyncThunk('user/logoutUser', async (_, thunkAPI) => {
//     thunkAPI.dispatch(clearUserState());
//     toast.success('Logged out successfully');
// });

// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         setToken: (state, action: PayloadAction<string | null>) => {
//             state.token = action.payload;
//             state.isAuthenticated = !!action.payload;
//         },
//         setUserDetails: (state, action: PayloadAction<IUserDetails>) => {
//             state.userDetails = action.payload;
//         },
//         clearUserState: (state) => {
//             state.token = null;
//             state.cart = [];
//             state.favorites = [];
//             state.isAuthenticated = false;
//             state.userDetails = { firstName: '', lastName: '', email: '', role: '', _id: '' };
//         },
//         clearCart: (state) => {
//             console.log('Clearing cart...');
//             state.cart = [];
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(addToCart.fulfilled, (state, action) => {
//                 state.cart.push(action.payload);
//             })
//             .addCase(removeFromCart.fulfilled, (state, action) => {
//                 state.cart = state.cart.filter(item => item.productId._id !== action.payload);
//             })
//             .addCase(updateCartQuantity.fulfilled, (state, action) => {
//                 const index = state.cart.findIndex(item => item.productId._id === action.payload.productId);
//                 if (index !== -1) {
//                     state.cart[index].quantity = action.payload.quantity;
//                 }
//             })
//             .addCase(addToFavorites.fulfilled, (state, action) => {
//                 state.favorites.push(action.payload);
//             })
//             .addCase(removeFromFavorites.fulfilled, (state, action) => {
//                 state.favorites = state.favorites.filter(favoriteId => favoriteId !== action.payload);
//             })
//             .addCase(fetchCartItems.fulfilled, (state, action) => {
//                 state.cart = action.payload;
//             })
//             .addCase(fetchFavoriteItems.fulfilled, (state, action) => {
//                 state.favorites = action.payload.map((item: any) => item.productId._id);
//             })
//             .addCase(createOrder.fulfilled, (state) => {
//                 console.log("Order fulfilled, clearing cart...");
//                 state.cart = [];
//             })
//             .addCase(fetchLatestOrder.fulfilled, (state, action) => {
//                 state.latestOrder = action.payload;
//             });
//     },
// });

// export const { setToken, clearUserState, setUserDetails, clearCart } = userSlice.actions;

// export default userSlice.reducer;

























































// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { customAxios } from '../utils/api';
// import { toast } from 'react-toastify';
// import { RootState } from '../store';
// import { IUserDetails, UserState } from '../common/interfaces';

// const initialState: UserState = {
//     token: null,
//     cart: {cartId: '', items: []},
//     favorites: [],
//     isAuthenticated: false,
//     userDetails: { firstName: '', lastName: '', email: '', role: '', _id: '' },
//     latestOrder: null, // Add latestOrder state
// };

// // Thunk to add item to cart
// export const addToCart = createAsyncThunk('user/addToCart', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         const response = await customAxios.post(
//             '/cart/add',
//             { productId, userId },
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             }
//         );
//         toast.success('Added to cart!');
//         return response.data;
//     } catch (error: any) {
//         toast.error('Failed to add to cart.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to remove item from cart
// export const removeFromCart = createAsyncThunk('user/removeFromCart', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         await customAxios.delete(`/cart/remove/${productId}`, {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         toast.success('Removed from cart!');
//         return productId;
//     } catch (error: any) {
//         toast.error('Failed to remove from cart.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to update cart item quantity
// export const updateCartQuantity = createAsyncThunk(
//     'user/updateCartQuantity',
//     async ({ productId, quantity }: { productId: string; quantity: number }, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         const userId = state.user.userDetails._id;
//         try {
//             await customAxios.put(
//                 `/cart/update/${productId}`,
//                 { quantity },
//                 {
//                     params: { userId },
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             toast.success('Quantity updated!');
//             return { productId, quantity };
//         } catch (error: any) {
//             toast.error('Failed to update quantity.');
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// // Thunk to add item to favorites
// export const addToFavorites = createAsyncThunk(
//     'user/addToFavorites',
//     async (productId: string, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         const userId = state.user.userDetails._id;
//         try {
//             const response = await customAxios.post(
//                 '/favorites/add',
//                 { productId, userId },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             toast.success('Added to favorites!');
//             return productId;
//         } catch (error: any) {
//             toast.error('Failed to add to favorites.');
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// // Thunk to remove item from favorites
// export const removeFromFavorites = createAsyncThunk('user/removeFromFavorites', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         await customAxios.delete(`/favorites/remove`, {
//             params: { productId, userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         toast.success('Removed from favorites!');
//         return productId;
//     } catch (error: any) {
//         toast.error('Failed to remove from favorites.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });



// // Thunk to fetch cart items
// export const fetchCartItems = createAsyncThunk('user/fetchCartItems', async (_, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         const response = await customAxios.get('/cart', {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         return response.data;
//     } catch (error: any) {
//         toast.error('Failed to fetch cart items.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Thunk to fetch favorite items
// export const fetchFavoriteItems = createAsyncThunk('user/fetchFavoriteItems', async (_, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         const response = await customAxios.get('/favorites', {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         return response.data;
//     } catch (error: any) {
//         toast.error('Failed to fetch favorite items.');
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// // Fixing the signature to match the call in OrderSummaryPage
// export const createOrder = createAsyncThunk(
//     'user/createOrder',
//     async ({ items, totalPrice }: { items: any[], totalPrice: number }, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         const userId = state.user.userDetails._id;
//         const cartId = state.user.cart.cartId;

//         const orderData = {
//             userId,
//             cartId,
//             items: items.map(item => ({
//                 productId: item.productId,
//                 quantity: item.quantity,
//                 price: item.price,
//             })),
//             totalPrice,
//         };

//         try {
//             const response = await customAxios.post('/orders/create', orderData, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });

//             // If successful, return the order response
//             return response.data;
//         } catch (error: any) {
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// // Thunk to login user and fetch cart/favorite data
// export const loginUser = createAsyncThunk(
//     'user/loginUser',
//     async (userData: { email: string; password: string }, thunkAPI) => {
//         try {
//             const response = await customAxios.post('/login', userData);
//             const { token, userDetails } = response.data;
//             thunkAPI.dispatch(setToken(token));
//             thunkAPI.dispatch(setUserDetails(userDetails));
//             // Fetch cart and favorites after login
//             await thunkAPI.dispatch(fetchCartItems());
//             await thunkAPI.dispatch(fetchFavoriteItems());
//             return response.data;
//         } catch (error: any) {
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// // Thunk to logout user
// export const logoutUser = createAsyncThunk('user/logoutUser', async (_, thunkAPI) => {
//     thunkAPI.dispatch(clearUserState());
//     toast.success('Logged out successfully');
// });

// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         setToken: (state, action: PayloadAction<string | null>) => {
//             state.token = action.payload;
//             state.isAuthenticated = !!action.payload;
//         },
//         setUserDetails: (state, action: PayloadAction<IUserDetails>) => {
//             state.userDetails = action.payload;
//         },
//         clearUserState: (state) => {
//             state.token = null;
//             state.cart.items = [];
//             state.cart = {cartId: '', items: []};
//             state.favorites = [];
//             state.isAuthenticated = false;
//             state.userDetails = { firstName: '', lastName: '', email: '', role: '', _id: '' };
//         },
//         clearCart: (state) => {
//             console.log('Clearing cart...');
//             state.cart = {cartId: '', items: []};
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(addToCart.fulfilled, (state, action) => {
//                 state.cart = action.payload;
//             })
//             .addCase(removeFromCart.fulfilled, (state, action) => {
//                 state.cart.items = state.cart.items.filter(item => item.productId._id !== action.payload);
//             })
//             .addCase(updateCartQuantity.fulfilled, (state, action) => {
//                 const index = state.cart.items.findIndex(item => item.productId._id === action.payload.productId);
//                 if (index !== -1) {
//                     state.cart.items[index].quantity = action.payload.quantity;
//                 }
//             })
//             .addCase(createOrder.fulfilled, (state) => {
//                 console.log('Order fulfilled, clearing cart...');
//                 state.cart = {cartId: '', items: []};
//             })
//             .addCase(fetchCartItems.fulfilled, (state, action) => {
//                 state.cart = action.payload;
//             })
//             .addCase(fetchFavoriteItems.fulfilled, (state, action) => {
//                 state.favorites = action.payload.map((item: any) => item.productId._id);
//             });
//     },
// });

// export const { setToken, clearUserState, setUserDetails, clearCart } = userSlice.actions;

// export default userSlice.reducer;



















































































// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { customAxios } from '../utils/api';
// import { toast } from 'react-toastify';
// import { RootState } from '../store';
// import { IUserDetails, UserState } from '../common/interfaces';

// const initialState: UserState = {
//     token: null,  // JWT token for authentication
//     cart: { cartId: '', items: [] },  // Initial empty cart
//     favorites: [],  // Initial empty favorites list
//     isAuthenticated: false,  // Auth state flag
//     userDetails: { firstName: '', lastName: '', email: '', role: '', _id: '' },  // Empty user details
//     latestOrder: null,  // Store the latest order after a purchase
// };

// // Thunk to add item to cart
// export const addToCart = createAsyncThunk('user/addToCart', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         // Send a request to add a product to the cart
//         const response = await customAxios.post(
//             '/cart/add',
//             { productId, userId },
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`,  // Include JWT token in the request header
//                 },
//             }
//         );
//         toast.success('Added to cart!');  // Show success notification
//         return response.data;  // Return the cart data
//     } catch (error: any) {
//         toast.error('Failed to add to cart.');  // Show error notification
//         return thunkAPI.rejectWithValue(error.response.data);  // Handle failure case
//     }
// });

// // Thunk to remove item from cart
// export const removeFromCart = createAsyncThunk('user/removeFromCart', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         // Send a request to remove a product from the cart
//         await customAxios.delete(`/cart/remove/${productId}`, {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,  // Include JWT token in the request header
//             },
//         });
//         toast.success('Removed from cart!');  // Show success notification
//         return productId;  // Return the removed product ID
//     } catch (error: any) {
//         toast.error('Failed to remove from cart.');  // Show error notification
//         return thunkAPI.rejectWithValue(error.response.data);  // Handle failure case
//     }
// });

// // Thunk to update cart item quantity
// export const updateCartQuantity = createAsyncThunk(
//     'user/updateCartQuantity',
//     async ({ productId, quantity }: { productId: string; quantity: number }, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         const userId = state.user.userDetails._id;
//         try {
//             // Send a request to update product quantity in the cart
//             await customAxios.put(
//                 `/cart/update/${productId}`,
//                 { quantity },
//                 {
//                     params: { userId },
//                     headers: {
//                         Authorization: `Bearer ${token}`,  // Include JWT token in the request header
//                     },
//                 }
//             );
//             toast.success('Quantity updated!');  // Show success notification
//             return { productId, quantity };  // Return updated product quantity
//         } catch (error: any) {
//             toast.error('Failed to update quantity.');  // Show error notification
//             return thunkAPI.rejectWithValue(error.response.data);  // Handle failure case
//         }
//     }
// );

// // Thunk to add item to favorites
// export const addToFavorites = createAsyncThunk(
//     'user/addToFavorites',
//     async (productId: string, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         const userId = state.user.userDetails._id;
//         try {
//             // Send a request to add a product to favorites
//             const response = await customAxios.post(
//                 '/favorites/add',
//                 { productId, userId },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,  // Include JWT token in the request header
//                     },
//                 }
//             );
//             toast.success('Added to favorites!');  // Show success notification
//             return productId;  // Return the product ID
//         } catch (error: any) {
//             toast.error('Failed to add to favorites.');  // Show error notification
//             return thunkAPI.rejectWithValue(error.response.data);  // Handle failure case
//         }
//     }
// );

// // Thunk to remove item from favorites
// export const removeFromFavorites = createAsyncThunk('user/removeFromFavorites', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         // Send a request to remove a product from favorites
//         await customAxios.delete(`/favorites/remove`, {
//             params: { productId, userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,  // Include JWT token in the request header
//             },
//         });
//         toast.success('Removed from favorites!');  // Show success notification
//         return productId;  // Return the removed product ID
//     } catch (error: any) {
//         toast.error('Failed to remove from favorites.');  // Show error notification
//         return thunkAPI.rejectWithValue(error.response.data);  // Handle failure case
//     }
// });

// // Thunk to fetch cart items for the user
// export const fetchCartItems = createAsyncThunk('user/fetchCartItems', async (_, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         // Send a request to fetch the user's cart items
//         const response = await customAxios.get('/cart', {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,  // Include JWT token in the request header
//             },
//         });
//         return response.data;  // Return the cart items
//     } catch (error: any) {
//         toast.error('Failed to fetch cart items.');  // Show error notification
//         return thunkAPI.rejectWithValue(error.response.data);  // Handle failure case
//     }
// });

// // Thunk to fetch favorite items for the user
// export const fetchFavoriteItems = createAsyncThunk('user/fetchFavoriteItems', async (_, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     try {
//         // Send a request to fetch the user's favorite items
//         const response = await customAxios.get('/favorites', {
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${token}`,  // Include JWT token in the request header
//             },
//         });
//         return response.data;  // Return the favorite items
//     } catch (error: any) {
//         toast.error('Failed to fetch favorite items.');  // Show error notification
//         return thunkAPI.rejectWithValue(error.response.data);  // Handle failure case
//     }
// });

// // Thunk to create an order with the items in the cart
// export const createOrder = createAsyncThunk(
//     'user/createOrder',
//     async ({ items, totalPrice }: { items: any[], totalPrice: number }, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         const userId = state.user.userDetails._id;
//         const cartId = state.user.cart.cartId;

//         // Prepare order data for submission
//         const orderData = {
//             userId,
//             cartId,
//             items: items.map(item => ({
//                 productId: item.productId,
//                 quantity: item.quantity,
//                 price: item.price,
//             })),
//             totalPrice,
//         };

//         try {
//             // Send a request to create the order
//             const response = await customAxios.post('/orders/create', orderData, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,  // Include JWT token in the request header
//                 },
//             });

//             return response.data;  // Return the created order
//         } catch (error: any) {
//             return thunkAPI.rejectWithValue(error.response.data);  // Handle failure case
//         }
//     }
// );

// // Thunk to login user and fetch their cart and favorite items
// export const loginUser = createAsyncThunk(
//     'user/loginUser',
//     async (userData: { email: string; password: string }, thunkAPI) => {
//         try {
//             // Send a login request
//             const response = await customAxios.post('/login', userData);
//             const { token, userDetails } = response.data;
//             thunkAPI.dispatch(setToken(token));  // Save the token in state
//             thunkAPI.dispatch(setUserDetails(userDetails));  // Save user details in state

//             // Fetch cart and favorites after login
//             await thunkAPI.dispatch(fetchCartItems());
//             await thunkAPI.dispatch(fetchFavoriteItems());
//             return response.data;
//         } catch (error: any) {
//             return thunkAPI.rejectWithValue(error.response.data);  // Handle failure case
//         }
//     }
// );

// // Thunk to log out the user
// export const logoutUser = createAsyncThunk('user/logoutUser', async (_, thunkAPI) => {
//     thunkAPI.dispatch(clearUserState());  // Clear user state on logout
//     toast.success('Logged out successfully');  // Show success notification
// });

// // User slice to manage state related to the user, cart, and favorites
// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         // Set the token in state
//         setToken: (state, action: PayloadAction<string | null>) => {
//             state.token = action.payload;
//             state.isAuthenticated = !!action.payload;  // Update authentication status
//         },
//         // Set user details in state
//         setUserDetails: (state, action: PayloadAction<IUserDetails>) => {
//             state.userDetails = action.payload;
//         },
//         // Clear the user state on logout
//         clearUserState: (state) => {
//             state.token = null;
//             state.cart.items = [];
//             state.cart = { cartId: '', items: [] };
//             state.favorites = [];
//             state.isAuthenticated = false;
//             state.userDetails = { firstName: '', lastName: '', email: '', role: '', _id: '' };
//         },
//         // Clear the cart (e.g., after order submission)
//         clearCart: (state) => {
//             console.log('Clearing cart...');  // Log cart clearing for debugging
//             state.cart = { cartId: '', items: [] };
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(addToCart.fulfilled, (state, action) => {
//                 state.cart = action.payload;  // Update cart with added items
//             })
//             .addCase(removeFromCart.fulfilled, (state, action) => {
//                 state.cart.items = state.cart.items.filter(item => item.productId._id !== action.payload);  // Remove item from cart
//             })
//             .addCase(updateCartQuantity.fulfilled, (state, action) => {
//                 const index = state.cart.items.findIndex(item => item.productId._id === action.payload.productId);
//                 if (index !== -1) {
//                     state.cart.items[index].quantity = action.payload.quantity;  // Update product quantity in cart
//                 }
//             })
//             .addCase(createOrder.fulfilled, (state) => {
//                 console.log('Order fulfilled, clearing cart...');  // Log successful order submission
//                 state.cart = { cartId: '', items: [] };  // Clear cart after order
//             })
//             .addCase(fetchCartItems.fulfilled, (state, action) => {
//                 state.cart = action.payload;  // Set the fetched cart items
//             })
//             .addCase(fetchFavoriteItems.fulfilled, (state, action) => {
//                 state.favorites = action.payload.map((item: any) => item.productId._id);  // Set the fetched favorite items
//             });
//     },
// });

// export const { setToken, clearUserState, setUserDetails, clearCart } = userSlice.actions;

// export default userSlice.reducer;








































































import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { customAxios } from '../utils/api';
import { toast, ToastOptions } from 'react-toastify';
import { RootState } from '../store';
import { IUserDetails, UserState } from '../common/interfaces';

// Set default toast options to avoid duplicate toasts
const toastOptions: ToastOptions = { autoClose: 3000, toastId: 'uniqueToastId' };

const initialState: UserState = {
    token: null,  // JWT token for authentication
    cart: { cartId: '', items: [] },  // Initial empty cart
    favorites: [],  // Initial empty favorites list
    isAuthenticated: false,  // Auth state flag
    userDetails: { firstName: '', lastName: '', email: '', role: '', _id: '' },  // Empty user details
    latestOrder: null,  // Store the latest order after a purchase
};

// Thunk to add item to cart
export const addToCart = createAsyncThunk('user/addToCart', async (productId: string, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const token = state.user.token;
    const userId = state.user.userDetails._id;
    try {
        const response = await customAxios.post(
            '/cart/add',
            { productId, userId },
            {
                headers: {
                    Authorization: `Bearer ${token}`,  // Include JWT token in the request header
                },
            }
        );
        toast.success('Added to cart!', toastOptions);
        return response.data;  // Return the cart data
    } catch (error: any) {
        toast.error('Failed to add to cart.', toastOptions);
        return thunkAPI.rejectWithValue(error.response.data);  // Handle failure case
    }
});

// Thunk to remove item from cart
export const removeFromCart = createAsyncThunk('user/removeFromCart', async (productId: string, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const token = state.user.token;
    const userId = state.user.userDetails._id;
    try {
        await customAxios.delete(`/cart/remove/${productId}`, {
            params: { userId },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        toast.success('Removed from cart!', toastOptions);
        return productId;  // Return the removed product ID
    } catch (error: any) {
        toast.error('Failed to remove from cart.', toastOptions);
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

// Thunk to update cart item quantity
export const updateCartQuantity = createAsyncThunk(
    'user/updateCartQuantity',
    async ({ productId, quantity }: { productId: string; quantity: number }, thunkAPI) => {
        const state = thunkAPI.getState() as RootState;
        const token = state.user.token;
        const userId = state.user.userDetails._id;
        try {
            await customAxios.put(
                `/cart/update/${productId}`,
                { quantity },
                {
                    params: { userId },
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            toast.success('Quantity updated!', toastOptions);
            return { productId, quantity };  // Return updated product quantity
        } catch (error: any) {
            toast.error('Failed to update quantity.', toastOptions);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// Thunk to add item to favorites
export const addToFavorites = createAsyncThunk(
    'user/addToFavorites',
    async (productId: string, thunkAPI) => {
        const state = thunkAPI.getState() as RootState;
        const token = state.user.token;
        const userId = state.user.userDetails._id;
        try {
            const response = await customAxios.post(
                '/favorites/add',
                { productId, userId },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            toast.success('Added to favorites!', toastOptions);
            return productId;  // Return the product ID
        } catch (error: any) {
            toast.error('Failed to add to favorites.', toastOptions);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// Thunk to remove item from favorites
export const removeFromFavorites = createAsyncThunk('user/removeFromFavorites', async (productId: string, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const token = state.user.token;
    const userId = state.user.userDetails._id;
    try {
        await customAxios.delete(`/favorites/remove`, {
            params: { productId, userId },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        toast.success('Removed from favorites!', toastOptions);
        return productId;
    } catch (error: any) {
        toast.error('Failed to remove from favorites.', toastOptions);
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

// Thunk to fetch cart items for the user
export const fetchCartItems = createAsyncThunk('user/fetchCartItems', async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const token = state.user.token;
    const userId = state.user.userDetails._id;
    try {
        const response = await customAxios.get('/cart', {
            params: { userId },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error: any) {
        toast.error('Failed to fetch cart items.', toastOptions);
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

// Thunk to fetch favorite items for the user
export const fetchFavoriteItems = createAsyncThunk('user/fetchFavoriteItems', async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const token = state.user.token;
    const userId = state.user.userDetails._id;
    try {
        const response = await customAxios.get('/favorites', {
            params: { userId },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error: any) {
        toast.error('Failed to fetch favorite items.', toastOptions);
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

// Thunk to create an order with the items in the cart
export const createOrder = createAsyncThunk(
    'user/createOrder',
    async ({ items, totalPrice }: { items: any[], totalPrice: number }, thunkAPI) => {
        const state = thunkAPI.getState() as RootState;
        const token = state.user.token;
        const userId = state.user.userDetails._id;
        const cartId = state.user.cart.cartId;

        const orderData = {
            userId,
            cartId,
            items: items.map(item => ({
                productId: item.productId,
                quantity: item.quantity,
                price: item.price,
            })),
            totalPrice,
        };

        try {
            const response = await customAxios.post('/orders/create', orderData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// Thunk to login user and fetch their cart and favorite items
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userData: { email: string; password: string }, thunkAPI) => {
        try {
            const response = await customAxios.post('/login', userData);
            const { token, userDetails } = response.data;
            thunkAPI.dispatch(setToken(token));  // Save the token in state
            thunkAPI.dispatch(setUserDetails(userDetails));  // Save user details in state

            // Fetch cart and favorites after login
            await thunkAPI.dispatch(fetchCartItems());
            await thunkAPI.dispatch(fetchFavoriteItems());
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// Thunk to log out the user
export const logoutUser = createAsyncThunk('user/logoutUser', async (_, thunkAPI) => {
    thunkAPI.dispatch(clearUserState());
    toast.success('Logged out successfully');
});

// User slice to manage state related to the user, cart, and favorites
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string | null>) => {
            state.token = action.payload;
            state.isAuthenticated = !!action.payload;
        },
        setUserDetails: (state, action: PayloadAction<IUserDetails>) => {
            state.userDetails = action.payload;
        },
        clearUserState: (state) => {
            state.token = null;
            state.cart.items = [];
            state.cart = { cartId: '', items: [] };
            state.favorites = [];
            state.isAuthenticated = false;
            state.userDetails = { firstName: '', lastName: '', email: '', role: '', _id: '' };
        },
        clearCart: (state) => {
            state.cart = { cartId: '', items: [] };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addToCart.fulfilled, (state, action) => {
                state.cart = action.payload;
            })
            .addCase(removeFromCart.fulfilled, (state, action) => {
                state.cart.items = state.cart.items.filter(item => item.productId._id !== action.payload);
            })
            .addCase(updateCartQuantity.fulfilled, (state, action) => {
                const index = state.cart.items.findIndex(item => item.productId._id === action.payload.productId);
                if (index !== -1) {
                    state.cart.items[index].quantity = action.payload.quantity;
                }
            })
            .addCase(createOrder.fulfilled, (state) => {
                state.cart = { cartId: '', items: [] };
            })
            .addCase(fetchCartItems.fulfilled, (state, action) => {
                state.cart = action.payload;
            })
            .addCase(fetchFavoriteItems.fulfilled, (state, action) => {
                state.favorites = action.payload.map((item: any) => item.productId._id);
            });
    },
});

export const { setToken, clearUserState, setUserDetails, clearCart } = userSlice.actions;

export default userSlice.reducer;
