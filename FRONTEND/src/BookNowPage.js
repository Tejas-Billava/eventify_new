import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import emailjs for sending emails
import VenueMap from "./VenueMap"; // Import the VenueMap component
import "./BookNowPage.css";

function BookNowPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [eventType, setEventType] = useState("");
  const [subVenueType, setSubVenueType] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [venue, setVenue] = useState("");
  const [isBookingSuccessful, setIsBookingSuccessful] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const venueOptions = {
    birthday: ["Banquete", "Outdoor", "Club"],
    wedding: ["Banquete", "Outdoor", "Destination"],
    corporate: ["Conference Room", "Hotel Room", "Community Centre"],
  };

  const eventVenues = {
    "Andheri Banquet Hall": { lat: 19.1195, lng: 72.8467 },
    "Bandra Outdoor Venue": { lat: 19.0594, lng: 72.8302 },
    "Juhu Club": { lat: 19.0962, lng: 72.8277 },
    "Marine Lines Conference Center": { lat: 18.943, lng: 72.8236 },
  };

  const handleEventTypeChange = (event) => {
    setEventType(event.target.value);
    setSubVenueType("");
  };

  const sendConfirmationEmail = (bookingDetails) => {
    emailjs
      .send(
        "service_tag0jdx", // Your EmailJS service ID
        "template_84i40qg", // Your EmailJS template ID
        bookingDetails,
        "c055HJivjsQA8TNmQ" // Your EmailJS user ID
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          alert("Confirmation email sent successfully!");
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert(`Email failed to send: ${error.text || "Unknown error"}`);
        }
      );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const bookingData = {
      name,
      email,
      date,
      time,
      eventType,
      subVenueType,
      message,
      paymentMethod,
      venue,
    };

    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setIsBookingSuccessful(true);
        setShowSuccessMessage(true);

        // Send a confirmation email after a successful booking
        sendConfirmationEmail(bookingData);

        // Reset form fields after successful submission
        setName("");
        setEmail("");
        setDate("");
        setTime("");
        setMessage("");
        setEventType("");
        setSubVenueType("");
        setPaymentMethod("creditCard");
        setVenue("");
      } else {
        console.error("Booking failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="book-now-page">
      <h1>Book Now</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="date">Event Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <label htmlFor="time">Event Time:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <label htmlFor="eventType">Event Type:</label>
        <select
          id="eventType"
          value={eventType}
          onChange={handleEventTypeChange}
          required
        >
          <option value="">Select event type</option>
          <option value="birthday">Birthday</option>
          <option value="wedding">Wedding</option>
          <option value="corporate">Corporate</option>
        </select>

        {eventType && (
          <>
            <label htmlFor="subVenueType">Venue Type:</label>
            <select
              id="subVenueType"
              value={subVenueType}
              onChange={(e) => setSubVenueType(e.target.value)}
              required
            >
              <option value="">Select venue type</option>
              {venueOptions[eventType].map((venue, index) => (
                <option key={index} value={venue}>
                  {venue}
                </option>
              ))}
            </select>
          </>
        )}

        <label htmlFor="venue">Event Venue:</label>
        <select
          id="venue"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
          required
        >
          <option value="">Select event venue</option>
          {Object.keys(eventVenues).map((venueOption, index) => (
            <option key={index} value={venueOption}>
              {venueOption}
            </option>
          ))}
        </select>

        <label htmlFor="message">Special Requests/Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
        ></textarea>

        <label htmlFor="paymentMethod">Payment Method:</label>
        <select
          id="paymentMethod"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="creditCard">Credit Card</option>
          <option value="debitCard">Debit Card</option>
          <option value="upi">UPI</option>
          <option value="cash">Cash</option>
        </select>

        <button type="submit">Book Now</button>
      </form>

      {showSuccessMessage && (
        <p className="success-message">
          Booking successful! A confirmation email has been sent.
        </p>
      )}

      <h3>Event Venue Location</h3>
      <VenueMap location={eventVenues[venue]} />
    </div>
  );
}

export default BookNowPage;
