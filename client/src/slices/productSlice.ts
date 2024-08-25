// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from '../utils/api';

// interface ProductState {
//     items: any[];
//     loading: boolean;
//     error: string | null;
// }

// const initialState: ProductState = {
//     items: [],
//     loading: false,
//     error: null,
// };

// export const fetchProducts = createAsyncThunk(
//     'products/fetchProducts',
//     async () => {
//         const response = await axios.get('/products');
//         return response.data;
//     }
// );

// const productSlice = createSlice({
//     name: 'products',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchProducts.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(fetchProducts.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.items = action.payload;
//             })
//             .addCase(fetchProducts.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.error.message || 'Failed to fetch products';
//             });
//     },
// });

// export default productSlice.reducer;













































import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../utils/api';
import { RootState } from '../store';

interface ProductState {
    items: any[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    items: [],
    loading: false,
    error: null,
};

// add product to the database
export const addProduct = createAsyncThunk('products/addProduct', async (product: any, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const userId = state.user.userDetails._id;
    const token = state.user.token;

    const response = await axios.post('/products', product, {params: {userId}, headers: {
        Authorization: `Bearer ${token}`,
    }});
    return response.data;
});

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('/products');
    return response.data;
});

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.items = [];
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
                state.error = null;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch products';
                state.items = [];
            });
    },
});


export default productSlice.reducer;
