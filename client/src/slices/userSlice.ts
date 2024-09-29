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
        if (error.response?.status === 401) {

            thunkAPI.dispatch(logoutUser(true)); //hideToast
            window.location.pathname = '/log-in';
        } else {
            toast.error('Failed to add to cart.', toastOptions);
        }
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
        if (error.response?.status === 401) {

            thunkAPI.dispatch(logoutUser(true));
            window.location.pathname = '/log-in';
        } else {
            toast.error('Failed to remove from cart.', toastOptions);
        }
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
            if (error.response?.status === 401) {

                thunkAPI.dispatch(logoutUser(true));
                window.location.pathname = '/log-in';
            } else {
                toast.error('Failed to update quantity.', toastOptions);
            }
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
            return response.data;  // Return the product ID
        } catch (error: any) {
            if (error.response?.status === 401) {

                thunkAPI.dispatch(logoutUser(true));
                window.location.pathname = '/log-in';
            } else {
                toast.error('Failed to add to favorites.', toastOptions);
            }
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
        const response =
            await customAxios.delete(`/favorites/remove`, {
                params: { productId, userId },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        toast.success('Removed from favorites!', toastOptions);
        return response.data;
    } catch (error: any) {
        if (error.response?.status === 401) {

            thunkAPI.dispatch(logoutUser(true));
            window.location.pathname = '/log-in';
        } else {
            toast.error('Failed to remove from favorites.', toastOptions);
        }
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

        if (error.response?.status === 401) {

            thunkAPI.dispatch(logoutUser(true));
            window.location.pathname = '/log-in';
        } else {
            toast.error('Failed to fetch cart items.', toastOptions);
        }
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
        if (error.response?.status === 401) {

            thunkAPI.dispatch(logoutUser(true));
            window.location.pathname = '/log-in';
        } else {
            toast.error('Failed to fetch favorite items.', toastOptions);
        }
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
            if (error.response?.status === 401) {

                thunkAPI.dispatch(logoutUser(true));
                window.location.pathname = '/log-in';
            }
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// Thunk to login user and fetch their cart and favorite items
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userData: { email: string; password: string }, thunkAPI) => {
        try {
            const response = await customAxios.post('/log-in', userData);
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
export const logoutUser = createAsyncThunk('user/logoutUser', async (shouldHideToast: boolean = false, thunkAPI) => {
    thunkAPI.dispatch(clearUserState());
    localStorage.removeItem('token');
    if (!shouldHideToast) {
        toast.success('Logged out successfully');
    }
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
            })
            .addCase(addToFavorites.fulfilled, (state, action) => {
                state.favorites = action.payload.map((item: any) => item.productId._id);
            })
            .addCase(removeFromFavorites.fulfilled, (state, action) => {
                state.favorites = action.payload.map((item: any) => item.productId._id);
            });
    },
});

export const { setToken, clearUserState, setUserDetails, clearCart } = userSlice.actions;

export default userSlice.reducer;
