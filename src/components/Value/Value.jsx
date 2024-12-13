import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import googlePlayIcon from '../../assets/google-play-icon.svg';
import appStoreIcon from '../../assets/app-store-icon.svg';
import "./Value.css";

const Value = () => {
  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* Left side */}
        <div className="flexColStart v-left">
          <h1 className="download-title" style={{ color: "#3a5dc4" }}>
            Download the app!
          </h1>

          <div className="download-buttons">
            <a
              href="https://crechespot.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn"
            >
              <img src={googlePlayIcon} alt="Download on Google Play" className="download-icon" />
            </a>
            <a
              href="https://crechespot.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn"
            >
              <img src={appStoreIcon} alt="Download on the App Store" className="download-icon" />
            </a>
          </div>

          <div className="image-container">
            <img src="./mavis_lerato_naeema.png" alt="App preview" />
          </div>
        </div>

        {/* Right side */}
        <div className="v-right">
          <div className="image-placeholder">
            {/* Placeholder for an image */}
            <img src="./mavis_lerato_naeema.png" alt="Placeholder" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
