import React from "react";
import { Link } from "react-router-dom";

import venue1 from "./images/Conference.jpeg";
import venue2 from "./images/HotelMeet.jpg";
import venue3 from "./images/Community.jpg";

const CorporatePage = () => {
  return (
    <div className="corporate-page">
      <h1 className="page-header3">Corporate Venues</h1>
      <p className="page-description3">
        Whether it's a formal conference, a productive business meeting, or a
        vibrant networking event, we have the perfect venue for your corporate
        needs. Explore our flexible packages designed to enhance professionalism
        and ensure success.
      </p>
      <div className="corporate-images">
        {/* Conference Room */}
        <div className="corporate-item">
          <img src={venue1} alt="Conference Room" className="corporate-image" />
          <h2 className="corporate-name">Conference Room</h2>
          <p className="venue-overview">
            Equipped with state-of-the-art facilities, our conference rooms are
            ideal for presentations, workshops, and panel discussions.
          </p>
          <ul className="corporate-details">
            <li>
              <strong>Capacity:</strong> Up to 50 attendees
            </li>
            <li>
              <strong>Facilities:</strong> High-speed Wi-Fi, projectors, sound
              systems
            </li>
            <li>
              <strong>Add-Ons:</strong> Custom catering, breakout rooms, on-site
              tech support
            </li>
            <li>
              <strong>Entertainment:</strong> Professional speakers,
              team-building activities
            </li>
          </ul>
          <Link to="/book-now">
            <button className="corporate-button">Book Now</button>
          </Link>
        </div>

        {/* Hotel Meeting Room */}
        <div className="corporate-item">
          <img
            src={venue2}
            alt="Hotel Meeting Room"
            className="corporate-image"
          />
          <h2 className="corporate-name">Hotel Meeting Room</h2>
          <p className="venue-overview">
            Host your meetings in a comfortable and professional setting with
            premium hospitality and modern amenities.
          </p>
          <ul className="corporate-details">
            <li>
              <strong>Capacity:</strong> Up to 30 attendees
            </li>
            <li>
              <strong>Facilities:</strong> Boardroom setup, whiteboards,
              refreshments
            </li>
            <li>
              <strong>Add-Ons:</strong> Luxury accommodations, executive dining
              options
            </li>
            <li>
              <strong>Entertainment:</strong> Networking events, cocktail
              receptions
            </li>
          </ul>
          <Link to="/book-now">
            <button className="corporate-button">Book Now</button>
          </Link>
        </div>

        {/* Community Centre */}
        <div className="corporate-item">
          <img
            src={venue3}
            alt="Community Centre"
            className="corporate-image"
          />
          <h2 className="corporate-name">Community Centre</h2>
          <p className="venue-overview">
            A versatile space perfect for large corporate gatherings,
            team-building events, and charity functions.
          </p>
          <ul className="corporate-details">
            <li>
              <strong>Capacity:</strong> Up to 100 attendees
            </li>
            <li>
              <strong>Facilities:</strong> Open layout, parking, stage setup
            </li>
            <li>
              <strong>Add-Ons:</strong> Custom stage design, catering, live
              streaming
            </li>
            <li>
              <strong>Entertainment:</strong> DJ, live bands, guest speakers
            </li>
          </ul>
          <Link to="/book-now">
            <button className="corporate-button">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CorporatePage;
