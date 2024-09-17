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

























































import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { customAxios } from '../utils/api';
import { toast } from 'react-toastify';
import { RootState } from '../store';
import { IUserDetails, UserState } from '../common/interfaces';

const initialState: UserState = {
    token: null,
    cart: [],
    favorites: [],
    isAuthenticated: false,
    userDetails: { firstName: '', lastName: '', email: '', role: '', _id: '' },
    latestOrder: null, // Add latestOrder state
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
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        toast.success('Added to cart!');
        return response.data.cartItem;
    } catch (error: any) {
        toast.error('Failed to add to cart.');
        return thunkAPI.rejectWithValue(error.response.data);
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
        toast.success('Removed from cart!');
        return productId;
    } catch (error: any) {
        toast.error('Failed to remove from cart.');
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
            toast.success('Quantity updated!');
            return { productId, quantity };
        } catch (error: any) {
            toast.error('Failed to update quantity.');
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
            toast.success('Added to favorites!');
            return productId;
        } catch (error: any) {
            toast.error('Failed to add to favorites.');
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
        toast.success('Removed from favorites!');
        return productId;
    } catch (error: any) {
        toast.error('Failed to remove from favorites.');
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

// Thunk to fetch cart items
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
        toast.error('Failed to fetch cart items.');
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

// Thunk to fetch favorite items
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
        toast.error('Failed to fetch favorite items.');
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

// Fixing the signature to match the call in OrderSummaryPage
export const createOrder = createAsyncThunk(
    'user/createOrder',
    async ({ items, totalPrice }: { items: any[], totalPrice: number }, thunkAPI) => {
        const state = thunkAPI.getState() as RootState;
        const token = state.user.token;
        const userId = state.user.userDetails._id;

        const orderData = {
            userId,
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

            // If successful, return the order response
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// Thunk to login user and fetch cart/favorite data
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userData: { email: string; password: string }, thunkAPI) => {
        try {
            const response = await customAxios.post('/login', userData);
            const { token, userDetails } = response.data;
            thunkAPI.dispatch(setToken(token));
            thunkAPI.dispatch(setUserDetails(userDetails));
            // Fetch cart and favorites after login
            await thunkAPI.dispatch(fetchCartItems());
            await thunkAPI.dispatch(fetchFavoriteItems());
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// Thunk to logout user
export const logoutUser = createAsyncThunk('user/logoutUser', async (_, thunkAPI) => {
    thunkAPI.dispatch(clearUserState());
    toast.success('Logged out successfully');
});

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
            state.cart = [];
            state.favorites = [];
            state.isAuthenticated = false;
            state.userDetails = { firstName: '', lastName: '', email: '', role: '', _id: '' };
        },
        clearCart: (state) => {
            console.log('Clearing cart...');
            state.cart = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addToCart.fulfilled, (state, action) => {
                state.cart.push(action.payload);
            })
            .addCase(removeFromCart.fulfilled, (state, action) => {
                state.cart = state.cart.filter(item => item.productId._id !== action.payload);
            })
            .addCase(updateCartQuantity.fulfilled, (state, action) => {
                const index = state.cart.findIndex(item => item.productId._id === action.payload.productId);
                if (index !== -1) {
                    state.cart[index].quantity = action.payload.quantity;
                }
            })
            .addCase(createOrder.fulfilled, (state) => {
                console.log('Order fulfilled, clearing cart...');
                state.cart = [];
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
