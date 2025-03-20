import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink instead of Link
import "../screenstyling/HomeScreen/Header.css"; // Adjust the path as necessary

const Header = () => {
    return (
        <header className="header">
            <div className="title">
                <h1>ChargeShare</h1>
            </div>
            <nav className="menu">
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Find Charger</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink></li>
                    <li><NavLink to="/help" className={({ isActive }) => isActive ? "active-link" : ""}>Help</NavLink></li>
                    <li><NavLink to="/signup" className={({ isActive }) => isActive ? "active-link" : ""}>Sign Up</NavLink></li>
                    <li><NavLink to="/login" className={({ isActive }) => isActive ? "active-link" : ""}>Log In</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
