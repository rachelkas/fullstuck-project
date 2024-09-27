//good
// // src/components/nav/Nav.tsx

// import React, { useState, useRef, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import { BsTelephone } from "react-icons/bs";
// import { FiUser } from "react-icons/fi";
// import { IoHomeOutline } from "react-icons/io5";
// import { useSelector, useDispatch } from 'react-redux';
// import { AppDispatch, RootState } from '../../store';
// import { fetchProducts } from '../../slices/productSlice';
// import { fetchCartItems, fetchFavoriteItems, logoutUser } from '../../slices/userSlice';
// import SearchBar from '../searchBar/SearchBar';
// import './Nav.css';
// import { FaPlusCircle } from 'react-icons/fa';
// import { GiHamburgerMenu } from 'react-icons/gi';

// interface NavProps {
//     onResetFilters: () => void;
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
//     const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile menu state

//     const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
//     const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu

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
//             <div className="nav-left">
//                 <GiHamburgerMenu className="hamburger" onClick={toggleMobileMenu} /> {/* Hamburger icon for mobile */}
//                 <ul className={`nav-icons ${isMobileMenuOpen ? 'show' : ''}`}>
//                     <li className={`dropdown ${isDropdownOpen ? 'dropdown-active' : ''}`} ref={dropdownRef}>
//                         <div className="icon-wrapper" onClick={toggleDropdown}>
//                             <FiUser />
//                         </div>
//                         {isDropdownOpen && (
//                             <div className="dropdown-content">
//                                 {!isAuthenticated && (
//                                     <Link to="/log-in" onClick={() => setDropdownOpen(false)}>Login</Link>
//                                 )}
//                                 {isAuthenticated && (
//                                     <>
//                                         <Link to="/update-profile" onClick={() => setDropdownOpen(false)}>Update Profile</Link>
//                                         <span onClick={goToOrders}>Orders</span>
//                                         <span onClick={handleLogout}>Logout</span>
//                                     </>
//                                 )}
//                             </div>
//                         )}
//                     </li>
//                     <li className="icon-container">
//                         <Link to="/cart">
//                             <MdOutlineShoppingCart />
//                             {cartItemsCount > 0 && (
//                                 <div className="cart-count-badge">{cartItemsCount}</div>
//                             )}
//                         </Link>
//                     </li>
//                     <li className="icon-container">
//                         <Link to="/favorite">
//                             <CiHeart />
//                             {favoriteItemsCount > 0 && (
//                                 <div className="favorite-count-badge">{favoriteItemsCount}</div>
//                             )}
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/contactUs">
//                             <BsTelephone />
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/">
//                             <IoHomeOutline />
//                         </Link>
//                     </li>
//                     {userRole === 'admin' && (
//                         <li>
//                             <Link to="/add-product" className="add-product-link">
//                                 <FaPlusCircle className="add-product-icon" />
//                             </Link>
//                         </li>
//                     )}
//                 </ul>
//             </div>
//             <div className="nav-center">
//                 <Link to="/" onClick={handleLogoOrHomeClick}>
//                     <img src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`} alt="logo" />
//                 </Link>
//             </div>
//             <div className="nav-right">
//                 <SearchBar />
//                 <span className="user-greeting">
//                     {isAuthenticated ? (`Welcome, ${firstName}!`) : 'Hello Guest'}
//                 </span>
//             </div>
//         </nav>
//     );
// };

// export default Nav;























// import React, { useState, useRef, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import { BsTelephone } from "react-icons/bs";
// import { FiUser } from "react-icons/fi";
// import { IoHomeOutline } from "react-icons/io5";
// import { FaPlusCircle } from 'react-icons/fa';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { useSelector, useDispatch } from 'react-redux';
// import { AppDispatch, RootState } from '../../store';
// import { fetchProducts } from '../../slices/productSlice';
// import { fetchCartItems, fetchFavoriteItems, logoutUser } from '../../slices/userSlice';
// import SearchBar from '../searchBar/SearchBar';
// import './Nav.css';

// interface NavProps {
//     onResetFilters: () => void;
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
//     const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile menu state

//     const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
//     const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu

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
//             <div className="nav-left">
//                 <GiHamburgerMenu className="hamburger" onClick={toggleMobileMenu} /> {/* Hamburger icon for mobile */}
//                 <ul className={`nav-icons ${isMobileMenuOpen ? 'show' : ''}`}>
//                     {/* Move Welcome message into the mobile menu */}
//                     <li className="mobile-welcome">
//                         {isAuthenticated ? `Welcome, ${firstName}!` : 'Hello Guest'}
//                     </li>
//                     <li className={`dropdown ${isDropdownOpen ? 'dropdown-active' : ''}`} ref={dropdownRef}>
//                         <div className="icon-wrapper" onClick={toggleDropdown}>
//                             <FiUser />
//                         </div>
//                         {isDropdownOpen && (
//                             <div className="dropdown-content">
//                                 {!isAuthenticated && (
//                                     <Link to="/log-in" onClick={() => setDropdownOpen(false)}>Login</Link>
//                                 )}
//                                 {isAuthenticated && (
//                                     <>
//                                         <Link className='update-profile-dropdown-option' to="/update-profile" onClick={() => setDropdownOpen(false)}>Update Profile</Link>
//                                         <span onClick={goToOrders}>Orders</span>
//                                         <span onClick={handleLogout}>Logout</span>
//                                     </>
//                                 )}
//                             </div>
//                         )}
//                     </li>
//                     <li className="icon-container">
//                         <Link to="/cart">
//                             <MdOutlineShoppingCart className='cart-icon' />
//                             {cartItemsCount > 0 && (
//                                 <div className="cart-count-badge">{cartItemsCount}</div>
//                             )}
//                         </Link>
//                     </li>
//                     <li className="icon-container">
//                         <Link to="/favorite">
//                             <CiHeart className='favorite-icon' />
//                             {favoriteItemsCount > 0 && (
//                                 <div className="favorite-count-badge">{favoriteItemsCount}</div>
//                             )}
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/contactUs">
//                             <BsTelephone className='contact-us-icon' />
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/">
//                             <IoHomeOutline className='home-icon' />
//                         </Link>
//                     </li>
//                     {userRole === 'admin' && (
//                         <li>
//                             <Link to="/add-product" className="add-product-link">
//                                 <FaPlusCircle className="add-product-icon" />
//                             </Link>
//                         </li>
//                     )}
//                 </ul>
//             </div>
//             <div className="nav-center">
//                 <Link to="/" onClick={handleLogoOrHomeClick}>
//                     <img src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`} alt="logo" />
//                 </Link>
//             </div>
//             <div className="nav-right">
//                 <SearchBar />
//             </div>
//         </nav>
//     );
// };

// export default Nav;

























































import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { FaPlusCircle } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchProducts } from '../../slices/productSlice';
import { fetchCartItems, fetchFavoriteItems, logoutUser } from '../../slices/userSlice';
import SearchBar from '../searchBar/SearchBar';
import './Nav.css';

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
    const mobileMenuRef = useRef<HTMLUListElement>(null); // Changed to HTMLUListElement
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile menu state

    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
    const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu

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

    const closeMobileMenu = (e: MouseEvent) => {
        if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
            setMobileMenuOpen(false); // Close mobile menu when clicked outside
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
        document.addEventListener('mousedown', closeMobileMenu); // Close mobile menu when clicked outside
        return () => {
            document.removeEventListener('mousedown', closeDropdown);
            document.removeEventListener('mousedown', closeMobileMenu);
        };
    }, [isAuthenticated, dispatch]);

    return (
        <nav>
            <div className="nav-left">
                <GiHamburgerMenu className="hamburger" onClick={toggleMobileMenu} /> {/* Hamburger icon for mobile */}
                <ul className={`nav-icons ${isMobileMenuOpen ? 'show' : ''}`} ref={mobileMenuRef}>
                    {/* Move Welcome message into the mobile menu */}
                    <li className="mobile-welcome">
                        {isAuthenticated ? `Welcome, ${firstName}!` : 'Hello Guest'}
                    </li>
                    <li className={`dropdown ${isDropdownOpen ? 'dropdown-active' : ''}`} ref={dropdownRef}>
                        <div className="icon-wrapper" onClick={toggleDropdown}>
                            <FiUser className='icon-wrapper-dropdown-icon' />
                        </div>
                        {isDropdownOpen && (
                            <div className="dropdown-content">
                                {!isAuthenticated && (
                                    <Link to="/log-in" onClick={() => setDropdownOpen(false)}>Login</Link>
                                )}
                                {isAuthenticated && (
                                    <>
                                        <Link className='update-profile-dropdown-option' to="/update-profile" onClick={() => setDropdownOpen(false)}>Update Profile</Link>
                                        <span onClick={goToOrders}>Orders</span>
                                        <span onClick={handleLogout}>Logout</span>
                                    </>
                                )}
                            </div>
                        )}
                    </li>
                    <li className="icon-container">
                        <Link to="/cart">
                            <MdOutlineShoppingCart className='cart-icon' />
                            {cartItemsCount > 0 && (
                                <div className="cart-count-badge">{cartItemsCount}</div>
                            )}
                        </Link>
                    </li>
                    <li className="icon-container">
                        <Link to="/favorite">
                            <CiHeart className='favorite-icon' />
                            {favoriteItemsCount > 0 && (
                                <div className="favorite-count-badge">{favoriteItemsCount}</div>
                            )}
                        </Link>
                    </li>
                    <li>
                        <Link to="/contactUs">
                            <BsTelephone className='contact-us-icon' />
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <IoHomeOutline className='home-icon' />
                        </Link>
                    </li>
                    {userRole === 'admin' && (
                        <li>
                            <Link to="/add-product" className="add-product-link">
                                <FaPlusCircle className="add-product-icon" />
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
            <div className="nav-center">
                <Link to="/" onClick={handleLogoOrHomeClick}>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`} alt="logo" />
                </Link>
            </div>
            <div className="nav-right">
                <SearchBar />
            </div>
        </nav>
    );
};

export default Nav;
