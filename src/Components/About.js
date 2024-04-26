import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to the Healthcare Assistance Platform! We're dedicated to
          transforming healthcare access for underserved communities. Through
          advanced web technologies and AI-driven assessments, we empower users
          to take control of their well-being. Our commitment to transparency,
          security, and community support drives us to create a positive social
          impact. Join us on this journey towards healthier, more resilient
          communities.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Make a Schedule"
          description="Choose the date and time that suits you best, and let our dedicated team of medical professionals ensure your well-being with personalized care."
        />

        <SolutionStep
          title="Get Donations"
          description="MetaCare offers a pioneering online donation request system. It streamlines access to donations.Your donation matters. It fuels our mission to ensure everyone has access to quality healthcare. Join us in making a difference today."
        />

        <SolutionStep
          title="Get Your Medical Equipments"
          description="Your donations enable us to obtain vital medical equipment, improving care for all. Get essential medical equipment delivered straight to your doorstep with your donations. Your support brings healthcare convenience to your home and helps us serve you better."
        />
      </div>
    </div>
  );
}

export default About;
