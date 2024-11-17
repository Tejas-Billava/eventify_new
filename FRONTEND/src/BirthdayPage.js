import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import venue1 from "./images/Banquete.webp";
import venue2 from "./images/Outdoor.jpg";
import venue3 from "./images/ClubParty.jpg";

const BirthdayPage = () => {
  return (
    <div className="birthday-page">
      <h1 className="page-header">Birthday Party Venues</h1>
      <p className="page-description">
        Discover the perfect venue for your special day! Whether you’re looking
        for elegance, fun, or a lively vibe, our venues offer customizable
        packages to match your needs.
      </p>

      <div className="venue-images">
        {/* Banquet Hall */}
        <div className="venue-item">
          <img src={venue1} alt="Banquet Hall" className="venue-image" />
          <h2 className="venue-name">Banquet Hall</h2>
          <p className="venue-overview">
            Celebrate in style with our luxurious banquet hall, equipped with
            premium amenities and customizable decor to match your chosen theme.
          </p>
          <ul className="venue-details">
            <li>
              <strong>Capacity:</strong> Up to 150 guests
            </li>
            <li>
              <strong>Themes:</strong> Royal Gala, Fairy Tale, Hollywood Night
            </li>
            <li>
              <strong>Add-Ons:</strong> Professional photographer, live music,
              custom birthday cakes
            </li>
            <li>
              <strong>Entertainment:</strong> Interactive games, photo booths,
              and live band performances
            </li>
            <li>
              <strong>Safety:</strong> Sanitized venue, contactless services
              available
            </li>
          </ul>
          <Link to="/book-now">
            <button className="birthday-button">Book Now</button>
          </Link>
        </div>

        {/* Outdoor Party */}
        <div className="venue-item">
          <img src={venue2} alt="Outdoor Party" className="venue-image" />
          <h2 className="venue-name">Outdoor Party</h2>
          <p className="venue-overview">
            Enjoy a lively outdoor celebration with a scenic backdrop. Ideal for
            nature lovers and those who prefer an open-air experience.
          </p>
          <ul className="venue-details">
            <li>
              <strong>Capacity:</strong> Up to 200 guests
            </li>
            <li>
              <strong>Themes:</strong> Tropical Fiesta, Garden Wonderland,
              Rustic Charm
            </li>
            <li>
              <strong>Add-Ons:</strong> Fireworks display, live barbecue,
              outdoor lighting
            </li>
            <li>
              <strong>Entertainment:</strong> Bonfire, lawn games, and acoustic
              music sessions
            </li>
            <li>
              <strong>Safety:</strong> Sanitized seating, outdoor distancing
              options
            </li>
          </ul>
          <Link to="/book-now">
            <button className="birthday-button">Book Now</button>
          </Link>
        </div>

        {/* Club Party */}
        <div className="venue-item">
          <img src={venue3} alt="Club Party" className="venue-image" />
          <h2 className="venue-name">Club Party</h2>
          <p className="venue-overview">
            Dance the night away with our vibrant club party venue, complete
            with premium sound systems, dazzling light effects, and a
            high-energy atmosphere.
          </p>
          <ul className="venue-details">
            <li>
              <strong>Capacity:</strong> Up to 100 guests
            </li>
            <li>
              <strong>Themes:</strong> Neon Glow Party, Retro Disco, Masquerade
              Ball
            </li>
            <li>
              <strong>Add-Ons:</strong> VIP lounge, bottle service, private
              bartenders
            </li>
            <li>
              <strong>Entertainment:</strong> DJ, light shows, karaoke, and live
              performers
            </li>
            <li>
              <strong>Safety:</strong> Regular sanitization, capacity control
              for social distancing
            </li>
          </ul>
          <Link to="/book-now">
            <button className="birthday-button">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BirthdayPage;
