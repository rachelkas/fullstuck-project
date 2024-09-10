// import { customAxios } from '../utils/api';
// import { toast } from 'react-toastify';
// import { setToken, setUserDetails } from '../slices/userSlice';
// import { AppDispatch } from '../store';

// export const registerUser = async (userData: any, dispatch: AppDispatch) => {
//     try {
//         const response = await customAxios.post('/auth/register', userData);
//         localStorage.setItem('token', response.data.token);
//         dispatch(setToken(response.data.token));
//         toast.success('Registration successful!');
//     } catch (error) {
//         toast.error('Registration failed.');
//     }
// };

// export const loginUser = async (userData: any, dispatch: AppDispatch) => {
//     try {
//         const response = await customAxios.post('/auth/login', userData);
//         localStorage.setItem('token', response.data.token);
//         dispatch(setToken(response.data.token));
//         dispatch(setUserDetails(response.data.userDetails));
//         toast.success('Login successful!');
//     } catch (error) {
//         toast.error('Login failed.');
//     }
// };

// export const logoutUser = (dispatch: AppDispatch) => {
//     localStorage.removeItem('token');
//     dispatch(setToken(null));
//     toast.success('Logged out successfully!');
// };






















// import { customAxios } from '../utils/api';
// import { toast } from 'react-toastify';
// import { setToken, setUserDetails, clearUserState } from '../slices/userSlice';
// import { AppDispatch } from '../store';

// export const registerUser = async (userData: any, dispatch: AppDispatch) => {
//     try {
//         const response = await customAxios.post('/auth/register', userData);
//         localStorage.setItem('token', response.data.token);
//         dispatch(setToken(response.data.token));
//         dispatch(setUserDetails(response.data.userDetails));
//         toast.success('Registration successful!');
//     } catch (error) {
//         toast.error('Registration failed.');
//     }
// };

// export const loginUser = async (userData: any, dispatch: AppDispatch) => {
//     try {
//         const response = await customAxios.post('/auth/login', userData);
//         localStorage.setItem('token', response.data.token);
//         dispatch(setToken(response.data.token));
//         dispatch(setUserDetails(response.data.userDetails));
//         toast.success('Login successful!');
//     } catch (error) {
//         toast.error('Login failed.');
//     }
// };

// export const logoutUser = (dispatch: AppDispatch) => {
//     localStorage.removeItem('token');
//     dispatch(clearUserState());  // Clear the entire user state
//     toast.success('Logged out successfully!');
// };







































// import { customAxios } from '../utils/api';
// import { toast } from 'react-toastify';
// import { setToken, setUserDetails, clearUserState } from '../slices/userSlice';
// import { AppDispatch } from '../store';

// export const registerUser = async (userData: any, dispatch: AppDispatch) => {
//     try {
//         const response = await customAxios.post('/auth/register', userData);
//         localStorage.setItem('token', response.data.token);
//         dispatch(setToken(response.data.token));
//         dispatch(setUserDetails(response.data.userDetails));
//         toast.success('Registration successful!');
//     } catch (error) {
//         toast.error('Registration failed.');
//     }
// };

// export const loginUser = async (userData: any, dispatch: AppDispatch) => {
//     try {
//         const response = await customAxios.post('/auth/login', userData);
//         localStorage.setItem('token', response.data.token);
//         dispatch(setToken(response.data.token));
//         dispatch(setUserDetails(response.data.userDetails));
//         toast.success('Login successful!');
//     } catch (error) {
//         toast.error('Login failed.');
//     }
// };

// export const logoutUser = (dispatch: AppDispatch) => {
//     localStorage.removeItem('token');
//     dispatch(clearUserState());  // Clear the entire user state
//     toast.success('Logged out successfully!');
// };















// import { customAxios } from '../utils/api';
// import { toast } from 'react-toastify';
// import { setToken, setUserDetails, clearUserState } from '../slices/userSlice';
// import { AppDispatch } from '../store';

// export const registerUser = async (userData: any, dispatch: AppDispatch) => {
//     try {
//         const response = await customAxios.post('/auth/register', userData);
//         localStorage.setItem('token', response.data.token);
//         dispatch(setToken(response.data.token));
//         dispatch(setUserDetails(response.data.userDetails));
//         toast.success('Registration successful!');
//     } catch (error) {
//         toast.error('Registration failed.');
//     }
// };

// export const loginUser = async (userData: any, dispatch: AppDispatch) => {
//     try {
//         const response = await customAxios.post('/auth/login', userData);
//         localStorage.setItem('token', response.data.token);
//         dispatch(setToken(response.data.token));
//         dispatch(setUserDetails(response.data.userDetails));
//         toast.success('Login successful!');
//     } catch (error) {
//         toast.error('Login failed.');
//     }
// };

// export const updateUser = async (userData: any, dispatch: AppDispatch) => {
//     try {
//         const token = localStorage.getItem('token');
//         const response = await customAxios.put('/auth/update', userData, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         dispatch(setUserDetails(response.data));
//         toast.success('Profile updated successfully!');
//     } catch (error) {
//         toast.error('Update failed.');
//         throw error; // rethrow the error to see it in the console
//     }
// };

// export const logoutUser = (dispatch: AppDispatch) => {
//     localStorage.removeItem('token');
//     dispatch(clearUserState());  // Clear the entire user state
//     toast.success('Logged out successfully!');
// };












































// import { customAxios } from '../utils/api';
// import { toast } from 'react-toastify';
// import { setToken, setUserDetails, clearUserState } from '../slices/userSlice';
// import { AppDispatch } from '../store';

// // Register user
// export const registerUser = async (userData: any, dispatch: AppDispatch) => {
//     try {
//         const response = await customAxios.post('/auth/register', userData);
//         localStorage.setItem('token', response.data.token);
//         dispatch(setToken(response.data.token));
//         dispatch(setUserDetails(response.data.userDetails));
//         toast.success('Registration successful!');
//     } catch (error: any) {
//         const errorMessage = error.response?.data?.message || 'Registration failed.';
//         toast.error(errorMessage);
//         console.error('Registration error:', errorMessage);
//     }
// };

// // Login user
// export const loginUser = async (userData: any, dispatch: AppDispatch) => {
//     try {
//         const response = await customAxios.post('/auth/login', userData);
//         localStorage.setItem('token', response.data.token);
//         dispatch(setToken(response.data.token));
//         dispatch(setUserDetails(response.data.userDetails));
//         toast.success('Login successful!');
//     } catch (error: any) {
//         const errorMessage = error.response?.data?.message || 'Login failed.';
//         toast.error(errorMessage);
//         console.error('Login error:', errorMessage);
//     }
// };

// // Update user profile
// export const updateUser = async (userData: any, dispatch: AppDispatch) => {
//     try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//             toast.error('No token found. Please log in again.');
//             throw new Error('No token found.');
//         }

//         const response = await customAxios.put('/auth/update', userData, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         dispatch(setUserDetails(response.data));
//         toast.success('Profile updated successfully!');
//     } catch (error: any) {
//         const errorMessage = error.response?.data?.message || 'Update failed.';
//         toast.error(errorMessage);
//         console.error('Update profile error:', errorMessage);
//     }
// };



// // Logout user
// export const logoutUser = (dispatch: AppDispatch) => {
//     localStorage.removeItem('token');
//     dispatch(clearUserState());
//     toast.success('Logged out successfully!');
// };




































import { customAxios } from '../utils/api';
import { toast } from 'react-toastify';
import { setToken, setUserDetails, clearUserState } from '../slices/userSlice';
import { AppDispatch } from '../store';

// Register user
export const registerUser = async (userData: any, dispatch: AppDispatch) => {
    try {
        const response = await customAxios.post('/auth/register', userData);
        localStorage.setItem('token', response.data.token);
        dispatch(setToken(response.data.token));
        dispatch(setUserDetails(response.data.userDetails));
        toast.success('Registration successful!');
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || 'Registration failed.';
        toast.error(errorMessage);
        console.error('Registration error:', errorMessage);
    }
};

// Login user
export const loginUser = async (userData: any, dispatch: AppDispatch) => {
    try {
        const response = await customAxios.post('/auth/login', userData);
        localStorage.setItem('token', response.data.token);  // Save token in localStorage
        dispatch(setToken(response.data.token));
        dispatch(setUserDetails(response.data.userDetails));
        toast.success('Login successful!');
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || 'Login failed.';
        toast.error(errorMessage);
        console.error('Login error:', errorMessage);
    }
};

// Update user details
export const updateUser = async (userData: any, token: string, dispatch: AppDispatch) => {
    try {
        const response = await customAxios.put('/auth/update', userData, {
            headers: { Authorization: `Bearer ${token}` }
        });
        dispatch(setUserDetails(response.data.updatedUser));
        toast.success('User details updated successfully!');
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || 'Update failed.';
        toast.error(errorMessage);
        console.error('Update error:', errorMessage);
    }
};

// Logout user
export const logoutUser = (dispatch: AppDispatch) => {
    localStorage.removeItem('token');
    dispatch(clearUserState());
    toast.success('Logout successful!');
};
