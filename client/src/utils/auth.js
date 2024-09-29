// src/utils/auth.js

// Function to check if the user is authenticated
export const isAuthenticated = () => {
    // Get the token from localStorage
    const token = localStorage.getItem('token');

    // Return true if the token exists, otherwise false
    return token != null;
};
