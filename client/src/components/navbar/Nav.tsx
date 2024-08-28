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
    const userRole = useSelector((state: RootState) => state.user.userDetails.role); // Get the user role

    return (
        <nav>
            <ul>
                {userRole === 'admin' && (
                    <li> <Link to="/add-product"> + </Link></li> // Show add product link only for admins
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
