import { customAxios } from '../utils/api';
import { toast } from 'react-toastify';
import { setToken, setUserDetails, clearUserState } from '../slices/userSlice';
import { AppDispatch } from '../store';

// Register a new user
export const registerUser = async (userData: any, dispatch: AppDispatch) => {
    try {
        // Make API call to register a new user
        const response = await customAxios.post('/auth/register', userData);

        // Store the token and update user details in the Redux store
        localStorage.setItem('token', response.data.token);
        dispatch(setToken(response.data.token));
        dispatch(setUserDetails(response.data.userDetails));

        // Show success notification
        toast.success('Registration successful!');
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || 'Registration failed.';

        // Show error notification
        toast.error(errorMessage);
        console.error('Registration error:', errorMessage);
    }
};

// Login user
export const loginUser = async (userData: any, dispatch: AppDispatch) => {
    try {
        // Make API call to log in the user
        const response = await customAxios.post('/auth/login', userData);

        // Store the token and update user details in the Redux store
        localStorage.setItem('token', response.data.token);
        dispatch(setToken(response.data.token));
        dispatch(setUserDetails(response.data.userDetails));

        // Show success notification
        toast.success('Login successful!');
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || 'Login failed.';

        // Show error notification
        toast.error(errorMessage);
        console.error('Login error:', errorMessage);
    }
};

// Update user details
export const updateUser = async (userData: any, token: string, dispatch: AppDispatch) => {
    try {
        // Make API call to update user profile
        const response = await customAxios.put('/auth/update', userData, {
            headers: { Authorization: `Bearer ${token}` },
        });

        // Update user details in the Redux store
        dispatch(setUserDetails(response.data?.user));

        // Show success notification
        toast.success('User details updated successfully!');
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || 'Update failed.';

        // Show error notification
        toast.error(errorMessage);
        console.error('Update error:', errorMessage);
    }
};

// Log out user
export const logoutUser = (dispatch: AppDispatch) => {
    // Remove the token from local storage and clear user state
    localStorage.removeItem('token');
    dispatch(clearUserState());

    // Show success notification
    toast.success('Logout successful!');
};
