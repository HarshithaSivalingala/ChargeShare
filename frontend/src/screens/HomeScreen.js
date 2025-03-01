import React from "react";
import Header from "../components/Header";
import "../componentstyling/HomeBody.css";

const HomeScreen = () => {
    return (
        <div className="home">
            <Header />
            <div className="body-container">
                {/* Left side */}
                <div className="left-side">
                    {/* Map Container */}
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509474!2d144.95373531550495!3d-37.81627974202117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1636030290469!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: "none", borderRadius: "20px" }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>

                    <div className="search-wrapper">
                        {/* Search Container */}
                        <div className="search-container">
                            <input 
                                type="text" 
                                placeholder="Search for a charger..." 
                                className="search-bar"
                            />
                            <button className="search-button">Search</button>
                        </div>

                        {/* Filters Wrapper - Now Below Search Container */}
                        <div className="filters-wrapper">
                            <div className="filters-container">
                                <button className="filter-box">📅 Today</button>
                                <button className="filter-box">⏰ Now ▼</button>
                            </div>
                            <button className="see-prices-button">See prices</button>
                            <p className="login-message">Log in to see your recent activity</p>
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div className="right-side">
                    <p>Your content goes here.</p>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;
