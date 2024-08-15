// // src/services/authService.ts

// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { setToken } from '../slices/userSlice';
// import { AppDispatch } from '../store';

// export const registerUser = async (userData: any, dispatch: AppDispatch) => {
//     try {
//         const response = await axios.post('/api/auth/register', userData);
//         localStorage.setItem('token', response.data.token);
//         dispatch(setToken(response.data.token));
//         toast.success('Registration successful!');
//     } catch (error) {
//         toast.error('Registration failed.');
//     }
// };

// export const loginUser = async (userData: any, dispatch: AppDispatch) => {
//     try {
//         const response = await axios.post('/api/auth/login', userData);
//         localStorage.setItem('token', response.data.token);
//         dispatch(setToken(response.data.token));
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



















// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { setToken, setUserDetails } from '../slices/userSlice';
// import { AppDispatch } from '../store';

// export const registerUser = async (userData: any, dispatch: AppDispatch) => {
//     try {
//         const response = await axios.post('/api/auth/register', userData);
//         const { token, firstName, role } = response.data;
//         localStorage.setItem('token', token);
//         dispatch(setToken(token));
//         dispatch(setUserDetails({ firstName, role }));
//         toast.success('Registration successful!');
//     } catch (error) {
//         toast.error('Registration failed.');
//     }
// };

// export const loginUser = async (userData: any, dispatch: AppDispatch) => {
//     try {
//         const response = await axios.post('/api/auth/login', userData);
//         const { token, firstName, role } = response.data;
//         localStorage.setItem('token', token);
//         dispatch(setToken(token));
//         dispatch(setUserDetails({ firstName, role }));
//         toast.success('Login successful!');
//     } catch (error) {
//         toast.error('Login failed.');
//     }
// };

// export const logoutUser = (dispatch: AppDispatch) => {
//     localStorage.removeItem('token');
//     dispatch(setToken(''));
//     dispatch(setUserDetails({ firstName: '', role: '' }));
//     toast.success('Logged out successfully!');
// };









































import { axios } from '../utils/api';
import { toast } from 'react-toastify';
import { setToken, setFirstName } from '../slices/userSlice';
import { AppDispatch } from '../store';

export const registerUser = async (userData: any, dispatch: AppDispatch) => {
    try {
        const response = await axios.post('/auth/register', userData);
        localStorage.setItem('token', response.data.token);
        dispatch(setToken(response.data.token));
        toast.success('Registration successful!');
    } catch (error) {
        toast.error('Registration failed.');
    }
};

export const loginUser = async (userData: any, dispatch: AppDispatch) => {
    try {
        const response = await axios.post('/auth/login', userData);
        localStorage.setItem('token', response.data.token);
        dispatch(setToken(response.data.token));
        dispatch(setFirstName(response.data.firstName));
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
