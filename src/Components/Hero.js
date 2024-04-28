import React, { useEffect, useState } from "react";
import Doctor from "../Assets/doctor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };
  const handleDonationsBtnClick = () => {
    navigate("/donation");
  };

  useEffect(() => {
    const countElement = document.getElementById("count"); //count animations for recive patients
    const doctorCountElement = document.getElementById("doctor-count");
    const experienceCountElement = document.getElementById("experience-count");
    const experienceEndValue = 10; // Change this to your desired end value for years of experience
    const endValue = 1000;
    const doctorEndValue = 20; // Change this to your desired end value for doctors
    const duration = 2000; // Animation duration in milliseconds

    // Start the counting animation
    startCountAnimation(doctorCountElement, doctorEndValue, duration);
    startCountAnimation(countElement, endValue, duration);
    startCountAnimation(experienceCountElement, experienceEndValue, duration);
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">❤️ Where Health comes first</p>
          <h2 className="text-title">
            Bringing Healthcare Access to Everyone, Anytime, Anywhere
          </h2>
          <p className="text-descritpion">
            We are dedicated to transform healthcare accessibility through
            innovative technology. Our platform simplifies the fair distribution
            of donations and services. Join us in our mission to create
            healthier and equitable communities.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
          </button>
          <button
            className="text-appointment-btn"
            style={{ marginRight: "15px" }}
            type="button"
            onClick={handleDonationsBtnClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Get Donations
          </button>

          <div className="text-stats">
            <div className="text-stats-container">
              <p class="count" id="count">
                0+
              </p>
              <p>Receive Patients</p>
            </div>

            <div className="text-stats-container">
              <p class="count" id="doctor-count">
                0+
              </p>
              <p>Expert Doctors</p>
            </div>

            <div className="text-stats-container">
              <p class="count" id="experience-count">
                0+
              </p>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}
// This is animation count
function startCountAnimation(target, endValue, duration) {
  let startValue = 0;
  let startTime;

  function updateCount(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const percentage = Math.min(progress / duration, 1);
    const currentValue = Math.floor(
      startValue + percentage * (endValue - startValue)
    );
    target.textContent = currentValue.toLocaleString() + "+"; // Add a "+" sign
    if (percentage < 1) {
      requestAnimationFrame(updateCount);
    }
  }
  target.textContent = startValue.toLocaleString() + "+";

  requestAnimationFrame(updateCount);
}

export default Hero;
