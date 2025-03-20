import React from "react";
import "../screenstyling/AboutScreen.css";

const AboutScreen = () => {
    return (
        <div className="about-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Connecting EV Owners with Charging Stations</h1>
                    <p>
                        A platform that enables EV owners to discover available charging stations in real-time,
                        ensuring a seamless and reliable charging experience.
                    </p>
                </div>
            </section>

            {/* Details Section */}
            <section className="details-section">
                <div className="details-content">
                    <div className="text-content">
                        <h2>How It Works</h2>
                        <p>
                            Our system provides a location-based discovery feature for finding nearby EV chargers.
                            Users can book a charging slot dynamically, make secure payments, and leave feedback
                            for a better community experience.
                        </p>
                    </div>
                    <div className="image-content">
                        <img src="/ev-charging.jpg" alt="EV Charging" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutScreen;
