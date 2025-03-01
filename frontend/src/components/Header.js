import React from "react";
import "../componentstyling/Header.css";

const Header = () => {
    return (
        <header className="header">
            <div classname="title">
            <h1>ChargeShare</h1>
            </div>
            <nav className="menu">
        <ul>
          <li><a href="/find-charger">Find Charger</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/help">Help</a></li>
          <li><a href="/signup">Sign Up</a></li>
          <li><a href="/login">Log In</a></li>
        </ul>
      </nav>
    </header>

    );
};
export default Header;