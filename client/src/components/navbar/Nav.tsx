// import React from 'react';
// import { Link } from 'react-router-dom';
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import { BsTelephone } from "react-icons/bs";
// import { FiUser } from "react-icons/fi";
// import { IoHomeOutline } from "react-icons/io5";
// import Logo from '../../assets/images/Logo.png';
// import './Nav.css';

// const Nav: React.FC = () => {
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
//                         <img src={Logo} alt="logo" />
//                     </Link>
//                 </li>
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
// import SearchBar from '../searchBar/SearchBar';
// import './Nav.css';

// const Nav: React.FC = () => {
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
// import SearchBar from '../searchBar/SearchBar';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../store';
// import './Nav.css';

// const Nav: React.FC = () => {
//     const user = useSelector((state: RootState) => state.user);

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
//                 <li>
//                     <span>{user.isAuthenticated ? (user.role === 'admin' ? 'Admin' : user.firstName) : 'Guest'}</span>
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default Nav;






































// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import { BsTelephone } from "react-icons/bs";
// import { FiUser } from "react-icons/fi";
// import { IoHomeOutline } from "react-icons/io5";
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../../store';
// import { setToken, setUserDetails } from '../../slices/userSlice';
// import axios from 'axios';
// import './Nav.css';

// const Nav: React.FC = () => {
//     const user = useSelector((state: RootState) => state.user);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             dispatch(setToken(token));
//             axios.get('/api/user', {
//                 headers: { Authorization: `Bearer ${token}` },
//             })
//                 .then((response) => {
//                     const { firstName, role } = response.data;
//                     dispatch(setUserDetails({ firstName, role }));
//                 })
//                 .catch((error) => {
//                     console.error('Error fetching user:', error);
//                     dispatch(setToken(null)); // Clear token on error
//                 });
//         }
//     }, [dispatch]);

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
//                     <input
//                         type="text"
//                         value={user.isAuthenticated ? (user.firstName || 'Guest') : 'Guest'}
//                         readOnly
//                         style={{ border: 'none', background: 'transparent', fontSize: '1rem' }}
//                     />
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default Nav;









































// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import { BsTelephone } from "react-icons/bs";
// import { FiUser } from "react-icons/fi";
// import { IoHomeOutline } from "react-icons/io5";
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../../store';
// import { setToken, setUserDetails } from '../../slices/userSlice';
// import SearchBar from '../searchBar/SearchBar';
// import axios from 'axios';
// import './Nav.css';

// const Nav: React.FC = () => {
//     const user = useSelector((state: RootState) => state.user);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             dispatch(setToken(token));
//             axios.get('/api/user', {
//                 headers: { Authorization: `Bearer ${token}` },
//             })
//                 .then((response) => {
//                     const { firstName, role } = response.data;
//                     dispatch(setUserDetails({ firstName, role }));
//                 })
//                 .catch((error) => {
//                     console.error('Error fetching user:', error);
//                     dispatch(setToken(null)); // Clear token on error
//                 });
//         }
//     }, [dispatch]);

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
//                 <li>
//                     <input
//                         type="text"
//                         value={user.isAuthenticated ? (user.firstName || 'Guest') : 'Guest'}
//                         readOnly
//                         style={{ border: 'none', background: 'transparent', fontSize: '1rem' }}
//                     />
//                 </li>
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
// import SearchBar from '../searchBar/SearchBar';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../store';
// import './Nav.css';

// const Nav: React.FC = () => {
//     const user = useSelector((state: RootState) => state.user);

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
//                 <li>
//                     <span>{user.isAuthenticated ? user.firstName || 'Admin' : 'Guest'}</span>
//                 </li>
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
// import SearchBar from '../searchBar/SearchBar';
// import './Nav.css';

// const Nav: React.FC = () => {
//     return (
//         <nav>
//             <ul>
//                 <li><Link to="/cart"><MdOutlineShoppingCart /></Link></li>
//                 <li><Link to="/favorite"><CiHeart /></Link></li>
//                 <li><Link to="/contactUs"><BsTelephone /></Link></li>
//                 <li><Link to="/log-in"><FiUser /></Link></li>
//                 <li><Link to="/"><IoHomeOutline /></Link></li>
//                 <li><Link to="/"><img src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`} alt="logo" /></Link></li>
//                 <li><SearchBar /></li>
//             </ul>
//         </nav>
//     );
// };

// export default Nav;



































import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import SearchBar from '../searchBar/SearchBar';
import './Nav.css';

const Nav: React.FC = () => {
    const firstName = useSelector((state: RootState) => state.user.userDetails.firstName);
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

    return (
        <nav>
            <ul>
                <li> <Link to="/add-product"> + </Link></li>
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
                    <Link to="/log-in">
                        <FiUser />
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <IoHomeOutline />
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`} alt="logo" />
                    </Link>
                </li>
                <li>
                    <SearchBar />
                </li>
                {isAuthenticated && (
                    <li>
                        <span>Welcome, {firstName}</span>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Nav;
