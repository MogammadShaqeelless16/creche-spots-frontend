import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* Left side */}
        <div className="flexColStart f-left">
          <img src="./brand.png" alt="" width={120} />
          <span className="secondaryText">
            To create a world where high-quality, accessible, <br />
            and safe childcare solutions empower families.
          </span>
        </div>

        {/* Right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">CrecheSpots is developed by Soft Glitch</span>

          {/* Social Icons Section */}
          <div className="flexCenter f-social-icons">
            <FaFacebookF size={24} className="social-icon" />
            <FaInstagram size={24} className="social-icon" />
            <FaTiktok size={24} className="social-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
