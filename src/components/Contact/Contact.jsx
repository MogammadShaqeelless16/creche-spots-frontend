import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { FaEnvelope } from "react-icons/fa"; // General email icon
import { IoIosInformationCircle } from "react-icons/io"; // Info icon
import { GiReceiveMoney } from "react-icons/gi"; // Finance icon
import { FaHandshake } from "react-icons/fa"; // Sales icon

const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            Contact us to add your creche to our database. We are always ready to help by providing the best services for you. We believe a good place to live can make your life better.
          </span>

          <div className="flexColStart contactModes">
            {/* third row (emails) */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FaEnvelope size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Support</span>
                  </div>
                </div>
                <a href="mailto:support@crechespots.co.za" className="flexCenter button">Email us</a>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <IoIosInformationCircle size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Info</span>
                  </div>
                </div>
                <a href="mailto:info@crechespots.co.za" className="flexCenter button">Email us</a>
              </div>
            </div>

            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <GiReceiveMoney size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Finance</span>
                  </div>
                </div>
                <a href="mailto:finance@crechespots.co.za" className="flexCenter button">Email us</a>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FaHandshake size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Sales</span>
                  </div>
                </div>
                <a href="mailto:sales@crechespots.co.za" className="flexCenter button">Email us</a>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./confused_parents.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
