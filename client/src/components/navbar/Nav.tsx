import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import Logo from '../../assets/images/Logo.png'; // Adjust the path as necessary
import './Nav.css';
const Nav: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/cart">
                        <MdOutlineShoppingCart />
                    </Link>
                </li>
                <li>
                    <Link to="/like">
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
                        <img src={Logo} alt="logo" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;