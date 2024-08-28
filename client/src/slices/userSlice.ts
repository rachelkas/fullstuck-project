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
    } catch (error) {
        toast.error('Failed to add to cart.');
        return thunkAPI.rejectWithValue((error as any).response.data);
    }
});

// Thunk to remove item from cart
export const removeFromCart = createAsyncThunk('user/removeFromCart', async (productId: string, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const token = state.user.token;
    const userId = state.user.userDetails._id;
    try {
        const response = await customAxios.delete(`/cart/remove/${productId}`, {
            params: { userId },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        toast.success('Removed from cart!');
        return productId;
    } catch (error) {
        toast.error('Failed to remove from cart.');
        return thunkAPI.rejectWithValue((error as any).response.data);
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
            const response = await customAxios.put(
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
        } catch (error) {
            toast.error('Failed to update quantity.');
            return thunkAPI.rejectWithValue((error as any).response.data);
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
            return response.data.favoriteItem;
        } catch (error) {
            toast.error('Failed to add to favorites.');
            return thunkAPI.rejectWithValue((error as any).response.data);
        }
    }
);

// Thunk to remove item from favorites
export const removeFromFavorites = createAsyncThunk('user/removeFromFavorites', async (productId: string, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const token = state.user.token;
    const userId = state.user.userDetails._id;
    try {
        const response = await customAxios.delete(`/favorites/remove`, {
            params: {productId, userId},
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        toast.success('Removed from favorites!');
        return productId;
    } catch (error) {
        toast.error('Failed to remove from favorites.');
        return thunkAPI.rejectWithValue((error as any).response.data);
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
    } catch (error) {
        toast.error('Failed to fetch cart items.');
        return thunkAPI.rejectWithValue((error as any).response.data);
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
        setUserDetails: (state, action: PayloadAction<IUserDetails>) => {
            state.userDetails = action.payload;
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
            .addCase(removeFromCart.fulfilled, (state, action) => {
                state.cart = state.cart.filter(item => item.productId._id !== action.payload);
            })
            .addCase(updateCartQuantity.fulfilled, (state, action) => {
                const index = state.cart.findIndex(item => item.productId._id === action.payload.productId);
                if (index !== -1) {
                    state.cart[index].quantity = action.payload.quantity;
                }
            })
            .addCase(addToFavorites.fulfilled, (state, action) => {
                state.favorites.push(action.payload);
            })
            .addCase(removeFromFavorites.fulfilled, (state, action) => {
                state.favorites = state.favorites.filter(item => item.productId._id !== action.payload);
            })
            .addCase(fetchCartItems.fulfilled, (state, action) => {
                state.cart = action.payload;
            })
            .addCase(fetchFavoriteItems.fulfilled, (state, action) => {
                state.favorites = action.payload;
            });
    },
});

export const { setToken, clearUserState, setUserDetails } = userSlice.actions;

export default userSlice.reducer;
