import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";
import googlePlayIcon from '../../assets/google-play-icon.svg'; // Replace with your actual icon paths
import appStoreIcon from '../../assets/app-store-icon.svg'; // Replace with your actual icon paths

const Hero = () => {


  
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Welcome to<br /> CrecheSpots <br />
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Find trusted creches, compare options, apply, and pay <br></br>all in one secure platform designed with families in mind.</span>
            <span>Discover Care, Find CrecheSpot.</span>
          </div>

          <div className="download-buttons">
        <a href="https://commiploy.netlify.app/" target="_blank" rel="noopener noreferrer" className="download-btn">
          <img src={googlePlayIcon} alt="Download on Google Play" className="download-icon" />
        </a>
        <a href="https://commiploy.netlify.app/" target="_blank" rel="noopener noreferrer" className="download-btn">
          <img src={appStoreIcon} alt="Download on the App Store" className="download-icon" />
        </a>
        </div>
        </div>
              {/* right side */}
              <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="houses" />
          </motion.div>
        </div>
        </div>
    </section>
  );
};

export default Hero;
