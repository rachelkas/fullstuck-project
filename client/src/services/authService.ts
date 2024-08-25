import { customAxios } from '../utils/api';
import { toast } from 'react-toastify';
import { setToken, setUserDetails } from '../slices/userSlice';
import { AppDispatch } from '../store';

export const registerUser = async (userData: any, dispatch: AppDispatch) => {
    try {
        const response = await customAxios.post('/auth/register', userData);
        localStorage.setItem('token', response.data.token);
        dispatch(setToken(response.data.token));
        toast.success('Registration successful!');
    } catch (error) {
        toast.error('Registration failed.');
    }
};

export const loginUser = async (userData: any, dispatch: AppDispatch) => {
    try {
        const response = await customAxios.post('/auth/login', userData);
        localStorage.setItem('token', response.data.token);
        dispatch(setToken(response.data.token));
        dispatch(setUserDetails(response.data.userDetails));
        toast.success('Login successful!');
    } catch (error) {
        toast.error('Login failed.');
    }
};

export const logoutUser = (dispatch: AppDispatch) => {
    localStorage.removeItem('token');
    dispatch(setToken(null));
    toast.success('Logged out successfully!');
};
