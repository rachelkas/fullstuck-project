import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import LikePage from '../pages/LikePage';
import ContactUsPage from '../pages/ContactUsPage';
import LoginPage from '../pages/LoginPage';

const Routers: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/cart" element={<CartPage />} />
                <Route path="/like" element={<LikePage />} />
                <Route path="/contact-us" element={<ContactUsPage />} />
                <Route path="/log-in" element={<LoginPage />} />
                <Route path="/" element={<HomePage />} /> {/* This will render HomePage by default */}
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;