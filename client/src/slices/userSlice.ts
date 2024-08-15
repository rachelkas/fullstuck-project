// // src/slices/userSlice.ts

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface UserState {
//     isAuthenticated: boolean;
//     role: string;
// }

// const initialState: UserState = {
//     isAuthenticated: false,
//     role: 'guest',
// };

// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         login(state, action: PayloadAction<string>) {
//             state.isAuthenticated = true;
//             state.role = action.payload;
//         },
//         logout(state) {
//             state.isAuthenticated = false;
//             state.role = 'guest';
//         },
//     },
// });

// export const { login, logout } = userSlice.actions;
// export default userSlice.reducer;


























// // src/slices/userSlice.ts

// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { RootState } from '../store';  // Import RootState from the store

// export const addToCart = createAsyncThunk(
//     'user/addToCart',
//     async (productId: string, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;  // Use RootState type
//         const token = state.user.token;
//         try {
//             const response = await axios.post(
//                 '/api/cart',
//                 { productId },
//                 {
//                     headers: { Authorization: `Bearer ${token}` },
//                 }
//             );
//             toast.success('Added to cart!');
//             return response.data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue((error as any).response.data);
//         }
//     }
// );

// export const addToFavorites = createAsyncThunk(
//     'user/addToFavorites',
//     async (productId: string, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;  // Use RootState type
//         const token = state.user.token;
//         try {
//             const response = await axios.post(
//                 '/api/favorites',
//                 { productId },
//                 {
//                     headers: { Authorization: `Bearer ${token}` },
//                 }
//             );
//             toast.success('Added to favorites!');
//             return response.data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue((error as any).response.data);
//         }
//     }
// );

// const userSlice = createSlice({
//     name: 'user',
//     initialState: {
//         token: '',
//         cart: [] as string[],
//         favorites: [] as string[],
//         isAuthenticated: false,
//     },
//     reducers: {
//         setToken: (state, action) => {
//             state.token = action.payload;
//             state.isAuthenticated = !!action.payload;
//         },
//         clearUserState: (state) => {
//             state.token = '';
//             state.cart = [];
//             state.favorites = [];
//             state.isAuthenticated = false;
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(addToCart.fulfilled, (state, action) => {
//                 state.cart.push(action.payload);
//             })
//             .addCase(addToFavorites.fulfilled, (state, action) => {
//                 state.favorites.push(action.payload);
//             });
//     },
// });

// export const { setToken, clearUserState } = userSlice.actions;
// export default userSlice.reducer;














































// src/slices/userSlice.ts

// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { RootState } from '../store';

// interface UserState {
//     token: string | null;
//     cart: any[];
//     favorites: any[];
//     isAuthenticated: boolean;
// }

// const initialState: UserState = {
//     token: null,
//     cart: [],
//     favorites: [],
//     isAuthenticated: false,
// };

// // Thunk to add item to cart
// export const addToCart = createAsyncThunk(
//     'user/addToCart',
//     async (productId: string, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         try {
//             const response = await axios.post(
//                 '/api/cart',
//                 { productId },
//                 {
//                     headers: { Authorization: `Bearer ${token}` },
//                 }
//             );
//             toast.success('Added to cart!');
//             return response.data;
//         } catch (error) {
//             toast.error('Failed to add to cart.');
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
//         try {
//             const response = await axios.post(
//                 '/api/favorites',
//                 { productId },
//                 {
//                     headers: { Authorization: `Bearer ${token}` },
//                 }
//             );
//             toast.success('Added to favorites!');
//             return response.data;
//         } catch (error) {
//             toast.error('Failed to add to favorites.');
//             return thunkAPI.rejectWithValue((error as any).response.data);
//         }
//     }
// );

// // Thunk to fetch cart items
// export const fetchCartItems = createAsyncThunk(
//     'user/fetchCartItems',
//     async (_, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         try {
//             const response = await axios.get('/api/cart', {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             return response.data;
//         } catch (error) {
//             toast.error('Failed to fetch cart items.');
//             return thunkAPI.rejectWithValue((error as any).response.data);
//         }
//     }
// );

// // Thunk to fetch favorite items
// export const fetchFavoriteItems = createAsyncThunk(
//     'user/fetchFavoriteItems',
//     async (_, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         try {
//             const response = await axios.get('/api/favorites', {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             return response.data;
//         } catch (error) {
//             toast.error('Failed to fetch favorite items.');
//             return thunkAPI.rejectWithValue((error as any).response.data);
//         }
//     }
// );

// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         setToken: (state, action: PayloadAction<string | null>) => {
//             state.token = action.payload;
//             state.isAuthenticated = !!action.payload;
//         },
//         clearUserState: (state) => {
//             state.token = null;
//             state.cart = [];
//             state.favorites = [];
//             state.isAuthenticated = false;
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(addToCart.fulfilled, (state, action) => {
//                 state.cart.push(action.payload);
//             })
//             .addCase(addToFavorites.fulfilled, (state, action) => {
//                 state.favorites.push(action.payload);
//             })
//             .addCase(fetchCartItems.fulfilled, (state, action) => {
//                 state.cart = action.payload;
//             })
//             .addCase(fetchFavoriteItems.fulfilled, (state, action) => {
//                 state.favorites = action.payload;
//             });
//     },
// });

// export const { setToken, clearUserState } = userSlice.actions;
// export default userSlice.reducer;

































// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { RootState } from '../store';

// interface UserState {
//     token: string | null;
//     cart: any[];
//     favorites: any[];
//     isAuthenticated: boolean;
// }

// const initialState: UserState = {
//     token: null,
//     cart: [],
//     favorites: [],
//     isAuthenticated: false,
// };

// // Thunk to add item to cart
// export const addToCart = createAsyncThunk(
//     'user/addToCart',
//     async (productId: string, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         try {
//             const response = await axios.post(
//                 '/api/cart/add',
//                 { productId },
//                 {
//                     headers: { Authorization: `Bearer ${token}` },
//                 }
//             );
//             toast.success('Added to cart!');
//             return response.data.cartItem; // Ensure this matches your backend response structure
//         } catch (error) {
//             toast.error('Failed to add to cart.');
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
//         try {
//             const response = await axios.post(
//                 '/api/favorites/add',
//                 { productId },
//                 {
//                     headers: { Authorization: `Bearer ${token}` },
//                 }
//             );
//             toast.success('Added to favorites!');
//             return response.data.favoriteItem; // Ensure this matches your backend response structure
//         } catch (error) {
//             toast.error('Failed to add to favorites.');
//             return thunkAPI.rejectWithValue((error as any).response.data);
//         }
//     }
// );

// // Thunk to fetch cart items
// export const fetchCartItems = createAsyncThunk(
//     'user/fetchCartItems',
//     async (_, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         try {
//             const response = await axios.get('/api/cart', {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             return response.data;
//         } catch (error) {
//             toast.error('Failed to fetch cart items.');
//             return thunkAPI.rejectWithValue((error as any).response.data);
//         }
//     }
// );

// // Thunk to fetch favorite items
// export const fetchFavoriteItems = createAsyncThunk(
//     'user/fetchFavoriteItems',
//     async (_, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         try {
//             const response = await axios.get('/api/favorites', {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             return response.data;
//         } catch (error) {
//             toast.error('Failed to fetch favorite items.');
//             return thunkAPI.rejectWithValue((error as any).response.data);
//         }
//     }
// );

// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         setToken: (state, action: PayloadAction<string | null>) => {
//             state.token = action.payload;
//             state.isAuthenticated = !!action.payload;
//         },
//         clearUserState: (state) => {
//             state.token = null;
//             state.cart = [];
//             state.favorites = [];
//             state.isAuthenticated = false;
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(addToCart.fulfilled, (state, action) => {
//                 state.cart.push(action.payload);
//             })
//             .addCase(addToFavorites.fulfilled, (state, action) => {
//                 state.favorites.push(action.payload);
//             })
//             .addCase(fetchCartItems.fulfilled, (state, action) => {
//                 state.cart = action.payload;
//             })
//             .addCase(fetchFavoriteItems.fulfilled, (state, action) => {
//                 state.favorites = action.payload;
//             });
//     },
// });

// export const { setToken, clearUserState } = userSlice.actions;
// export default userSlice.reducer;

















































// // src/slices/userSlice.ts
// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { RootState } from '../store';

// interface UserState {
//     token: string | null;
//     cart: any[];
//     favorites: any[];
//     isAuthenticated: boolean;
//     firstName: string | null;
//     role: string | null;
// }

// const initialState: UserState = {
//     token: null,
//     cart: [],
//     favorites: [],
//     isAuthenticated: false,
//     firstName: null,
//     role: null,
// };

// // Thunk to add item to cart
// export const addToCart = createAsyncThunk(
//     'user/addToCart',
//     async (productId: string, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         try {
//             const response = await axios.post(
//                 '/api/cart/add',
//                 { productId },
//                 {
//                     headers: { Authorization: `Bearer ${token}` },
//                 }
//             );
//             toast.success('Added to cart!');
//             return response.data.cartItem;
//         } catch (error) {
//             toast.error('Failed to add to cart.');
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
//         try {
//             const response = await axios.post(
//                 '/api/favorites/add',
//                 { productId },
//                 {
//                     headers: { Authorization: `Bearer ${token}` },
//                 }
//             );
//             toast.success('Added to favorites!');
//             return response.data.favoriteItem;
//         } catch (error) {
//             toast.error('Failed to add to favorites.');
//             return thunkAPI.rejectWithValue((error as any).response.data);
//         }
//     }
// );

// // Thunk to fetch cart items
// export const fetchCartItems = createAsyncThunk(
//     'user/fetchCartItems',
//     async (_, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         try {
//             const response = await axios.get('/api/cart', {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             return response.data;
//         } catch (error) {
//             toast.error('Failed to fetch cart items.');
//             return thunkAPI.rejectWithValue((error as any).response.data);
//         }
//     }
// );

// // Thunk to fetch favorite items
// export const fetchFavoriteItems = createAsyncThunk(
//     'user/fetchFavoriteItems',
//     async (_, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         try {
//             const response = await axios.get('/api/favorites', {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             return response.data;
//         } catch (error) {
//             toast.error('Failed to fetch favorite items.');
//             return thunkAPI.rejectWithValue((error as any).response.data);
//         }
//     }
// );

// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         setToken: (state, action: PayloadAction<string | null>) => {
//             state.token = action.payload;
//             state.isAuthenticated = !!action.payload;
//         },
//         setUserDetails: (state, action: PayloadAction<{ firstName: string | null; role: string | null }>) => {
//             state.firstName = action.payload.firstName;
//             state.role = action.payload.role;
//         },
//         clearUserState: (state) => {
//             state.token = null;
//             state.cart = [];
//             state.favorites = [];
//             state.isAuthenticated = false;
//             state.firstName = null;
//             state.role = null;
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(addToCart.fulfilled, (state, action) => {
//                 state.cart.push(action.payload);
//             })
//             .addCase(addToFavorites.fulfilled, (state, action) => {
//                 state.favorites.push(action.payload);
//             })
//             .addCase(fetchCartItems.fulfilled, (state, action) => {
//                 state.cart = action.payload;
//             })
//             .addCase(fetchFavoriteItems.fulfilled, (state, action) => {
//                 state.favorites = action.payload;
//             });
//     },
// });

// export const { setToken, setUserDetails, clearUserState } = userSlice.actions;
// export default userSlice.reducer;


































// // src/slices/userSlice.ts
// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { RootState } from '../store';

// interface UserState {
//     token: string | null;
//     cart: any[];
//     favorites: any[];
//     isAuthenticated: boolean;
//     firstName: string | null;
//     role: string | null;
// }

// const initialState: UserState = {
//     token: null,
//     cart: [],
//     favorites: [],
//     isAuthenticated: false,
//     firstName: null,
//     role: null,
// };

// export const addToCart = createAsyncThunk(
//     'user/addToCart',
//     async (productId: string, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         try {
//             const response = await axios.post(
//                 '/api/cart/add',
//                 { productId },
//                 {
//                     headers: { Authorization: `Bearer ${token}` },
//                 }
//             );
//             toast.success('Added to cart!');
//             return response.data.cartItem;
//         } catch (error) {
//             toast.error('Failed to add to cart.');
//             return thunkAPI.rejectWithValue((error as any).response.data);
//         }
//     }
// );

// export const addToFavorites = createAsyncThunk(
//     'user/addToFavorites',
//     async (productId: string, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         try {
//             const response = await axios.post(
//                 '/api/favorites/add',
//                 { productId },
//                 {
//                     headers: { Authorization: `Bearer ${token}` },
//                 }
//             );
//             toast.success('Added to favorites!');
//             return response.data.favoriteItem;
//         } catch (error) {
//             toast.error('Failed to add to favorites.');
//             return thunkAPI.rejectWithValue((error as any).response.data);
//         }
//     }
// );

// export const fetchCartItems = createAsyncThunk(
//     'user/fetchCartItems',
//     async (_, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         try {
//             const response = await axios.get('/api/cart', {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             return response.data;
//         } catch (error) {
//             toast.error('Failed to fetch cart items.');
//             return thunkAPI.rejectWithValue((error as any).response.data);
//         }
//     }
// );

// export const fetchFavoriteItems = createAsyncThunk(
//     'user/fetchFavoriteItems',
//     async (_, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         try {
//             const response = await axios.get('/api/favorites', {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             return response.data;
//         } catch (error) {
//             toast.error('Failed to fetch favorite items.');
//             return thunkAPI.rejectWithValue((error as any).response.data);
//         }
//     }
// );

// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         setToken: (state, action: PayloadAction<string | null>) => {
//             state.token = action.payload;
//             state.isAuthenticated = !!action.payload;
//         },
//         setUserDetails: (state, action: PayloadAction<{ firstName: string | null; role: string | null }>) => {
//             state.firstName = action.payload.firstName;
//             state.role = action.payload.role;
//         },
//         clearUserState: (state) => {
//             state.token = null;
//             state.cart = [];
//             state.favorites = [];
//             state.isAuthenticated = false;
//             state.firstName = null;
//             state.role = null;
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(addToCart.fulfilled, (state, action) => {
//                 state.cart.push(action.payload);
//             })
//             .addCase(addToFavorites.fulfilled, (state, action) => {
//                 state.favorites.push(action.payload);
//             })
//             .addCase(fetchCartItems.fulfilled, (state, action) => {
//                 state.cart = action.payload;
//             })
//             .addCase(fetchFavoriteItems.fulfilled, (state, action) => {
//                 state.favorites = action.payload;
//             });
//     },
// });

// export const { setToken, setUserDetails, clearUserState } = userSlice.actions;
// export default userSlice.reducer;






















































// src/slices/userSlice.ts
// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { RootState } from '../store';

// interface UserState {
//     token: string | null;
//     cart: any[];
//     favorites: any[];
//     isAuthenticated: boolean;
//     firstName: string | null;
//     role: string | null;
// }

// const initialState: UserState = {
//     token: null,
//     cart: [],
//     favorites: [],
//     isAuthenticated: false,
//     firstName: null,
//     role: null,
// };

// export const addToCart = createAsyncThunk(
//     'user/addToCart',
//     async (productId: string, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         try {
//             const response = await axios.post(
//                 '/api/cart/add',
//                 { productId },
//                 {
//                     headers: { Authorization: `Bearer ${token}` },
//                 }
//             );
//             toast.success('Added to cart!');
//             return response.data.cartItem;
//         } catch (error) {
//             toast.error('Failed to add to cart.');
//             return thunkAPI.rejectWithValue((error as any).response.data);
//         }
//     }
// );

// export const addToFavorites = createAsyncThunk(
//     'user/addToFavorites',
//     async (productId: string, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         try {
//             const response = await axios.post(
//                 '/api/favorites/add',
//                 { productId },
//                 {
//                     headers: { Authorization: `Bearer ${token}` },
//                 }
//             );
//             toast.success('Added to favorites!');
//             return response.data.favoriteItem;
//         } catch (error) {
//             toast.error('Failed to add to favorites.');
//             return thunkAPI.rejectWithValue((error as any).response.data);
//         }
//     }
// );

// export const fetchCartItems = createAsyncThunk(
//     'user/fetchCartItems',
//     async (_, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         try {
//             const response = await axios.get('/api/cart', {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             return response.data;
//         } catch (error) {
//             toast.error('Failed to fetch cart items.');
//             return thunkAPI.rejectWithValue((error as any).response.data);
//         }
//     }
// );

// export const fetchFavoriteItems = createAsyncThunk(
//     'user/fetchFavoriteItems',
//     async (_, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         try {
//             const response = await axios.get('/api/favorites', {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             return response.data;
//         } catch (error) {
//             toast.error('Failed to fetch favorite items.');
//             return thunkAPI.rejectWithValue((error as any).response.data);
//         }
//     }
// );

// export const removeFromCart = createAsyncThunk(
//     'user/removeFromCart',
//     async (productId: string, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         try {
//             await axios.delete(`/api/cart/remove/${productId}`, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             toast.success('Removed from cart');
//             return productId;
//         } catch (error) {
//             toast.error('Failed to remove from cart.');
//             return thunkAPI.rejectWithValue((error as any).response.data);
//         }
//     }
// );

// export const removeFromFavorites = createAsyncThunk(
//     'user/removeFromFavorites',
//     async (productId: string, thunkAPI) => {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         try {
//             await axios.delete(`/api/favorites/remove/${productId}`, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             toast.success('Removed from favorites');
//             return productId;
//         } catch (error) {
//             toast.error('Failed to remove from favorites.');
//             return thunkAPI.rejectWithValue((error as any).response.data);
//         }
//     }
// );

// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         setToken: (state, action: PayloadAction<string | null>) => {
//             state.token = action.payload;
//             state.isAuthenticated = !!action.payload;
//         },
//         setUserDetails: (state, action: PayloadAction<{ firstName: string | null; role: string | null }>) => {
//             state.firstName = action.payload.firstName;
//             state.role = action.payload.role;
//         },
//         clearUserState: (state) => {
//             state.token = null;
//             state.cart = [];
//             state.favorites = [];
//             state.isAuthenticated = false;
//             state.firstName = null;
//             state.role = null;
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(addToCart.fulfilled, (state, action) => {
//                 state.cart.push(action.payload);
//             })
//             .addCase(addToFavorites.fulfilled, (state, action) => {
//                 state.favorites.push(action.payload);
//             })
//             .addCase(fetchCartItems.fulfilled, (state, action) => {
//                 state.cart = action.payload;
//             })
//             .addCase(fetchFavoriteItems.fulfilled, (state, action) => {
//                 state.favorites = action.payload;
//             })
//             .addCase(removeFromCart.fulfilled, (state, action) => {
//                 state.cart = state.cart.filter(item => item._id !== action.payload);
//             })
//             .addCase(removeFromFavorites.fulfilled, (state, action) => {
//                 state.favorites = state.favorites.filter(item => item._id !== action.payload);
//             });
//     },
// });

// export const { setToken, setUserDetails, clearUserState } = userSlice.actions;
// export default userSlice.reducer;




















































































































import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { RootState } from '../store';

interface UserState {
    token: string | null;
    cart: any[];
    favorites: any[];
    isAuthenticated: boolean;
    firstName: string;
}

const initialState: UserState = {
    token: null,
    cart: [],
    favorites: [],
    isAuthenticated: false,
    firstName: '',
};

// Thunk to add item to cart
export const addToCart = createAsyncThunk('user/addToCart', async (productId: string, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const token = state.user.token;
    try {
        const response = await axios.post(
            '/api/cart/add',
            { productId },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        toast.success('Added to cart!');
        return response.data.cartItem;
    } catch (error) {
        toast.error('Failed to add to cart.');
        return thunkAPI.rejectWithValue((error as any).response.data);
    }
});

// Thunk to add item to favorites
export const addToFavorites = createAsyncThunk(
    'user/addToFavorites',
    async (productId: string, thunkAPI) => {
        const state = thunkAPI.getState() as RootState;
        const token = state.user.token;
        try {
            const response = await axios.post(
                '/api/favorites/add',
                { productId },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            toast.success('Added to favorites!');
            return response.data.favoriteItem;
        } catch (error) {
            toast.error('Failed to add to favorites.');
            return thunkAPI.rejectWithValue((error as any).response.data);
        }
    }
);

// Thunk to fetch cart items
export const fetchCartItems = createAsyncThunk('user/fetchCartItems', async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const token = state.user.token;
    try {
        const response = await axios.get('/api/cart', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        toast.error('Failed to fetch cart items.');
        return thunkAPI.rejectWithValue((error as any).response.data);
    }
});

// Thunk to fetch favorite items
export const fetchFavoriteItems = createAsyncThunk('user/fetchFavoriteItems', async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const token = state.user.token;
    try {
        const response = await axios.get('/api/favorites', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        toast.error('Failed to fetch favorite items.');
        return thunkAPI.rejectWithValue((error as any).response.data);
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string | null>) => {
            state.token = action.payload;
            state.isAuthenticated = !!action.payload;
        },
        setFirstName: (state, action: PayloadAction<string>) => {
            state.firstName = action.payload;
        },
        clearUserState: (state) => {
            state.token = null;
            state.cart = [];
            state.favorites = [];
            state.isAuthenticated = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addToCart.fulfilled, (state, action) => {
                state.cart.push(action.payload);
            })
            .addCase(addToFavorites.fulfilled, (state, action) => {
                state.favorites.push(action.payload);
            })
            .addCase(fetchCartItems.fulfilled, (state, action) => {
                state.cart = action.payload;
            })
            .addCase(fetchFavoriteItems.fulfilled, (state, action) => {
                state.favorites = action.payload;
            });
    },
});

export const { setToken, clearUserState, setFirstName } = userSlice.actions;

export default userSlice.reducer;
