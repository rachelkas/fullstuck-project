export const isAuthenticated = () => {
    const token = localStorage.getItem('auth-token');
    return token != null;
};