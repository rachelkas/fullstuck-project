import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchProducts } from '../../slices/productSlice';
import { fetchCartItems, fetchFavoriteItems, logoutUser } from '../../slices/userSlice';
import SearchBar from '../searchBar/SearchBar';
import './Nav.css';
import { FaPlusCircle } from 'react-icons/fa';

interface NavProps {
    onResetFilters: () => void;
}

const Nav: React.FC<NavProps> = ({ onResetFilters }) => {
    const firstName = useSelector((state: RootState) => state.user.userDetails.firstName);
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
    const userRole = useSelector((state: RootState) => state.user.userDetails.role);
    const cartItemsCount = useSelector((state: RootState) => state.user.cart?.items?.length);
    const favoriteItemsCount = useSelector((state: RootState) => state.user.favorites.length);
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();

    const dropdownRef = useRef<HTMLLIElement>(null);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

    const handleLogout = () => {
        const confirmed = window.confirm('Are you sure you want to logout?');
        if (confirmed) {
            dispatch(logoutUser());
            navigate('/log-in');
        }
    };

    const closeDropdown = (e: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
            setDropdownOpen(false);
        }
    };

    const handleLogoOrHomeClick = () => {
        onResetFilters();
        dispatch(fetchProducts({ minPrice: '', maxPrice: '' }));
        navigate('/');
    };

    const goToOrders = () => {
        setDropdownOpen(false);
        navigate('/orders');
    };

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(fetchCartItems());
            dispatch(fetchFavoriteItems());
        }
        document.addEventListener('mousedown', closeDropdown);
        return () => document.removeEventListener('mousedown', closeDropdown);
    }, [isAuthenticated, dispatch]);

    return (
        <nav>
            <ul className="nav-left">
                <li className={`dropdown ${isDropdownOpen ? 'dropdown-active' : ''}`} ref={dropdownRef}>
                    <div className="icon-wrapper" onClick={toggleDropdown}>
                        <FiUser />
                    </div>
                    {isDropdownOpen && (
                        <div className="dropdown-content">
                            {!isAuthenticated && (
                                <Link to="/log-in" onClick={() => setDropdownOpen(false)}>Login</Link>
                            )}
                            {isAuthenticated && (
                                <>
                                    <Link to="/update-profile" onClick={() => setDropdownOpen(false)}>Update Profile</Link>
                                    <span onClick={goToOrders}>Orders</span>
                                    <span onClick={handleLogout}>Logout</span>
                                </>
                            )}
                        </div>
                    )}
                </li>
                <li className="icon-container">
                    <Link to="/cart">
                        <MdOutlineShoppingCart />
                        {cartItemsCount > 0 && (
                            <div className="cart-count-badge">{cartItemsCount}</div>
                        )}
                    </Link>
                </li>
                <li className="icon-container">
                    <Link to="/favorite">
                        <CiHeart />
                        {favoriteItemsCount > 0 && (
                            <div className="favorite-count-badge">{favoriteItemsCount}</div>
                        )}
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <IoHomeOutline />
                    </Link>
                </li>
            </ul>

            <ul className="nav-center">
                <li>
                    <Link to="/" onClick={handleLogoOrHomeClick}>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`} alt="logo" />
                    </Link>
                </li>
            </ul>

            <ul className="nav-right">
                <li>
                    <SearchBar />
                </li>
                {/* Always show the FiUser icon regardless of authentication */}
                <li className="dropdown" ref={dropdownRef}>
                    <div className="icon-wrapper" onClick={toggleDropdown}>
                        <FiUser />
                    </div>
                    {/* Render dropdown content based on authentication */}
                    {isDropdownOpen && (
                        <div className="dropdown-content">
                            {!isAuthenticated && (
                                <Link to="/log-in" onClick={() => setDropdownOpen(false)}>Login</Link>
                            )}
                            {isAuthenticated && (
                                <>
                                    <Link to="/update-profile" onClick={() => setDropdownOpen(false)}>Update Profile</Link>
                                    <span onClick={goToOrders}>Orders</span>
                                    <span onClick={handleLogout}>Logout</span>
                                </>
                            )}
                        </div>
                    )}
                </li>

                <li className="user-greeting">
                    {isAuthenticated ? (`Welcome, ${firstName}! `) : 'Hello Guest'}
                </li>

            </ul>
        </nav>
    );
};

export default Nav;



































// import React, { useState, useRef, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import { BsTelephone } from "react-icons/bs";
// import { FiUser } from "react-icons/fi";
// import { IoHomeOutline } from "react-icons/io5";
// import { FaPlusCircle } from "react-icons/fa"; // Importing the new icon for add product
// import { useSelector, useDispatch } from 'react-redux';
// import { AppDispatch, RootState } from '../../store';
// import { fetchProducts } from '../../slices/productSlice';
// import { fetchCartItems, fetchFavoriteItems, logoutUser } from '../../slices/userSlice';
// import SearchBar from '../searchBar/SearchBar';
// import './Nav.css';

// interface NavProps {
//     onResetFilters: () => void; // Prop to reset filters when navigating
// }

// const Nav: React.FC<NavProps> = ({ onResetFilters }) => {
//     const firstName = useSelector((state: RootState) => state.user.userDetails.firstName);
//     const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
//     const userRole = useSelector((state: RootState) => state.user.userDetails.role);
//     const cartItemsCount = useSelector((state: RootState) => state.user.cart?.items?.length);
//     const favoriteItemsCount = useSelector((state: RootState) => state.user.favorites.length);
//     const navigate = useNavigate();
//     const dispatch: AppDispatch = useDispatch();

//     const dropdownRef = useRef<HTMLLIElement>(null);
//     const [isDropdownOpen, setDropdownOpen] = useState(false);

//     const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

//     const handleLogout = () => {
//         const confirmed = window.confirm('Are you sure you want to logout?');
//         if (confirmed) {
//             dispatch(logoutUser());
//             navigate('/log-in');
//         }
//     };

//     const closeDropdown = (e: MouseEvent) => {
//         if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
//             setDropdownOpen(false);
//         }
//     };

//     const handleLogoOrHomeClick = () => {
//         onResetFilters();
//         dispatch(fetchProducts({ minPrice: '', maxPrice: '' }));
//         navigate('/');
//     };

//     const goToOrders = () => {
//         setDropdownOpen(false);
//         navigate('/orders');
//     };

//     useEffect(() => {
//         if (isAuthenticated) {
//             dispatch(fetchCartItems());
//             dispatch(fetchFavoriteItems());
//         }
//         document.addEventListener('mousedown', closeDropdown);
//         return () => document.removeEventListener('mousedown', closeDropdown);
//     }, [isAuthenticated, dispatch]);

//     return (
//         <nav>
//             <ul>
//                 {/* If user is admin, show 'Add Product' link with FaPlusCircle icon */}
//                 {userRole === 'admin' && (
//                     <li>
//                         <Link to="/add-product" className="add-product-link">
//                             <FaPlusCircle className="add-product-icon" />
//                         </Link>
//                     </li>
//                 )}
//                 <li className="icon-container">
//                     <Link to="/cart">
//                         <MdOutlineShoppingCart />
//                         {cartItemsCount > 0 && (
//                             <div className="cart-count-badge">{cartItemsCount}</div>
//                         )}
//                     </Link>
//                 </li>
//                 <li className="icon-container">
//                     <Link to="/favorite">
//                         <CiHeart />
//                         {favoriteItemsCount > 0 && (
//                             <div className="favorite-count-badge">{favoriteItemsCount}</div>
//                         )}
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/contactUs">
//                         <BsTelephone />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/" onClick={handleLogoOrHomeClick}>
//                         <IoHomeOutline />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/" onClick={handleLogoOrHomeClick}>
//                         <img src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`} alt="logo" />
//                     </Link>
//                 </li>
//                 <li>
//                     <SearchBar />
//                 </li>
//                 {isAuthenticated && (
//                     <li className="user-greeting">
//                         Welcome, {firstName}!
//                     </li>
//                 )}
//                 <li className="dropdown" ref={dropdownRef}>
//                     <div className="icon-wrapper" onClick={toggleDropdown}>
//                         <FiUser />
//                     </div>
//                     {isDropdownOpen && (
//                         <div className="dropdown-content">
//                             {!isAuthenticated && (
//                                 <Link to="/log-in" onClick={() => setDropdownOpen(false)}>Login</Link>
//                             )}
//                             {isAuthenticated && (
//                                 <>
//                                     <Link to="/update-profile" onClick={() => setDropdownOpen(false)}>Update Profile</Link>
//                                     <span onClick={goToOrders}>Orders</span>
//                                     <span onClick={handleLogout}>Logout</span>
//                                 </>
//                             )}
//                         </div>
//                     )}
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default Nav;





































{/* User dropdown menu */ }
//                 <li className="dropdown" ref={dropdownRef}>
//                     <div className="icon-wrapper" onClick={toggleDropdown}>
//                         <FiUser />
//                     </div>
//                     {isDropdownOpen && (
//                         <div className="dropdown-content">
//                             {!isAuthenticated && (
//                                 <Link to="/log-in" onClick={() => setDropdownOpen(false)}>Login</Link>
//                             )}
//                             {isAuthenticated && (
//                                 <>
//                                     <Link to="/update-profile" onClick={() => setDropdownOpen(false)}>Update Profile</Link>
//                                     <span onClick={goToOrders}>Orders</span>
//                                     <span onClick={handleLogout}>Logout</span>
//                                 </>
//                             )}
//                         </div>
//                     )}
//                 </li>






//yesterday we did that when i get a toast i wont get two toast at a time but if the toasts are diffrent i want to get them one after each other.
// for exaple if i click on the 