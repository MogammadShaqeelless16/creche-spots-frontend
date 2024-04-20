import React from "react";
import "./SplashScreen.css";
import logo from "/logo.gif";
const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <div>
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default SplashScreen;