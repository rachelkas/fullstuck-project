// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from '../utils/api';
// import { RootState } from '../store';
// import { SingleProduct, SingleProductProps } from '../common/interfaces';

// export interface ProductState {
//     items: any[];
//     loading: boolean;
//     error: string | null;
// }

// const initialState: ProductState = {
//     items: [],
//     loading: false,
//     error: null,
// };

// // add product to the database
// export const addProduct = createAsyncThunk('products/addProduct', async (product: any, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const userId = state.user.userDetails._id;
//     const token = state.user.token;

//     const response = await axios.post('/products', product, {params: {userId}, headers: {
//         Authorization: `Bearer ${token}`,
//     }});
//     return response.data;
// });

// export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
//     const response = await axios.get('/products');
//     return response.data;
// });

// export const updateProduct = createAsyncThunk('/products', async(product: any, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     const response = await axios.put('/products', product.productData, 
//     {
//         params: {productId: product.productId, userId}, 
//         headers: {Authorization: `Bearer ${token}`,}
//     });
//     return response;
// })

// const productSlice = createSlice({
//     name: 'products',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchProducts.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//                 state.items = [];
//             })
//             .addCase(fetchProducts.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.items = action.payload;
//                 state.error = null;
//             })
//             .addCase(fetchProducts.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.error.message || 'Failed to fetch products';
//                 state.items = [];
//             });
//     },
//     selectors: {
//         getProductById: (state, productId) => state.items.find(i => i._id === productId)
//     }
// });

// export const {getProductById} = productSlice.selectors;


// export default productSlice.reducer;






































// src/slices/productSlice.ts
// // src/slices/productSlice.ts
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from '../utils/api';
// import { RootState } from '../store';

// export interface ProductState {
//     items: any[];
//     loading: boolean;
//     error: string | null;
// }

// const initialState: ProductState = {
//     items: [],
//     loading: false,
//     error: null,
// };

// // Selector to get a product by its ID
// export const getProductById = (state: RootState, productId: string) => {
//     return state.products.items.find((product) => product._id === productId);
// };

// // Fetch products, with optional filtering by minPrice and maxPrice
// export const fetchProducts = createAsyncThunk(
//     'products/fetchProducts',
//     async ({ minPrice, maxPrice }: { minPrice?: string; maxPrice?: string }) => {
//         const params: any = {};
//         if (minPrice) params.minPrice = minPrice;
//         if (maxPrice) params.maxPrice = maxPrice;

//         const response = await axios.get('/products', { params });
//         return response.data;
//     }
// );

// // Add product
// export const addProduct = createAsyncThunk('products/addProduct', async (product: any, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const userId = state.user.userDetails._id;
//     const token = state.user.token;

//     const response = await axios.post('/products', product, {
//         params: { userId },
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     });
//     return response.data;
// });

// // Update product
// export const updateProduct = createAsyncThunk('products/updateProduct', async (product: any, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;
//     const response = await axios.put('/products', product.productData, {
//         params: { productId: product.productId, userId },
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     });
//     return response.data;
// });

// const productSlice = createSlice({
//     name: 'products',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchProducts.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//                 state.items = [];
//             })
//             .addCase(fetchProducts.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.items = action.payload;
//                 state.error = null;
//             })
//             .addCase(fetchProducts.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.error.message || 'Failed to fetch products';
//                 state.items = [];
//             });
//     },
// });

// export default productSlice.reducer;





































// src/slices/productSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../utils/api';
import { RootState } from '../store';

export interface ProductState {
    items: any[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    items: [],
    loading: false,
    error: null,
};

// Selector to get a product by its ID
export const getProductById = (state: RootState, productId: string) => {
    return state.products.items.find((product) => product._id === productId);
};

// Fetch products, with optional filtering by minPrice and maxPrice
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async ({ minPrice, maxPrice }: { minPrice?: string; maxPrice?: string } = {}) => {
        const params: any = {};
        if (minPrice) params.minPrice = minPrice;
        if (maxPrice) params.maxPrice = maxPrice;

        const response = await axios.get('/products', { params });
        return response.data;
    }
);

// Add product
export const addProduct = createAsyncThunk('products/addProduct', async (product: any, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const userId = state.user.userDetails._id;
    const token = state.user.token;

    const response = await axios.post('/products', product, {
        params: { userId },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
});

// Update product
export const updateProduct = createAsyncThunk('products/updateProduct', async (product: any, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const token = state.user.token;
    const userId = state.user.userDetails._id;
    const response = await axios.put('/products', product.productData, {
        params: { productId: product.productId, userId },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
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
