import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const WeddingPage = () => {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/venues");
        const data = await response.json();
        setVenues(data);
      } catch (error) {
        console.error("Error fetching venues:", error);
      }
    };
    fetchVenues();
  }, []);

  return (
    <div className="wedding-page">
      <h1 className="page2-header">Wedding Venues</h1>
      <p className="page-description3">
        Make your special day truly unforgettable with our stunning wedding
        venues. From elegant halls to beautiful outdoor settings, we offer
        packages tailored to your dreams.
      </p>
      <div
        className="wedding-images"
        style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
      >
        {venues.map((venue) => (
          <div
            className="wedding-item corporate-item"
            key={venue._id}
            style={{ width: "300px", textAlign: "center" }}
          >
            <img
              src={venue.image}
              alt={venue.name}
              style={{
                width: "100%", // Ensures the image fills the container
                height: "200px", // Sets a consistent height for all images
                objectFit: "cover", // Maintains aspect ratio and fills the space without distortion
                borderRadius: "10px", // Optional: adds rounded corners to images
              }}
            />
            <h2 className="wedding-name corporate-name">{venue.name}</h2>
            <ul className="venue-details corporate-details">
              {venue.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <Link to="/bookings">
              <button
                style={{
                  backgroundColor: "#FF6363",
                }}
                className="plan-button corporate-button"
              >
                Book Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingPage;
