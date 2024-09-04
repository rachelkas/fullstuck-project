// import React from 'react';
// import { Link } from 'react-router-dom';
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import { BsTelephone } from "react-icons/bs";
// import { FiUser } from "react-icons/fi";
// import { IoHomeOutline } from "react-icons/io5";
// import { useSelector } from 'react-redux';
// import { RootState } from '../../store';
// import SearchBar from '../searchBar/SearchBar';
// import './Nav.css';

// const Nav: React.FC = () => {
//     const firstName = useSelector((state: RootState) => state.user.userDetails.firstName);
//     const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

//     return (
//         <nav>
//             <ul>
//                 <li> <Link to="/add-product"> + </Link></li>
//                 <li>
//                     <Link to="/cart">
//                         <MdOutlineShoppingCart />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/favorite">
//                         <CiHeart />
//                     </Link>
//                 </li>

//                 <li>
//                     <Link to="/contactUs">
//                         <BsTelephone />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/log-in">
//                         <FiUser />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/">
//                         <IoHomeOutline />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/">
//                         <img src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`} alt="logo" />
//                     </Link>
//                 </li>
//                 <li>
//                     <SearchBar />
//                 </li>
//                 {isAuthenticated && (
//                     <li>
//                         <span>Welcome, {firstName}</span>
//                     </li>
//                 )}
//             </ul>
//         </nav>
//     );
// };

// export default Nav;












// import React from 'react';
// import { Link } from 'react-router-dom';
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import { BsTelephone } from "react-icons/bs";
// import { FiUser } from "react-icons/fi";
// import { IoHomeOutline } from "react-icons/io5";
// import { useSelector } from 'react-redux';
// import { RootState } from '../../store';
// import SearchBar from '../searchBar/SearchBar';
// import './Nav.css';

// const Nav: React.FC = () => {
//     const firstName = useSelector((state: RootState) => state.user.userDetails.firstName);
//     const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
//     const userRole = useSelector((state: RootState) => state.user.userDetails.role); // Get the user role

//     return (
//         <nav>
//             <ul>
//                 {userRole === 'admin' && (
//                     <li> <Link to="/add-product"> + </Link></li> // Show add product link only for admins
//                 )}
//                 <li>
//                     <Link to="/cart">
//                         <MdOutlineShoppingCart />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/favorite">
//                         <CiHeart />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/contactUs">
//                         <BsTelephone />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/log-in">
//                         <FiUser />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/">
//                         <IoHomeOutline />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/">
//                         <img src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`} alt="logo" />
//                     </Link>
//                 </li>
//                 <li>
//                     <SearchBar />
//                 </li>
//                 {isAuthenticated && (
//                     <li>
//                         <span>Welcome, {firstName}</span>
//                     </li>
//                 )}
//             </ul>
//         </nav>
//     );
// };

// export default Nav;















// // src/components/navbar/Nav.tsx

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import { BsTelephone } from "react-icons/bs";
// import { FiUser } from "react-icons/fi";
// import { IoHomeOutline } from "react-icons/io5";
// import { useSelector } from 'react-redux';
// import { RootState } from '../../store';
// import SearchBar from '../searchBar/SearchBar';
// import './Nav.css';

// const Nav: React.FC = () => {
//     const firstName = useSelector((state: RootState) => state.user.userDetails.firstName);
//     const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
//     const userRole = useSelector((state: RootState) => state.user.userDetails.role);

//     return (
//         <nav>
//             <ul>
//                 {userRole === 'admin' && (
//                     <li> <Link to="/add-product"> + </Link></li> // Show add product link only for admins
//                 )}
//                 <li>
//                     <Link to="/cart">
//                         <MdOutlineShoppingCart />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/favorite">
//                         <CiHeart />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/contactUs">
//                         <BsTelephone />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/">
//                         <IoHomeOutline />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/">
//                         <img src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`} alt="logo" />
//                     </Link>
//                 </li>
//                 <li>
//                     <SearchBar />
//                 </li>
//                 {isAuthenticated ? (
//                     <>
//                         <li>
//                             <span>Welcome, {firstName}</span>
//                         </li>
//                         <li>
//                             <Link to="/log-in">
//                                 <button>Update Profile</button>
//                             </Link>
//                         </li>
//                     </>
//                 ) : (
//                     <li>
//                         <Link to="/log-in">
//                             <FiUser />
//                         </Link>
//                     </li>
//                 )}
//             </ul>
//         </nav>
//     );
// };

// export default Nav;











































// src/components/navbar/Nav.tsx

// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import { BsTelephone } from "react-icons/bs";
// import { FiUser } from "react-icons/fi";
// import { IoHomeOutline } from "react-icons/io5";
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../../store';
// import SearchBar from '../searchBar/SearchBar';
// import { logoutUser } from '../../services/authService';
// import './Nav.css';

// const Nav: React.FC = () => {
//     const firstName = useSelector((state: RootState) => state.user.userDetails.firstName);
//     const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const handleLogout = () => {
//         logoutUser(dispatch);
//         navigate('/log-in');
//     };

//     return (
//         <nav>
//             <ul>
//                 <li>
//                     <Link to="/cart">
//                         <MdOutlineShoppingCart />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/favorite">
//                         <CiHeart />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/contactUs">
//                         <BsTelephone />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/">
//                         <IoHomeOutline />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/">
//                         <img src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`} alt="logo" />
//                     </Link>
//                 </li>
//                 <li>
//                     <SearchBar />
//                 </li>
//                 <li>
//                     {isAuthenticated ? (
//                         <div className="dropdown">
//                             <button className="dropbtn">
//                                 <FiUser /> {firstName}
//                             </button>
//                             <div className="dropdown-content">
//                                 <Link to="/log-in">Update Profile</Link>
//                                 <button onClick={handleLogout} className="logout-button">Logout</button>
//                             </div>
//                         </div>
//                     ) : (
//                         <Link to="/log-in">
//                             <FiUser />
//                         </Link>
//                     )}
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default Nav;

























// src/components/navbar/Nav.tsx

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import { BsTelephone } from "react-icons/bs";
// import { IoHomeOutline } from "react-icons/io5";
// import { FiUser } from "react-icons/fi";
// import { useSelector } from 'react-redux';
// import { RootState } from '../../store';
// import SearchBar from '../searchBar/SearchBar';
// import './Nav.css';

// const Nav: React.FC = () => {
//     const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

//     return (
//         <nav>
//             <ul>
//                 <li>
//                     <Link to="/cart">
//                         <MdOutlineShoppingCart />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/favorite">
//                         <CiHeart />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/contactUs">
//                         <BsTelephone />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/">
//                         <IoHomeOutline />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/">
//                         <img src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`} alt="logo" />
//                     </Link>
//                 </li>
//                 <li>
//                     <SearchBar />
//                 </li>
//                 <li>
//                     <Link to="/log-in">
//                         <FiUser />
//                     </Link>
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default Nav;
































// src/components/navbar/Nav.tsx

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import { BsTelephone } from "react-icons/bs";
// import { FiUser } from "react-icons/fi";
// import { IoHomeOutline } from "react-icons/io5";
// import { useSelector } from 'react-redux';
// import { RootState } from '../../store';
// import SearchBar from '../searchBar/SearchBar';
// import './Nav.css';

// const Nav: React.FC = () => {
//     const [dropdownVisible, setDropdownVisible] = useState(false);
//     const firstName = useSelector((state: RootState) => state.user.userDetails.firstName);
//     const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
//     const userRole = useSelector((state: RootState) => state.user.userDetails.role);

//     const toggleDropdown = () => {
//         setDropdownVisible(!dropdownVisible);
//     };

//     return (
//         <nav>
//             <ul>
//                 {userRole === 'admin' && (
//                     <li> <Link to="/add-product"> + </Link></li>
//                 )}
//                 <li>
//                     <Link to="/cart">
//                         <MdOutlineShoppingCart />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/favorite">
//                         <CiHeart />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/contactUs">
//                         <BsTelephone />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/">
//                         <IoHomeOutline />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/">
//                         <img src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`} alt="logo" />
//                     </Link>
//                 </li>
//                 <li>
//                     <SearchBar />
//                 </li>
//                 <li className="dropdown">
//                     <div className="icon-wrapper" onClick={toggleDropdown}>
//                         <FiUser />
//                     </div>
//                     {dropdownVisible && (
//                         <ul className="dropdown-content">
//                             {!isAuthenticated ? (
//                                 <li>
//                                     <Link to="/log-in">Login</Link>
//                                 </li>
//                             ) : (
//                                 <>
//                                     <li>
//                                         <Link to="/log-in">Update Profile</Link>
//                                     </li>
//                                     <li>
//                                         <button onClick={() => {
//                                             if (window.confirm('Are you sure you want to logout?')) {
//                                                 // Handle logout logic here
//                                             }
//                                         }}>Logout</button>
//                                     </li>
//                                 </>
//                             )}
//                         </ul>
//                     )}
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default Nav;


















































// src/components/navbar/Nav.tsx

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import { BsTelephone } from "react-icons/bs";
// import { FiUser } from "react-icons/fi";
// import { IoHomeOutline } from "react-icons/io5";
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../../store';
// import { logoutUser } from '../../services/authService';
// import SearchBar from '../searchBar/SearchBar';
// import './Nav.css';

// const Nav: React.FC = () => {
//     const [dropdownVisible, setDropdownVisible] = useState(false);
//     const firstName = useSelector((state: RootState) => state.user.userDetails.firstName);
//     const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
//     const userRole = useSelector((state: RootState) => state.user.userDetails.role);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const toggleDropdown = () => {
//         setDropdownVisible(!dropdownVisible);
//     };

//     const handleLogout = () => {
//         if (window.confirm('Are you sure you want to logout?')) {
//             logoutUser(dispatch);
//             navigate('/log-in'); // Redirect to the login page after logout
//         }
//     };

//     return (
//         <nav>
//             <ul>
//                 {userRole === 'admin' && (
//                     <li> <Link to="/add-product"> + </Link></li>
//                 )}
//                 <li>
//                     <Link to="/cart">
//                         <MdOutlineShoppingCart />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/favorite">
//                         <CiHeart />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/contactUs">
//                         <BsTelephone />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/">
//                         <IoHomeOutline />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/">
//                         <img src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`} alt="logo" />
//                     </Link>
//                 </li>
//                 <li>
//                     <SearchBar />
//                 </li>
//                 <li className="dropdown">
//                     <div className="icon-wrapper" onClick={toggleDropdown}>
//                         <FiUser />
//                     </div>
//                     {dropdownVisible && (
//                         <ul className="dropdown-content">
//                             {!isAuthenticated ? (
//                                 <li>
//                                     <Link to="/log-in">Login</Link>
//                                 </li>
//                             ) : (
//                                 <>
//                                     <li>
//                                         <Link to="/log-in">Update Profile</Link>
//                                     </li>
//                                     <li>
//                                         <button onClick={handleLogout}>Logout</button>
//                                     </li>
//                                 </>
//                             )}
//                         </ul>
//                     )}
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default Nav;
















































// // src/components/navbar/Nav.tsx
// // src/components/navbar/Nav.tsx

// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import { BsTelephone } from "react-icons/bs";
// import { FiUser } from "react-icons/fi";
// import { IoHomeOutline } from "react-icons/io5";
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../../store';
// import { logoutUser } from '../../services/authService';
// import SearchBar from '../searchBar/SearchBar';
// import './Nav.css';

// const Nav: React.FC = () => {
//     const [dropdownVisible, setDropdownVisible] = useState(false);
//     const dropdownRef = useRef<HTMLLIElement>(null); // Updated the ref to HTMLLIElement
//     const firstName = useSelector((state: RootState) => state.user.userDetails.firstName);
//     const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
//     const userRole = useSelector((state: RootState) => state.user.userDetails.role);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const toggleDropdown = () => {
//         setDropdownVisible(!dropdownVisible);
//     };

//     const handleLogout = () => {
//         if (window.confirm('Are you sure you want to logout?')) {
//             logoutUser(dispatch);
//             navigate('/log-in'); // Redirect to the login page after logout
//         }
//     };

//     const handleClickOutside = (event: MouseEvent) => {
//         if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//             setDropdownVisible(false);
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     return (
//         <nav>
//             <ul>
//                 {userRole === 'admin' && (
//                     <li> <Link to="/add-product"> + </Link></li>
//                 )}
//                 <li>
//                     <Link to="/cart">
//                         <MdOutlineShoppingCart />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/favorite">
//                         <CiHeart />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/contactUs">
//                         <BsTelephone />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/">
//                         <IoHomeOutline />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/">
//                         <img src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`} alt="logo" />
//                     </Link>
//                 </li>
//                 <li>
//                     <SearchBar />
//                 </li>
//                 <li className="dropdown" ref={dropdownRef}>
//                     <div className="icon-wrapper" onClick={toggleDropdown}>
//                         <FiUser />
//                     </div>
//                     {dropdownVisible && (
//                         <ul className="dropdown-content">
//                             {!isAuthenticated ? (
//                                 <li>
//                                     <Link to="/log-in">Login</Link>
//                                 </li>
//                             ) : (
//                                 <>
//                                     <li>
//                                         <Link to="/log-in">Switch User</Link>
//                                     </li>
//                                     <li>
//                                         <Link to="/log-in">Update Profile</Link>
//                                     </li>
//                                     <li>
//                                         <button onClick={handleLogout}>Logout</button>
//                                     </li>
//                                 </>
//                             )}
//                         </ul>
//                     )}
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default Nav;























// // src/components/navbar/Nav.tsx
// import React, { useState, useRef, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import { BsTelephone } from "react-icons/bs";
// import { FiUser } from "react-icons/fi";
// import { IoHomeOutline } from "react-icons/io5";
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../../store';
// import SearchBar from '../searchBar/SearchBar';
// import { logoutUser } from '../../services/authService';
// import './Nav.css';

// const Nav: React.FC = () => {
//     const firstName = useSelector((state: RootState) => state.user.userDetails.firstName);
//     const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
//     const userRole = useSelector((state: RootState) => state.user.userDetails.role);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     // Change the ref type to HTMLLIElement to match the <li> tag
//     const dropdownRef = useRef<HTMLLIElement>(null);
//     const [isDropdownOpen, setDropdownOpen] = useState(false);

//     const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

//     const handleLogout = () => {
//         const confirmed = window.confirm('Are you sure you want to logout?');
//         if (confirmed) {
//             logoutUser(dispatch);
//             navigate('/log-in'); // Navigate to the login page after logout
//         }
//     };

//     const closeDropdown = (e: MouseEvent) => {
//         if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
//             setDropdownOpen(false);
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', closeDropdown);
//         return () => document.removeEventListener('mousedown', closeDropdown);
//     }, []);

//     return (
//         <nav>
//             <ul>
//                 {userRole === 'admin' && (
//                     <li><Link to="/add-product"> + </Link></li>
//                 )}
//                 <li>
//                     <Link to="/cart">
//                         <MdOutlineShoppingCart />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/favorite">
//                         <CiHeart />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/contactUs">
//                         <BsTelephone />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/">
//                         <IoHomeOutline />
//                     </Link>
//                 </li>
//                 {/* Logo Image */}
//                 <li>
//                     <Link to="/">
//                         <img src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`} alt="logo" />
//                     </Link>
//                 </li>
//                 <li>
//                     <SearchBar />
//                 </li>
//                 <li className="dropdown" ref={dropdownRef}>
//                     <div className="icon-wrapper" onClick={toggleDropdown}>
//                         <FiUser />
//                     </div>
//                     {isDropdownOpen && (
//                         <div className="dropdown-content">
//                             {!isAuthenticated && (
//                                 <Link to="/log-in" onClick={() => navigate('/log-in')}>Login</Link>
//                             )}
//                             {isAuthenticated && (
//                                 <>
//                                     <Link to="/update-profile" onClick={() => setDropdownOpen(false)}>Update Profile</Link>
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
















































// src/components/navbar/Nav.tsx
// import React, { useState, useRef, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import { BsTelephone } from "react-icons/bs";
// import { FiUser } from "react-icons/fi";
// import { IoHomeOutline } from "react-icons/io5";
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../../store';
// import SearchBar from '../searchBar/SearchBar';
// import { logoutUser } from '../../services/authService';
// import './Nav.css';

// const Nav: React.FC = () => {
//     const firstName = useSelector((state: RootState) => state.user.userDetails.firstName);
//     const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
//     const userRole = useSelector((state: RootState) => state.user.userDetails.role);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const dropdownRef = useRef<HTMLLIElement>(null);
//     const [isDropdownOpen, setDropdownOpen] = useState(false);

//     const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

//     const handleLogout = () => {
//         const confirmed = window.confirm('Are you sure you want to logout?');
//         if (confirmed) {
//             logoutUser(dispatch);
//             navigate('/log-in');
//         }
//     };

//     const closeDropdown = (e: MouseEvent) => {
//         if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
//             setDropdownOpen(false);
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', closeDropdown);
//         return () => document.removeEventListener('mousedown', closeDropdown);
//     }, []);

//     return (
//         <nav>
//             <ul>
//                 {userRole === 'admin' && (
//                     <li><Link to="/add-product"> + </Link></li>
//                 )}
//                 <li>
//                     <Link to="/cart">
//                         <MdOutlineShoppingCart />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/favorite">
//                         <CiHeart />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/contactUs">
//                         <BsTelephone />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/">
//                         <IoHomeOutline />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/">
//                         <img src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`} alt="logo" />
//                     </Link>
//                 </li>
//                 <li>
//                     <SearchBar />
//                 </li>
//                 <li className="dropdown" ref={dropdownRef}>
//                     <div className="icon-wrapper" onClick={toggleDropdown}>
//                         <FiUser />
//                     </div>
//                     {isDropdownOpen && (
//                         <div className="dropdown-content">
//                             {!isAuthenticated && (
//                                 <Link to="/log-in" onClick={() => navigate('/log-in')}>Login</Link>
//                             )}
//                             {isAuthenticated && (
//                                 <>
//                                     <Link to="/update-profile" onClick={() => setDropdownOpen(false)}>Update Profile</Link>
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



















































// src/components/navbar/Nav.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { fetchProducts } from '../../slices/productSlice'; // Redux action to fetch products
import SearchBar from '../searchBar/SearchBar';
import { logoutUser } from '../../services/authService';
import './Nav.css';

const Nav: React.FC = () => {
    const firstName = useSelector((state: RootState) => state.user.userDetails.firstName);
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
    const userRole = useSelector((state: RootState) => state.user.userDetails.role);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const dropdownRef = useRef<HTMLLIElement>(null);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

    const handleLogout = () => {
        const confirmed = window.confirm('Are you sure you want to logout?');
        if (confirmed) {
            logoutUser(dispatch);
            navigate('/log-in'); // Navigate to the login page after logout
        }
    };

    const closeDropdown = (e: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
            setDropdownOpen(false);
        }
    };

    const handleLogoOrHomeClick = () => {
        // Reset products by dispatching fetchProducts action without filters
        dispatch(fetchProducts({ minPrice: '', maxPrice: '' }));
        navigate('/'); // Redirect to the home page
    };

    useEffect(() => {
        document.addEventListener('mousedown', closeDropdown);
        return () => document.removeEventListener('mousedown', closeDropdown);
    }, []);

    return (
        <nav>
            <ul>
                {userRole === 'admin' && (
                    <li><Link to="/add-product"> + </Link></li>
                )}
                <li>
                    <Link to="/cart">
                        <MdOutlineShoppingCart />
                    </Link>
                </li>
                <li>
                    <Link to="/favorite">
                        <CiHeart />
                    </Link>
                </li>
                <li>
                    <Link to="/contactUs">
                        <BsTelephone />
                    </Link>
                </li>
                <li>
                    <Link to="/" onClick={handleLogoOrHomeClick}>
                        <IoHomeOutline />
                    </Link>
                </li>
                {/* Logo Image */}
                <li>
                    <Link to="/" onClick={handleLogoOrHomeClick}>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`} alt="logo" />
                    </Link>
                </li>
                <li>
                    <SearchBar />
                </li>
                <li className="dropdown" ref={dropdownRef}>
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
                                    <span onClick={handleLogout}>Logout</span>
                                </>
                            )}
                        </div>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
