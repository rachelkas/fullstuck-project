import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import ContactUsPage from '../pages/ContactUsPage';
import FavoritePage from '../pages/FavoritePage';
import AuthPage from '../pages/AuthPage';
import SearchResultsPage from '../pages/SearchResultsPage';
import AddProductPage from '../pages/AddProductPage';
import ProtectedRoute from '../components/ProtectedRoute';
import OrderSummaryPage from '../pages/OrderSummaryPage';
import EditProductPage from '../pages/EditProductPage';

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes with Nav */}
                <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
                <Route path="/contactUs" element={<MainLayout><ContactUsPage /></MainLayout>} />
                <Route path="/log-in" element={<MainLayout><AuthPage /></MainLayout>} />
                <Route path="/search" element={<MainLayout><SearchResultsPage /></MainLayout>} />

                {/* Admin Protected Routes */}
                <Route path="/add-product" element={<ProtectedRoute element={<MainLayout><AddProductPage /></MainLayout>} adminOnly={true} />} />
                <Route path="/edit-product/:productId" element={<ProtectedRoute element={<MainLayout><EditProductPage /></MainLayout>} adminOnly={true} />} />

                {/* Protected Routes with Nav */}
                <Route path="/cart" element={<ProtectedRoute element={<MainLayout><CartPage /></MainLayout>} />} />
                <Route path="/favorite" element={<ProtectedRoute element={<MainLayout><FavoritePage /></MainLayout>} />} />

                {/* Order Summary Route without Nav */}
                <Route path="/order-summary" element={<ProtectedRoute element={<OrderSummaryPage />} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;
