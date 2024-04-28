import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
import { useAuth0 } from "@auth0/auth0-react";
import "../Styles/Hero.css";

function Navbar() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { logout, user } = useAuth0();

  const [nav, setNav] = useState(false);
  // const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };
  console.log(user);

  // const handleChatBtnClick = () => {
  //   if (!isButtonDisabled) {
  //     toast.info("Experiencing high traffic, Please wait a moment.", {
  //       position: toast.POSITION.TOP_CENTER,
  //       onOpen: () => setIsButtonDisabled(true),
  //       onClose: () => setIsButtonDisabled(false),
  //     });
  //   }
  // };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          Meta <span className="navbar-sign"> Care</span>
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/donation" className="navbar-links">
            Donation
          </Link>
        </li>
        <li>
          <a href="#services" className="navbar-links">
            Services
          </a>
        </li>
        <li>
          <a href="#about" className="navbar-links">
            About
          </a>
        </li>
        <li>
          <a href="#reviews" className="navbar-links">
            Reviews
          </a>
        </li>
        <li>
          <a href="#doctors" className="navbar-links">
            Doctors
          </a>
        </li>
        <li>{isAuthenticated && <p>{user.nickname}</p>}</li>

        {isAuthenticated ? (
          <li>
            <button
              className="text-appointment-btn"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          </li>
        ) : (
          <li>
            <button
              className="text-appointment-btn"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </button>
          </li>
        )}
      </ul>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#reviews">
              Reviews
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#doctors">
              Doctors
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
