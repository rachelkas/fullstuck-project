import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../utils/api';
import { RootState } from '../store';

export interface ProductState {
    items: any[];  // Array to hold product items
    loading: boolean;  // Loading state to track fetch requests
    error: string | null;  // To capture error messages
}

const initialState: ProductState = {
    items: [],  // Initial product list is empty
    loading: false,  // Initial loading state is false
    error: null,  // No initial error
};

// Selector to get a product by its ID
export const getProductById = (state: RootState, productId: string) => {
    return state.products.items.find((product) => product._id === productId);  // Find product by its ID
};

// Thunk to fetch products with optional price range filtering
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async ({ minPrice, maxPrice }: { minPrice?: string; maxPrice?: string } = {}) => {
        const params: any = {};
        if (minPrice) params.minPrice = minPrice;  // Set minimum price if provided
        if (maxPrice) params.maxPrice = maxPrice;  // Set maximum price if provided

        // Fetch products with optional filters applied
        const response = await axios.get('/products', { params });
        return response.data;  // Return the fetched products
    }
);

// Thunk to add a new product (admin only)
export const addProduct = createAsyncThunk('products/addProduct', async (product: any, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const userId = state.user.userDetails._id;
    const token = state.user.token;

    // Send a request to add a new product with admin credentials
    const response = await axios.post('/products', product, {
        params: { userId },
        headers: {
            Authorization: `Bearer ${token}`,  // Include JWT token for authentication
        },
    });
    return response.data;  // Return the added product
});

// Thunk to update a product (admin only)
export const updateProduct = createAsyncThunk('products/updateProduct', async (product: any, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const token = state.user.token;
    const userId = state.user.userDetails._id;

    // Send a request to update the product
    const response = await axios.put('/products', product.productData, {
        params: { productId: product.productId, userId },
        headers: {
            Authorization: `Bearer ${token}`,  // Include JWT token for authentication
        },
    });
    return response.data;  // Return the updated product
});

// Thunk to delete a product (admin only)
export const deleteProduct = createAsyncThunk('products/deleteProduct', async (productId: string, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const token = state.user.token;

    try {
        // Send a request to delete the product
        await axios.delete(`/products/${productId}`, {
            headers: {
                Authorization: `Bearer ${token}`,  // Include JWT token for authentication
            },
        });
        return productId;  // Return the deleted product ID to remove it from state
    } catch (error: any) {
        console.error('Error deleting product:', error);  // Log error details
        return thunkAPI.rejectWithValue(error.response?.data || 'Failed to delete product');  // Handle error
    }
});

// Create the product slice with reducers for handling the product state
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch products
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;  // Set loading to true when fetching starts
                state.error = null;  // Clear any previous error
                state.items = [];  // Clear existing products during fetch
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;  // Set loading to false after fetch completes
                state.items = action.payload;  // Store the fetched products in state
                state.error = null;  // Clear any error
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;  // Set loading to false if fetch fails
                state.error = action.error.message || 'Failed to fetch products';  // Capture the error
                state.items = [];  // Clear the product list
            })
            // Handle product deletion
            .addCase(deleteProduct.fulfilled, (state, action) => {
                // Remove the deleted product from the state by filtering it out
                state.items = state.items.filter((product) => product._id !== action.payload);
                state.error = null;  // Clear any error
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.error = action.payload as string || 'Failed to delete product';  // Capture the error message
            });
    },
});

export default productSlice.reducer;
