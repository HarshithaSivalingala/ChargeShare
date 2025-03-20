import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select"; // Import Select for time dropdown
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles
import Header from "../components/Header";
import "../screenstyling/HomeScreen/HomeBody.css";

const HomeScreen = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState({ label: "Now", value: "now" });

    // Time options (like Uber)
    const timeOptions = [
        { label: "Now", value: "now" },
        { label: "10:00 AM", value: "10:00" },
        { label: "11:00 AM", value: "11:00" },
        { label: "12:00 PM", value: "12:00" },
        { label: "1:00 PM", value: "13:00" },
        { label: "2:00 PM", value: "14:00" },
        { label: "3:00 PM", value: "15:00" },
        { label: "4:00 PM", value: "16:00" },
        { label: "5:00 PM", value: "17:00" }
    ];

    return (
        <div className="home">
            
            <div className="body-container">
                {/* Left side */}
                <div className="left-side">
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

                        {/* Filters Wrapper - Below Search Container */}
                        <div className="filters-wrapper">
                            <div className="filters-container">
                                {/* Uber-Style Date Picker */}
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    className="filter-box"
                                    dateFormat="EEEE, MMM d" // Format: "Monday, Jan 1"
                                    customInput={<button className="filter-box">📅 {selectedDate.toDateString()}</button>}
                                    popperPlacement="bottom-start"
                                />

                                {/* Uber-Style Time Picker */}
                                <Select
                                    options={timeOptions}
                                    value={selectedTime}
                                    onChange={setSelectedTime}
                                    className="time-dropdown"
                                    styles={{
                                        control: (base) => ({
                                            ...base,
                                            backgroundColor: "white",
                                            border: "1px solid #ccc",
                                            borderRadius: "5px",
                                            width: "130px",
                                            textAlign: "center",
                                            cursor: "pointer"
                                        }),
                                        menu: (base) => ({
                                            ...base,
                                            borderRadius: "5px",
                                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
                                        })
                                    }}
                                />
                            </div>
                            <button className="see-prices-button">See prices</button>
                            <p className="login-message">Log in to see your recent activity</p>
                        </div>
                    </div>
                </div>

                {/* Right side with Centered Map */}
                <div className="right-side">
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
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;
