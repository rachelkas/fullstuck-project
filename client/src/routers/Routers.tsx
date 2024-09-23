// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import MainLayout from '../components/layouts/MainLayout';
// import HomePage from '../pages/HomePage';
// import CartPage from '../pages/CartPage';
// import ContactUsPage from '../pages/ContactUsPage';
// import FavoritePage from '../pages/FavoritePage';
// import AuthPage from '../pages/AuthPage';
// import SearchResultsPage from '../pages/SearchResultsPage';
// import AddProductPage from '../pages/AddProductPage';
// import ProtectedRoute from '../components/ProtectedRoute';
// import OrderSummaryPage from '../pages/OrderSummaryPage';
// import EditProductPage from '../pages/EditProductPage';

// const Routers = () => {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 {/* Public Routes with Nav */}
//                 <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
//                 <Route path="/contactUs" element={<MainLayout><ContactUsPage /></MainLayout>} />
//                 <Route path="/log-in" element={<MainLayout><AuthPage /></MainLayout>} />
//                 <Route path="/search" element={<MainLayout><SearchResultsPage /></MainLayout>} />

//                 {/* Admin Protected Routes */}
//                 <Route path="/add-product" element={<ProtectedRoute element={<MainLayout><AddProductPage /></MainLayout>} adminOnly={true} />} />
//                 <Route path="/edit-product/:productId" element={<ProtectedRoute element={<MainLayout><EditProductPage /></MainLayout>} adminOnly={true} />} />

//                 {/* Protected Routes with Nav */}
//                 <Route path="/cart" element={<ProtectedRoute element={<MainLayout><CartPage /></MainLayout>} />} />
//                 <Route path="/favorite" element={<ProtectedRoute element={<MainLayout><FavoritePage /></MainLayout>} />} />

//                 {/* Order Summary Route without Nav */}
//                 <Route path="/order-summary" element={<ProtectedRoute element={<OrderSummaryPage />} />} />
//             </Routes>
//         </BrowserRouter>
//     );
// };

// export default Routers;





















// import React from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import MainLayout from '../components/layouts/MainLayout';
// import HomePage from '../pages/HomePage';
// import CartPage from '../pages/CartPage';
// import ContactUsPage from '../pages/ContactUsPage';
// import FavoritePage from '../pages/FavoritePage';
// import AuthPage from '../pages/AuthPage';
// import SearchResultsPage from '../pages/SearchResultsPage';
// import AddProductPage from '../pages/AddProductPage';
// import ProtectedRoute from '../components/ProtectedRoute';
// import OrderSummaryPage from '../pages/OrderSummaryPage';
// import EditProductPage from '../pages/EditProductPage';
// import { useAppDispatch } from '../store';
// import { logoutUser } from '../services/authService';
// import UpdateProfilePage from '../pages/UpdateProfilePage';

// const Routers = () => {
//     const dispatch = useAppDispatch();

//     const handleLogout = () => {
//         logoutUser(dispatch);
//         return <Navigate to="/log-in" />;
//     };

//     return (
//         <BrowserRouter>
//             <Routes>
//                 {/* Public Routes with Nav */}
//                 <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
//                 <Route path="/contactUs" element={<MainLayout><ContactUsPage /></MainLayout>} />
//                 <Route path="/log-in" element={<MainLayout><AuthPage /></MainLayout>} />
//                 <Route path="/search" element={<MainLayout><SearchResultsPage /></MainLayout>} />
//                 <Route path="/update-profile" element={<MainLayout><UpdateProfilePage /></MainLayout>} />

//                 {/* Admin Protected Routes */}
//                 <Route path="/add-product" element={<ProtectedRoute element={<MainLayout><AddProductPage /></MainLayout>} adminOnly={true} />} />
//                 <Route path="/edit-product/:productId" element={<ProtectedRoute element={<MainLayout><EditProductPage /></MainLayout>} adminOnly={true} />} />

//                 {/* Protected Routes with Nav */}
//                 <Route path="/cart" element={<ProtectedRoute element={<MainLayout><CartPage /></MainLayout>} />} />
//                 <Route path="/favorite" element={<ProtectedRoute element={<MainLayout><FavoritePage /></MainLayout>} />} />

//                 {/* Order Summary Route without Nav */}
//                 <Route path="/order-summary" element={<ProtectedRoute element={<OrderSummaryPage />} />} />

//                 {/* Logout Route */}
//                 <Route path="/logout" element={handleLogout()} />
//             </Routes>
//         </BrowserRouter>
//     );
// };

// export default Routers;
























// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import MainLayout from '../components/layouts/MainLayout';
// import HomePage from '../pages/HomePage';
// import CartPage from '../pages/CartPage';
// import ContactUsPage from '../pages/ContactUsPage';
// import FavoritePage from '../pages/FavoritePage';
// import AuthPage from '../pages/AuthPage';
// import SearchResultsPage from '../pages/SearchResultsPage';
// import AddProductPage from '../pages/AddProductPage';
// import ProtectedRoute from '../components/ProtectedRoute';
// import OrderSummaryPage from '../pages/OrderSummaryPage';
// import EditProductPage from '../pages/EditProductPage';
// import UpdateProfilePage from '../pages/UpdateProfilePage';

// const Routers = () => {
//     const [minPrice, setMinPrice] = useState('');
//     const [maxPrice, setMaxPrice] = useState('');

//     const onResetFilters = () => {
//         setMinPrice('');
//         setMaxPrice('');
//     };

//     return (
//         <BrowserRouter>
//             <Routes>
//                 {/* Public Routes with Nav */}
//                 <Route path="/" element={<MainLayout onResetFilters={onResetFilters}><HomePage /></MainLayout>} />
//                 <Route path="/contactUs" element={<MainLayout onResetFilters={onResetFilters}><ContactUsPage /></MainLayout>} />
//                 <Route path="/log-in" element={<MainLayout onResetFilters={onResetFilters}><AuthPage /></MainLayout>} />
//                 <Route path="/search" element={<MainLayout onResetFilters={onResetFilters}><SearchResultsPage /></MainLayout>} />
//                 <Route path="/update-profile" element={<MainLayout onResetFilters={onResetFilters}><UpdateProfilePage /></MainLayout>} />


//                 {/* Admin Protected Routes */}
//                 <Route path="/add-product" element={<ProtectedRoute element={<MainLayout onResetFilters={onResetFilters}><AddProductPage /></MainLayout>} adminOnly={true} />} />
//                 <Route path="/edit-product/:productId" element={<ProtectedRoute element={<MainLayout onResetFilters={onResetFilters}><EditProductPage /></MainLayout>} adminOnly={true} />} />

//                 {/* Protected Routes with Nav */}
//                 <Route path="/cart" element={<ProtectedRoute element={<MainLayout onResetFilters={onResetFilters}><CartPage /></MainLayout>} />} />
//                 <Route path="/favorite" element={<ProtectedRoute element={<MainLayout onResetFilters={onResetFilters}><FavoritePage /></MainLayout>} />} />

//                 {/* Order Summary Route without Nav */}
//                 <Route path="/order-summary" element={<ProtectedRoute element={<OrderSummaryPage />} />} />
//             </Routes>
//         </BrowserRouter>
//     );
// };

// export default Routers;






















































// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import MainLayout from '../components/layouts/MainLayout';
// import HomePage from '../pages/HomePage';
// import CartPage from '../pages/CartPage';
// import ContactUsPage from '../pages/ContactUsPage';
// import FavoritePage from '../pages/FavoritePage';
// import AuthPage from '../pages/AuthPage';
// import SearchResultsPage from '../pages/SearchResultsPage';
// import AddProductPage from '../pages/AddProductPage';
// import ProtectedRoute from '../components/ProtectedRoute';
// import OrderSummaryPage from '../pages/OrderSummaryPage';
// import EditProductPage from '../pages/EditProductPage';
// import UpdateProfilePage from '../pages/UpdateProfilePage';
// import OrdersPage from '../pages/OrdersPage'; // Import the OrdersPage component
// import OrderDetailsPage from '../pages/OrderDetailsPage';

// const Routers = () => {
//     const [minPrice, setMinPrice] = useState('');
//     const [maxPrice, setMaxPrice] = useState('');

//     const onResetFilters = () => {
//         setMinPrice('');
//         setMaxPrice('');
//     };

//     return (
//         <BrowserRouter>
//             <Routes>
//                 {/* Public Routes with Nav */}
//                 <Route path="/" element={<MainLayout onResetFilters={onResetFilters}><HomePage /></MainLayout>} />
//                 <Route path="/contactUs" element={<MainLayout onResetFilters={onResetFilters}><ContactUsPage /></MainLayout>} />
//                 <Route path="/log-in" element={<MainLayout onResetFilters={onResetFilters}><AuthPage /></MainLayout>} />
//                 <Route path="/search" element={<MainLayout onResetFilters={onResetFilters}><SearchResultsPage /></MainLayout>} />
//                 <Route path="/update-profile" element={<MainLayout onResetFilters={onResetFilters}><UpdateProfilePage /></MainLayout>} />

//                 {/* Admin Protected Routes */}
//                 <Route path="/add-product" element={<ProtectedRoute element={<MainLayout onResetFilters={onResetFilters}><AddProductPage /></MainLayout>} adminOnly={true} />} />
//                 <Route path="/edit-product/:productId" element={<ProtectedRoute element={<MainLayout onResetFilters={onResetFilters}><EditProductPage /></MainLayout>} adminOnly={true} />} />

//                 {/* Protected Routes with Nav */}
//                 <Route path="/cart" element={<ProtectedRoute element={<MainLayout onResetFilters={onResetFilters}><CartPage /></MainLayout>} />} />
//                 <Route path="/favorite" element={<ProtectedRoute element={<MainLayout onResetFilters={onResetFilters}><FavoritePage /></MainLayout>} />} />

//                 {/* Order Summary Route without Nav */}
//                 <Route path="/order-summary" element={<ProtectedRoute element={<OrderSummaryPage />} />} />

//                 {/* New Orders Route for viewing previous orders */}
//                 <Route path="/orders" element={<ProtectedRoute element={<MainLayout onResetFilters={onResetFilters}><OrdersPage /></MainLayout>} />} />
//                 <Route path="/order-details/:orderId" element={<ProtectedRoute element={<MainLayout onResetFilters={onResetFilters}><OrderDetailsPage /></MainLayout>} />} />
//             </Routes>
//         </BrowserRouter>
//     );
// };

// export default Routers;








































// src/routers/Routers.tsx

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';  // Layout component that wraps pages with a common layout
import HomePage from '../pages/HomePage';  // Home page component
import CartPage from '../pages/CartPage';  // Cart page for viewing and managing cart items
import ContactUsPage from '../pages/ContactUsPage';  // Contact us page component
import FavoritePage from '../pages/FavoritePage';  // Favorite products page
import AuthPage from '../pages/AuthPage';  // Authentication page for login/register
import SearchResultsPage from '../pages/SearchResultsPage';  // Search results page to display filtered products
import AddProductPage from '../pages/AddProductPage';  // Page to add a new product (admin only)
import ProtectedRoute from '../components/ProtectedRoute';  // Component to protect routes for authenticated and admin users
import OrderSummaryPage from '../pages/OrderSummaryPage';  // Order summary page after reviewing the cart
import EditProductPage from '../pages/EditProductPage';  // Page for editing products (admin only)
import UpdateProfilePage from '../pages/UpdateProfilePage';  // Page for updating user profile information
import OrdersPage from '../pages/OrdersPage';  // Page for users to view their previous orders
import OrderDetailsPage from '../pages/OrderDetailsPage';  // Page to view details of a specific order

const Routers = () => {
    const [minPrice, setMinPrice] = useState('');  // State to manage minimum price filter
    const [maxPrice, setMaxPrice] = useState('');  // State to manage maximum price filter

    // Function to reset price filters
    const onResetFilters = () => {
        setMinPrice('');
        setMaxPrice('');
    };

    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes with Navigation Layout */}
                <Route path="/" element={<MainLayout onResetFilters={onResetFilters}><HomePage /></MainLayout>} />  {/* Home page route */}
                <Route path="/contactUs" element={<MainLayout onResetFilters={onResetFilters}><ContactUsPage /></MainLayout>} />  {/* Contact page */}
                <Route path="/log-in" element={<MainLayout onResetFilters={onResetFilters}><AuthPage /></MainLayout>} />  {/* Login/Register page */}
                <Route path="/search" element={<MainLayout onResetFilters={onResetFilters}><SearchResultsPage /></MainLayout>} />  {/* Search results page */}
                <Route path="/update-profile" element={<MainLayout onResetFilters={onResetFilters}><UpdateProfilePage /></MainLayout>} />  {/* Profile update page */}

                {/* Admin Protected Routes (Only accessible to admin users) */}
                <Route path="/add-product" element={<ProtectedRoute element={<MainLayout onResetFilters={onResetFilters}><AddProductPage /></MainLayout>} adminOnly={true} />} />  {/* Add product page for admins */}
                <Route path="/edit-product/:productId" element={<ProtectedRoute element={<MainLayout onResetFilters={onResetFilters}><EditProductPage /></MainLayout>} adminOnly={true} />} />  {/* Edit product page for admins */}

                {/* Protected Routes for Authenticated Users */}
                <Route path="/cart" element={<ProtectedRoute element={<MainLayout onResetFilters={onResetFilters}><CartPage /></MainLayout>} />} />  {/* Cart page */}
                <Route path="/favorite" element={<ProtectedRoute element={<MainLayout onResetFilters={onResetFilters}><FavoritePage /></MainLayout>} />} />  {/* Favorite products page */}

                {/* Order Summary Route without Navigation */}
                <Route path="/order-summary" element={<ProtectedRoute element={<OrderSummaryPage />} />} />  {/* Order summary page */}

                {/* Orders Route for viewing previous orders */}
                <Route path="/orders" element={<ProtectedRoute element={<MainLayout onResetFilters={onResetFilters}><OrdersPage /></MainLayout>} />} />  {/* Orders page */}
                <Route path="/order-details/:orderId" element={<ProtectedRoute element={<MainLayout onResetFilters={onResetFilters}><OrderDetailsPage /></MainLayout>} />} />  {/* Order details page */}
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;
