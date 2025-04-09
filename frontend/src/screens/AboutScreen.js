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

            {/* Fixing a Charger at Home Section */}
            <section className="fixing-charger-section">
                <div className="fixing-content">
                    <div className="image-content">
                        <img src="/home-charger.jpg" alt="Home Charger" />
                    </div>
                    <div className="text-content">
                        <h2>Fixing a Charger at Home</h2>
                        <p>
                            Install an EV charger at home for the ultimate convenience. Our platform connects you
                            with certified professionals who can install and maintain your charging station.
                        </p>
                    </div>
                </div>
            </section>

            {/* Finding Charging Stations Nearby Section */}
            <section className="finding-charger-section">
                <div className="finding-content">
                    <div className="text-content">
                        <h2>Find Charging Stations Nearby</h2>
                        <p>
                            Locate the nearest EV charging stations effortlessly. Our interactive map and real-time
                            availability updates ensure that you always find a charger when you need one.
                        </p>
                    </div>
                    <div className="image-content">
                        <img src="/nearby-chargers.jpg" alt="Nearby Chargers" />
                    </div>
                </div>
            </section>
        </div>
    );
};
export default AboutScreen;