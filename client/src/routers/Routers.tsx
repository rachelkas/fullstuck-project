// // src/routers/Routers.tsx

// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Nav from '../components/navbar/Nav';
// import HomePage from '../pages/HomePage';
// import CartPage from '../pages/CartPage';
// import ContactUsPage from '../pages/ContactUsPage';
// import FavoritePage from '../pages/FavoritePage';
// import AuthPage from '../pages/AuthPage';
// import SearchResultsPage from '../pages/SearchResultsPage';
// import AddProductPage from '../pages/AddProductPage';
// import ProtectedRoute from '../components/ProtectedRoute';
// import { useSelector } from 'react-redux';
// import { RootState } from '../store';

// const Routers = () => {
//     const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
//     const userRole = useSelector((state: RootState) => state.user.role);

//     return (
//         <BrowserRouter>
//             <Nav />
//             <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/contactUs" element={<ContactUsPage />} />
//                 <Route path="/log-in" element={<AuthPage />} />
//                 <Route path="/search" element={<SearchResultsPage />} />
//                 <Route path="/add-product" element={<ProtectedRoute element={<AddProductPage />} isAuthenticated={isAuthenticated} />} />
//                 <Route path="/cart" element={<ProtectedRoute element={<CartPage />} isAuthenticated={isAuthenticated} />} />
//                 <Route path="/favorite" element={<ProtectedRoute element={<FavoritePage />} isAuthenticated={isAuthenticated} />} />
//             </Routes>
//         </BrowserRouter>
//     );
// };

// export default Routers;



































// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Nav from '../components/navbar/Nav';
// import HomePage from '../pages/HomePage';
// import CartPage from '../pages/CartPage';
// import ContactUsPage from '../pages/ContactUsPage';
// import FavoritePage from '../pages/FavoritePage';
// import AuthPage from '../pages/AuthPage';
// import SearchResultsPage from '../pages/SearchResultsPage';
// import AddProductPage from '../pages/AddProductPage';
// import ProtectedRoute from '../components/ProtectedRoute';
// import { useSelector } from 'react-redux';
// import { RootState } from '../store';

// const Routers = () => {
//     const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

//     return (
//         <BrowserRouter>
//             <Nav />
//             <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/contactUs" element={<ContactUsPage />} />
//                 <Route path="/log-in" element={<AuthPage />} />
//                 <Route path="/search" element={<SearchResultsPage />} />
//                 <Route
//                     path="/add-product"
//                     element={<ProtectedRoute element={<AddProductPage />} isAuthenticated={isAuthenticated} />}
//                 />
//                 <Route
//                     path="/cart"
//                     element={<ProtectedRoute element={<CartPage />} isAuthenticated={isAuthenticated} />}
//                 />
//                 <Route
//                     path="/favorite"
//                     element={<ProtectedRoute element={<FavoritePage />} isAuthenticated={isAuthenticated} />}
//                 />
//             </Routes>
//         </BrowserRouter>
//     );
// };

// export default Routers;







































































// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Nav from '../components/navbar/Nav';
// import HomePage from '../pages/HomePage';
// import CartPage from '../pages/CartPage';
// import ContactUsPage from '../pages/ContactUsPage';
// import FavoritePage from '../pages/FavoritePage';
// import AuthPage from '../pages/AuthPage';
// import SearchResultsPage from '../pages/SearchResultsPage';
// import AddProductPage from '../pages/AddProductPage';
// import ProtectedRoute from '../components/ProtectedRoute';
// import { useSelector } from 'react-redux';
// import { RootState } from '../store';

// const Routers = () => {
//     const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

//     return (
//         <BrowserRouter>
//             <Nav />
//             <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/contactUs" element={<ContactUsPage />} />
//                 <Route path="/log-in" element={<AuthPage />} />
//                 <Route path="/search" element={<SearchResultsPage />} />
//                 <Route path="/add-product" element={<ProtectedRoute element={<AddProductPage />} />} />
//                 <Route path="/cart" element={<ProtectedRoute element={<CartPage />} />} />
//                 <Route path="/favorite" element={<ProtectedRoute element={<FavoritePage />} />} />
//             </Routes>
//         </BrowserRouter>
//     );
// };

// export default Routers;





































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
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Routers = () => {
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes with Nav */}
                <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
                <Route path="/contactUs" element={<MainLayout><ContactUsPage /></MainLayout>} />
                <Route path="/log-in" element={<MainLayout><AuthPage /></MainLayout>} />
                <Route path="/search" element={<MainLayout><SearchResultsPage /></MainLayout>} />

                {/* Protected Routes with Nav */}
                <Route path="/add-product" element={<ProtectedRoute element={<MainLayout><AddProductPage /></MainLayout>} />} />
                <Route path="/cart" element={<ProtectedRoute element={<MainLayout><CartPage /></MainLayout>} />} />
                <Route path="/favorite" element={<ProtectedRoute element={<MainLayout><FavoritePage /></MainLayout>} />} />

                {/* Order Summary Route without Nav */}
                <Route path="/order-summary" element={<ProtectedRoute element={<OrderSummaryPage />} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;
