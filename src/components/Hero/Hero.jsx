import "./Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* Centered text */}
        <div className="text-center">
          <h1 className="hero-title-text" style={{ color: "#3a5dc4" }}>
            Find the Perfect Creche for Your Child, Stress-Free!
          </h1>
        </div>

        {/* Image layout */}
        <div className="images-container">
          <img
            src="./naeema_jungkook.png"  // Corrected image path
            alt="Side Image 1"
            className="side-image"
          />
          <img
            src="./CrecheSpotsLogo.png"  // Corrected image path
            alt="Center Image"
            className="center-image"
          />
          <img
            src="./naeema_jungkook.png"  // Corrected image path
            alt="Side Image 2"
            className="side-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
