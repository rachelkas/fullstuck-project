import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage'; // Adjust the path as necessary
import CartPage from '../pages/CartPage'; // Adjust the path as necessary
import LikePage from '../pages/LikePage'; // Adjust the path as necessary
import ContactUsPage from '../pages/ContactUsPage'; // Adjust the path as necessary
import LoginPage from '../pages/LoginPage'; // Adjust the path as necessary

const Routers: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/cart" element={<CartPage />} />
                <Route path="/like" element={<LikePage />} />
                <Route path="/contact-us" element={<ContactUsPage />} />
                <Route path="/log-in" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;