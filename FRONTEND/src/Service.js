import React from "react";
import { Link } from "react-router-dom";
import service1 from "./images/Wedding2.jpeg";
import service2 from "./images/Birthday.avif";
import service3 from "./images/Corporate.jpg";

const Service = () => {
  return (
    <div id="services" className="services-page">
      <div className="header-container">
        <h1 className="services-title">Our Services</h1>
      </div>

      <div className="service-grid">
        {/* Wedding Service */}
        <div className="service-card">
          <img src={service1} alt="Wedding" className="service-image" />
          <h3 className="service-heading">Wedding</h3>
          <p className="service-description">
            Make your wedding a magical experience with personalized planning
            and stunning venues.
          </p>
          <Link to="/wedding" className="service-button">
            Explore
          </Link>
        </div>

        {/* Birthday Service */}
        <div className="service-card">
          <img src={service2} alt="Birthday" className="service-image" />
          <h3 className="service-heading">Birthday</h3>
          <p className="service-description">
            Celebrate your special day with unique themes, vibrant decorations,
            and unforgettable moments.
          </p>
          <Link to="/birthday" className="service-button">
            Explore
          </Link>
        </div>

        {/* Corporate Service */}
        <div className="service-card">
          <img src={service3} alt="Corporate" className="service-image" />
          <h3 className="service-heading">Corporate</h3>
          <p className="service-description">
            Host successful corporate events with professional venues and
            tailored services.
          </p>
          <Link to="/corporate" className="service-button">
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
