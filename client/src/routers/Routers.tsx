// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Nav from '../components/navbar/Nav';
// import HomePage from '../pages/HomePage';
// import CartPage from '../pages/CartPage';
// import ContactUsPage from '../pages/ContactUsPage';
// import FavoritePage from '../pages/FavoritePage';
// import AuthPage from '../pages/AuthPage';
// import ProtectedRoute from '../components/ProtectedRoute';

// const Routers = () => {
//     return (
//         <BrowserRouter>
//             <Nav />
//             <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/cart" element={<ProtectedRoute element={<CartPage />} />} />
//                 <Route path="/favorite" element={<ProtectedRoute element={<FavoritePage />} />} />
//                 <Route path="/contactUs" element={<ContactUsPage />} />
//                 <Route path="/auth" element={<AuthPage />} />
//             </Routes>
//         </BrowserRouter>
//     );
// }

// export default Routers;




import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '../components/navbar/Nav';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import ContactUsPage from '../pages/ContactUsPage';
import FavoritePage from '../pages/FavoritePage';
import ProtectedRoute from '../components/ProtectedRoute';
import AuthPage from '../pages/AuthPage';

const Routers = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<ProtectedRoute element={<CartPage />} />} />
                <Route path="/favorite" element={<ProtectedRoute element={<FavoritePage />} />} />
                <Route path="/contactUs" element={<ContactUsPage />} />
                <Route path="/log-in" element={<AuthPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;