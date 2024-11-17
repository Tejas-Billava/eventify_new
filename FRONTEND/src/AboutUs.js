import React from "react";
import aboutImage1 from "./images/about1.jpeg";
import aboutImage2 from "./images/about2.jpg";
import harshalPic from "./images/harshal.jpg";
import tejasPic from "./images/tejas.jpg";
import anandPic from "./images/anand.jpg";
import sushantPic from "./images/sushant.jpg";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <h1 className="about-title">About Us</h1>

      <div className="about-container">
        <div className="about-content">
          <p>
            Welcome to <strong>Eventify</strong>, where we turn your dreams into
            unforgettable moments! We specialize in creating magical events that
            leave lasting memories. From grand weddings to corporate events and
            birthdays, we bring your vision to life.
          </p>
          <p>
            Our team of creative designers and expert planners ensures that
            every detail is perfect, so you can enjoy a seamless, stress-free
            experience.
          </p>
          <p>
            <strong>Let’s craft something extraordinary together!</strong>
          </p>
        </div>

        <div className="about-images">
          <img src={aboutImage1} alt="Event planning" className="about-image" />
          <img src={aboutImage2} alt="Celebration" className="about-image" />
        </div>
      </div>

      {/* Team Profile Section */}
      <div className="team-section">
        <h2 className="team-title">Meet Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img
              src={harshalPic}
              alt="Harshal Chavan"
              className="profile-image"
            />
            <h3>Harshal Chavan</h3>
            <p className="member-role">Front-End Developer</p>
            <p>
              Harshal is a passionate frontend developer who loves crafting
              user-friendly interfaces. He specializes in React and ensures a
              seamless and interactive experience for users.
            </p>
          </div>
          <div className="team-member">
            <img src={tejasPic} alt="Tejas Billava" className="profile-image" />
            <h3>Tejas Billava</h3>
            <p className="member-role">Backend Developer</p>
            <p>
              Tejas is a backend wizard who focuses on creating robust,
              scalable, and secure server-side logic using Node.js and Express.
              He ensures the backbone of the application is strong.
            </p>
          </div>
          <div className="team-member">
            <img src={anandPic} alt="Anand Shah" className="profile-image" />
            <h3>Anand Shah</h3>
            <p className="member-role">Front-End Developer</p>
            <p>
              Anand is an expert in turning designs into reality using HTML,
              CSS, and JavaScript. He ensures that the visual aspects of our
              platform are engaging and responsive.
            </p>
          </div>
          <div className="team-member">
            <img
              src={sushantPic}
              alt="Sushant Bodade"
              className="profile-image"
            />
            <h3>Sushant Bodade</h3>
            <p className="member-role">Backend Developer</p>
            <p>
              Sushant excels in managing databases and API integration. With
              expertise in MongoDB and SQL, he ensures smooth data flow and
              efficient backend operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
