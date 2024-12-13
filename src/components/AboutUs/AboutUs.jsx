import React from "react";
import './AboutUs.css'; // Assuming you have a separate CSS file for styling

const AboutUs = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="about-us-header">
        <h1 className="header-title">About Us</h1>
      </div>

      {/* About Us Sections */}
      <div className="about-us-container">
        {/* Mission Section */}
        <div className="about-us-section mission">
          <div className="content">
            <h2>Mission</h2>
            <p>At Creche Spots, our mission is to simplify and streamline the Early Childhood Development (ECD) application process, ensuring parents can easily find, compare, and apply to centers that meet their needs.</p>
            <p>We empower families to budget effectively and make informed decisions, creating a stress-free experience for both parents and institutions.</p>
          </div>
          <img src="./shaqeel_delisha.png" alt="Mission" className="section-image" />
        </div>

        {/* Vision Section */}
        <div className="about-us-section vision">
          <img src="./naeema_jungkook.png" alt="Vision" className="section-image" />
          <div className="content">
            <h2>Vision</h2>
            <p>We envision a future where Creche Spots transforms education access across all levels, from early childhood to tertiary institutions.</p>
            <p>By incorporating both public and private education sectors, we aim to become a trusted, nationwide brand that simplifies application processes and supports families and institutions through every stage of education.</p>
          </div>
        </div>

        {/* Values Section */}
        <div className="about-us-section values">
          <div className="content">
            <h2>Values</h2>
            <p>Transparency, teamwork, and community focus are at the heart of everything we do. We are driven by innovation and a commitment to providing practical, solution-oriented tools that benefit both parents and ECD centers.</p>
            <p>Through these values, we aim to create meaningful impact and build trust within the communities we serve.</p>
          </div>
          <img src="./delisha_read_to_the_ghetto.png" alt="Values" className="section-image" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
