import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "../navbar/Nav"; // Adjust the import path based on your directory structure

const Routers: React.FC = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/cart" element={<div>Cart Page</div>} />
                <Route path="/like" element={<div>Like Page</div>} />
                <Route path="/contact-us" element={<div>Contact Us Page</div>} />
                <Route path="/log-in" element={<div>Login Page</div>} />
                <Route path="/home" element={<div>Home Page</div>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;