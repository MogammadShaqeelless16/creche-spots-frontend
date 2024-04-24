import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";
const Hero = () => {

  const [crecheCount, setCrecheCount] = useState(null);

  useEffect(() => {
    // Fetch creche count from backend API
    const fetchCrecheCount = async () => {
      try {
        const response = await fetch('/residency/allresd'); // Replace '/api/creches/count' with your actual API endpoint
        const data = await response.json();
        setCrecheCount(data.count);
      } catch (error) {
        console.error('Error fetching creche count:', error);
      }
    };

    fetchCrecheCount();
  }, []);
  
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
              Welcome to<br /> CrecheSpot <br />
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Find a variety of creche within your area with price range</span>
            <span>Discover Care, Find CrecheSpot.</span>
          </div>

          <SearchBar/>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
            <span>
                {crecheCount !== null ? (
                  <CountUp start={0} end={crecheCount} duration={4} />
                ) : (
                  'Loading...'
                )}{' '}
                <span>+</span>
              </span>
              <span className="secondaryText">Creche Registered</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={1} /> <span>+</span>
              </span>
              <span className="secondaryText">Creche app</span>
            </div>
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
