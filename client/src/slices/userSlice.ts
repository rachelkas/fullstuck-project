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

// Thunk to fetch cart items
export const fetchCartItems = createAsyncThunk('user/fetchCartItems', async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const token = state.user.token;
    const userId = state.user.userDetails._id
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
    const userId = state.user.userDetails._id
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

export const { setToken, clearUserState, setUserDetails } = userSlice.actions;

export default userSlice.reducer;
