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
//     async ({ minPrice, maxPrice }: { minPrice?: string; maxPrice?: string } = {}) => {
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

// //thunk to delete a product only by admin
// export const deleteProduct = createAsyncThunk('products/deleteProduct', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;

//     try {
//         // The URL should use the productId in the path, not in params
//         await axios.delete(`/products/${productId}`, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         return productId; // Return the product ID so we can remove it from state
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
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
//     async ({ minPrice, maxPrice }: { minPrice?: string; maxPrice?: string } = {}) => {
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

// // Thunk to delete a product only by admin
// export const deleteProduct = createAsyncThunk('products/deleteProduct', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;

//     try {
//         // The URL should use the productId in the path, not in params
//         await axios.delete(`/products/${productId}`, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         return productId; // Return the product ID so we can remove it from state
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
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
//             })
//             // Handle product deletion
//             .addCase(deleteProduct.fulfilled, (state, action) => {
//                 state.items = state.items.filter((product) => product._id !== action.payload);
//                 state.error = null;
//             })
//             .addCase(deleteProduct.rejected, (state, action) => {
//                 state.error = action.payload || 'Failed to delete product';
//             });
//     },
// });

// export default productSlice.reducer;





































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
//     async ({ minPrice, maxPrice }: { minPrice?: string; maxPrice?: string } = {}) => {
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

// // Thunk to delete a product only by admin
// export const deleteProduct = createAsyncThunk('products/deleteProduct', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;


//     try {
//         // The URL should use the productId in the path, not in params
//         await axios.delete(`/products/${productId}`, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         return productId; // Return the product ID so we can remove it from state
//     } catch (error: any) {
//         console.error('Error deleting product:', error); // Log the error details
//         return thunkAPI.rejectWithValue(error.response?.data || 'Failed to delete product');
//     }
// });

// const productSlice = createSlice({
//     name: 'products',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             // Fetch Products
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
//             })
//             // Delete Product
//             .addCase(deleteProduct.fulfilled, (state, action) => {
//                 state.items = state.items.filter((product) => product._id !== action.payload);
//                 state.error = null;
//             })
//             .addCase(deleteProduct.rejected, (state, action) => {
//                 state.error = action.payload as string || 'Failed to delete product';
//             });
//     },
// });

// export default productSlice.reducer;





















































// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from '../utils/api';
// import { RootState } from '../store';

// export interface ProductState {
//     items: any[];
//     loading: boolean;
//     error: string | null;
// }

// const initialState: ProductState = {
//     items: [],  // List of products
//     loading: false,  // Loading state for fetching products
//     error: null,  // Error message if product fetching fails
// };

// // Selector to get a product by its ID
// export const getProductById = (state: RootState, productId: string) => {
//     return state.products.items.find((product) => product._id === productId);
// };

// // Thunk to fetch products with optional price range filtering
// export const fetchProducts = createAsyncThunk(
//     'products/fetchProducts',
//     async ({ minPrice, maxPrice }: { minPrice?: string; maxPrice?: string } = {}) => {
//         const params: any = {};
//         if (minPrice) params.minPrice = minPrice;  // Set minimum price if provided
//         if (maxPrice) params.maxPrice = maxPrice;  // Set maximum price if provided

//         // Fetch products from the API with optional filters
//         const response = await axios.get('/products', { params });
//         return response.data;  // Return the product data
//     }
// );

// // Thunk to add a new product (admin-only functionality)
// export const addProduct = createAsyncThunk('products/addProduct', async (product: any, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const userId = state.user.userDetails._id;
//     const token = state.user.token;

//     // Send a POST request to add a new product
//     const response = await axios.post('/products', product, {
//         params: { userId },
//         headers: {
//             Authorization: `Bearer ${token}`,  // Include JWT token in the request header
//         },
//     });
//     return response.data;  // Return the added product
// });

// // Thunk to update a product (admin-only functionality)
// export const updateProduct = createAsyncThunk('products/updateProduct', async (product: any, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;

//     // Send a PUT request to update the product
//     const response = await axios.put('/products', product.productData, {
//         params: { productId: product.productId, userId },
//         headers: {
//             Authorization: `Bearer ${token}`,  // Include JWT token in the request header
//         },
//     });
//     return response.data;  // Return the updated product data
// });

// // Thunk to delete a product (admin-only functionality)
// export const deleteProduct = createAsyncThunk('products/deleteProduct', async (productId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;

//     try {
//         // Send a DELETE request to remove the product
//         await axios.delete(`/products/${productId}`, {
//             headers: {
//                 Authorization: `Bearer ${token}`,  // Include JWT token in the request header
//             },
//         });
//         return productId;  // Return the product ID for removal from the state
//     } catch (error: any) {
//         console.error('Error deleting product:', error);  // Log error details
//         return thunkAPI.rejectWithValue(error.response?.data || 'Failed to delete product');
//     }
// });

// // Create a slice for managing product state
// const productSlice = createSlice({
//     name: 'products',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             // Fetch Products
//             .addCase(fetchProducts.pending, (state) => {
//                 state.loading = true;  // Set loading to true while fetching
//                 state.error = null;  // Clear previous errors
//                 state.items = [];  // Clear product list before fetching
//             })
//             .addCase(fetchProducts.fulfilled, (state, action) => {
//                 state.loading = false;  // Stop loading when fetch is successful
//                 state.items = action.payload;  // Store fetched products in the state
//                 state.error = null;  // Clear any errors
//             })
//             .addCase(fetchProducts.rejected, (state, action) => {
//                 state.loading = false;  // Stop loading if fetch fails
//                 state.error = action.error.message || 'Failed to fetch products';  // Set error message
//                 state.items = [];  // Clear products if fetch fails
//             })

//             // Delete Product
//             .addCase(deleteProduct.fulfilled, (state, action) => {
//                 state.items = state.items.filter((product) => product._id !== action.payload);  // Remove deleted product from state
//                 state.error = null;  // Clear any errors
//             })
//             .addCase(deleteProduct.rejected, (state, action) => {
//                 state.error = action.payload as string || 'Failed to delete product';  // Set error message if delete fails
//             });
//     },
// });

// export default productSlice.reducer;









































































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
