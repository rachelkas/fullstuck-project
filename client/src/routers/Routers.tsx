import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '../components/navbar/Nav'; // Adjust the path as necessary
import HomePage from '../pages/HomePage'; // Adjust the path as necessary
import CartPage from '../pages/CartPage'; // Adjust the path as necessary
// import LoginPage from '../pages/LoginPage'; // Adjust the path as necessary
import ContactUsPage from '../pages/ContactUsPage'; // Adjust the path as necessary
import LoginPage from '../pages/LoginPage';
import FavoritePage from '../pages/FavoritePage';
// import NotFoundPage from './pages/NotFoundPage'; // Adjust the path as necessary

const Routers = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/favorite" element={<FavoritePage />} />
                <Route path="/contactUs" element={<ContactUsPage />} />
                <Route path="/log-in" element={<LoginPage />} />
                {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;