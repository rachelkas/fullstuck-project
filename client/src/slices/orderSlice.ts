// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { customAxios } from '../utils/api';

// export const fetchOrders = createAsyncThunk('orders/fetchOrders', async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;

//     const response = await customAxios.get(`/orders?userId=${userId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//     });

//     return response.data;
// });

// export const fetchOrderById = createAsyncThunk('orders/fetchOrderById', async (orderId: string, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const token = state.user.token;

//     const response = await customAxios.get(`/orders/${orderId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//     });

//     return response.data;
// });

// const orderSlice = createSlice({
//     name: 'orders',
//     initialState: {
//         orders: [],
//         selectedOrder: null,
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//         builder.addCase(fetchOrders.fulfilled, (state, action) => {
//             state.orders = action.payload;
//         });
//         builder.addCase(fetchOrderById.fulfilled, (state, action) => {
//             state.selectedOrder = action.payload;
//         });
//     },
// });

// export default orderSlice.reducer;




























// src/slices/orderSlice.ts
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { customAxios } from '../utils/api';
// import { RootState } from '../store';

// interface OrderState {
//     orders: any[];
//     selectedOrder: any | null;
// }

// const initialState: OrderState = {
//     orders: [],
//     selectedOrder: null,
// };

// // Thunk to fetch all orders
// export const fetchOrders = createAsyncThunk('orders/fetchOrders', async (_, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;
//     const userId = state.user.userDetails._id;

//     const response = await customAxios.get(`/orders?userId=${userId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data;
// });

// // Thunk to fetch a specific order by ID
// export const fetchOrderById = createAsyncThunk('orders/fetchOrderById', async (orderId: string, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;
//     const token = state.user.token;

//     const response = await customAxios.get(`/orders/${orderId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data;
// });

// const orderSlice = createSlice({
//     name: 'order',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchOrders.fulfilled, (state, action) => {
//                 state.orders = action.payload;
//             })
//             .addCase(fetchOrderById.fulfilled, (state, action) => {
//                 state.selectedOrder = action.payload;
//             });
//     },
// });

// export default orderSlice.reducer;











































// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { customAxios } from '../utils/api';
// import { RootState } from '../store';

// interface OrderItem {
//     productId: {
//         _id: string;
//         productName: string;
//         price: number;
//     };
//     quantity: number;
//     price: number;
// }

// interface Order {
//     _id: string;
//     userId: string;
//     items: OrderItem[];
//     totalPrice: number;
//     createdAt: string;
// }

// interface OrderState {
//     orders: Order[];
//     selectedOrder: Order | null;
//     loading: boolean;
//     error: string | null;
// }

// const initialState: OrderState = {
//     orders: [],
//     selectedOrder: null,
//     loading: false,
//     error: null,
// };

// // Thunk to fetch all orders
// export const fetchOrders = createAsyncThunk('orders/fetchOrders', async (_, thunkAPI) => {
//     try {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         const userId = state.user.userDetails._id;

//         const response = await customAxios.get(`/orders?userId=${userId}`, {
//             headers: { Authorization: `Bearer ${token}` },
//         });
//         return response.data;
//     } catch (error: any) {
//         return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to fetch orders');
//     }
// });

// // Thunk to fetch a specific order by ID
// export const fetchOrderById = createAsyncThunk('orders/fetchOrderById', async (orderId: string, thunkAPI) => {
//     try {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;

//         const response = await customAxios.get(`/orders/${orderId}`, {
//             headers: { Authorization: `Bearer ${token}` },
//         });
//         return response.data;
//     } catch (error: any) {
//         return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to fetch the order');
//     }
// });

// const orderSlice = createSlice({
//     name: 'order',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchOrders.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(fetchOrders.fulfilled, (state, action) => {
//                 state.orders = action.payload;
//                 state.loading = false;
//             })
//             .addCase(fetchOrders.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload as string;
//             })
//             .addCase(fetchOrderById.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(fetchOrderById.fulfilled, (state, action) => {
//                 state.selectedOrder = action.payload;
//                 state.loading = false;
//             })
//             .addCase(fetchOrderById.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload as string;
//             });
//     },
// });

// export default orderSlice.reducer;











































// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { customAxios } from '../utils/api';
// import { RootState } from '../store';

// interface OrderItem {
//     productId: {
//         _id: string;
//         productName: string;
//         price: number;
//     };
//     quantity: number;
//     price: number;
// }

// interface Order {
//     _id: string;
//     userId: string;
//     items: OrderItem[];
//     totalPrice: number;
//     createdAt: string;
// }

// interface OrderState {
//     orders: Order[];
//     selectedOrder: Order | null;
//     loading: boolean;
//     error: string | null;
// }

// const initialState: OrderState = {
//     orders: [],
//     selectedOrder: null,
//     loading: false,
//     error: null,
// };

// // Thunk to fetch all orders
// // export const fetchOrders = createAsyncThunk('orders/fetchOrders', async (_, thunkAPI) => {
// //     try {
// //         const state = thunkAPI.getState() as RootState;
// //         const token = state.user.token;
// //         const userId = state.user.userDetails._id;

// //         const response = await customAxios.get(`/orders?userId=${userId}`, {
// //             headers: { Authorization: `Bearer ${token}` },
// //         });
// //         return response.data;
// //     } catch (error: any) {
// //         return thunkAPI.rejectWithValue(
// //             error.response?.data?.message || 'Failed to fetch orders'
// //         );
// //     }
// // });


// export const fetchOrders = createAsyncThunk('orders/fetchOrders', async (_, thunkAPI) => {
//     try {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         const userId = state.user.userDetails._id;

//         console.log('Fetching orders for user:', userId, 'with token:', token); // Log token and userId

//         const response = await customAxios.get(`/orders?userId=${userId}`, {
//             headers: { Authorization: `Bearer ${token}` },
//         });
//         return response.data;
//     } catch (error: any) {
//         console.error('Error fetching orders:', error); // Log errors
//         return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to fetch orders');
//     }
// });

// // Thunk to fetch a specific order by ID
// export const fetchOrderById = createAsyncThunk('orders/fetchOrderById', async (orderId: string, thunkAPI) => {
//     try {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;

//         const response = await customAxios.get(`/orders/${orderId}`, {
//             headers: { Authorization: `Bearer ${token}` },
//         });
//         return response.data;
//     } catch (error: any) {
//         return thunkAPI.rejectWithValue(
//             error.response?.data?.message || 'Failed to fetch the order'
//         );
//     }
// });

// const orderSlice = createSlice({
//     name: 'order',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             // Fetch Orders
//             .addCase(fetchOrders.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(fetchOrders.fulfilled, (state, action) => {
//                 state.orders = action.payload;
//                 state.loading = false;
//             })
//             .addCase(fetchOrders.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload as string;
//             })

//             // Fetch Specific Order by ID
//             .addCase(fetchOrderById.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(fetchOrderById.fulfilled, (state, action) => {
//                 state.selectedOrder = action.payload;
//                 state.loading = false;
//             })
//             .addCase(fetchOrderById.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload as string;
//             });
//     },
// });

// export default orderSlice.reducer;






































// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { customAxios } from '../utils/api';
// import { RootState } from '../store';

// interface OrderItem {
//     productId: {
//         _id: string;
//         productName: string;
//         price: number;
//     };
//     quantity: number;
//     price: number;
// }

// interface Order {
//     _id: string;
//     userId: string;
//     items: OrderItem[];
//     totalPrice: number;
//     createdAt: string;
// }

// interface OrderState {
//     orders: Order[];
//     selectedOrder: Order | null;
//     loading: boolean;
//     error: string | null;
// }

// const initialState: OrderState = {
//     orders: [],
//     selectedOrder: null,
//     loading: false,
//     error: null,
// };

// // Thunk to fetch all orders
// export const fetchOrders = createAsyncThunk('orders/fetchOrders', async (_, thunkAPI) => {
//     try {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         const userId = state.user.userDetails._id;

//         console.log('Fetching orders for user:', userId, 'with token:', token); // Log token and userId

//         const response = await customAxios.get(`/orders?userId=${userId}`, {
//             headers: { Authorization: `Bearer ${token}` },
//         });
//         return response.data;
//     } catch (error: any) {
//         console.error('Error fetching orders:', error); // Log errors
//         return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to fetch orders');
//     }
// });

// // Thunk to fetch a specific order by ID
// export const fetchOrderById = createAsyncThunk('orders/fetchOrderById', async (orderId: string, thunkAPI) => {
//     try {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;

//         const response = await customAxios.get(`/orders/${orderId}`, {
//             headers: { Authorization: `Bearer ${token}` },
//         });
//         return response.data;
//     } catch (error: any) {
//         return thunkAPI.rejectWithValue(
//             error.response?.data?.message || 'Failed to fetch the order'
//         );
//     }
// });

// const orderSlice = createSlice({
//     name: 'order',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             // Fetch Orders
//             .addCase(fetchOrders.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(fetchOrders.fulfilled, (state, action) => {
//                 state.orders = action.payload;
//                 state.loading = false;
//             })
//             .addCase(fetchOrders.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload as string;
//             })

//             // Fetch Specific Order by ID
//             .addCase(fetchOrderById.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(fetchOrderById.fulfilled, (state, action) => {
//                 state.selectedOrder = action.payload;
//                 state.loading = false;
//             })
//             .addCase(fetchOrderById.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload as string;
//             });
//     },
// });

// export default orderSlice.reducer;



































// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { customAxios } from '../utils/api';
// import { RootState } from '../store';

// interface OrderItem {
//     productId: {
//         _id: string;
//         productName: string;
//         price: number;
//     };
//     quantity: number;
//     price: number;
// }

// interface Order {
//     _id: string;
//     userId: string;
//     items: OrderItem[];
//     totalPrice: number;
//     createdAt: string;
// }

// interface OrderState {
//     orders: Order[];
//     selectedOrder: Order | null;
//     loading: boolean;
//     error: string | null;
// }

// const initialState: OrderState = {
//     orders: [],
//     selectedOrder: null,
//     loading: false,
//     error: null,
// };

// // Thunk to fetch all orders
// export const fetchOrders = createAsyncThunk('orders/fetchOrders', async (_, thunkAPI) => {
//     try {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;
//         const userId = state.user.userDetails._id;

//         // Add logging for debugging
//         console.log('Fetching orders for user:', userId, 'with token:', token);

//         const response = await customAxios.get(`/orders?userId=${userId}`, {
//             headers: { Authorization: `Bearer ${token}` },
//         });

//         console.log('Orders fetched successfully:', response.data);

//         return response.data;
//     } catch (error: any) {
//         console.error('Error fetching orders:', error.response?.data?.message || error.message);
//         return thunkAPI.rejectWithValue(
//             error.response?.data?.message || 'Failed to fetch orders'
//         );
//     }
// });

// // Thunk to fetch a specific order by ID
// export const fetchOrderById = createAsyncThunk('orders/fetchOrderById', async (orderId: string, thunkAPI) => {
//     try {
//         const state = thunkAPI.getState() as RootState;
//         const token = state.user.token;

//         // Add logging for debugging
//         console.log('Fetching order with ID:', orderId, 'and token:', token);

//         const response = await customAxios.get(`/orders/${orderId}`, {
//             headers: { Authorization: `Bearer ${token}` },
//         });

//         console.log('Order details fetched successfully:', response.data);

//         return response.data;
//     } catch (error: any) {
//         console.error('Error fetching order details:', error.response?.data?.message || error.message);
//         return thunkAPI.rejectWithValue(
//             error.response?.data?.message || 'Failed to fetch the order'
//         );
//     }
// });

// const orderSlice = createSlice({
//     name: 'order',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             // Fetch Orders
//             .addCase(fetchOrders.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(fetchOrders.fulfilled, (state, action) => {
//                 state.orders = action.payload;
//                 state.loading = false;
//             })
//             .addCase(fetchOrders.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload as string;
//             })

//             // Fetch Specific Order by ID
//             .addCase(fetchOrderById.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(fetchOrderById.fulfilled, (state, action) => {
//                 state.selectedOrder = action.payload;
//                 state.loading = false;
//             })
//             .addCase(fetchOrderById.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload as string;
//             });
//     },
// });

// export default orderSlice.reducer;




































import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { customAxios } from '../utils/api';
import { RootState } from '../store';

interface OrderItem {
    productId: {
        _id: string;
        productName: string;
        price: number;
    };
    quantity: number;
    price: number;
}

interface Order {
    _id: string;
    userId: string;
    items: OrderItem[];
    totalPrice: number;
    createdAt: string;
}

interface OrderState {
    orders: Order[];
    selectedOrder: Order | null;
    loading: boolean;
    error: string | null;
}

const initialState: OrderState = {
    orders: [],
    selectedOrder: null,
    loading: false,
    error: null,
};

// Thunk to fetch all orders for the current user
export const fetchOrders = createAsyncThunk('orders/fetchOrders', async (_, thunkAPI) => {
    try {
        const state = thunkAPI.getState() as RootState;
        const token = state.user.token;
        const userId = state.user.userDetails._id;

        // Log for debugging purpose
        console.log('Fetching orders for user:', userId, 'with token:', token);

        // Request to get all orders for the authenticated user
        const response = await customAxios.get(`/orders?userId=${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
        });

        console.log('Orders fetched successfully:', response.data);
        return response.data;  // Return the fetched orders
    } catch (error: any) {
        console.error('Error fetching orders:', error.response?.data?.message || error.message);
        return thunkAPI.rejectWithValue(
            error.response?.data?.message || 'Failed to fetch orders'
        );
    }
});

// Thunk to fetch a specific order by its ID
export const fetchOrderById = createAsyncThunk('orders/fetchOrderById', async (orderId: string, thunkAPI) => {
    try {
        const state = thunkAPI.getState() as RootState;
        const token = state.user.token;

        // Log for debugging purpose
        console.log('Fetching order with ID:', orderId, 'and token:', token);

        // Request to get a specific order by its ID
        const response = await customAxios.get(`/orders/${orderId}`, {
            headers: { Authorization: `Bearer ${token}` },
        });

        console.log('Order details fetched successfully:', response.data);
        return response.data;  // Return the fetched order
    } catch (error: any) {
        console.error('Error fetching order details:', error.response?.data?.message || error.message);
        return thunkAPI.rejectWithValue(
            error.response?.data?.message || 'Failed to fetch the order'
        );
    }
});

// Create a slice for managing orders (fetching, selecting, etc.)
const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Fetch all orders
        builder
            .addCase(fetchOrders.pending, (state) => {
                state.loading = true;  // Set loading state to true when fetching
                state.error = null;  // Clear any previous error
            })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.orders = action.payload;  // Store the fetched orders in the state
                state.loading = false;  // Set loading to false after fetching
            })
            .addCase(fetchOrders.rejected, (state, action) => {
                state.loading = false;  // Set loading to false if the fetch fails
                state.error = action.payload as string;  // Set the error message
            })

            // Fetch specific order by ID
            .addCase(fetchOrderById.pending, (state) => {
                state.loading = true;  // Set loading state to true
                state.error = null;  // Clear any previous error
            })
            .addCase(fetchOrderById.fulfilled, (state, action) => {
                state.selectedOrder = action.payload;  // Store the selected order in the state
                state.loading = false;  // Set loading to false after fetching
            })
            .addCase(fetchOrderById.rejected, (state, action) => {
                state.loading = false;  // Set loading to false if the fetch fails
                state.error = action.payload as string;  // Set the error message
            });
    },
});

export default orderSlice.reducer;
