import React, { useState } from "react";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";
import "./Contact.css"; // Import your CSS file for styling

const Contact = () => {
  const { isError, isLoading } = useProperties();
  const [selectedIssue, setSelectedIssue] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", selectedIssue, message);
    setSelectedIssue("");
    setMessage("");
    // Additional logic to handle form submission to email can be added here
  };

  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader height="80" width="80" radius={1} color="#4066ff" aria-label="puff-loading" />
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="issue">Select Issue:</label>
          <select id="issue" value={selectedIssue} onChange={(e) => setSelectedIssue(e.target.value)}>
            <option value="">Select</option>
            <option value="Technical">Technical Issue</option>
            <option value="Billing">Billing Issue</option>
            <option value="General">General Inquiry</option>
          </select>
          <textarea
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        <div className="contact-details">
          <h3>Contact Numbers:</h3>
          <p>Customer Service: 123-456-7890</p>
          <p>Sales: 987-654-3210</p>
        </div>
      </div>
      <div className="blog-boxes">
        <div className="blog-box">
          <h3>How to Use CrecheSpots: A Beginner's Guide</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum odio ut nisl tempus, vitae bibendum lacus consectetur.</p>
          <button>Read More</button>
        </div>
        <div className="blog-box">
          <h3>Tips and Tricks for Making the Most of CrecheSpots</h3>
          <p>Nulla fringilla, tortor eu efficitur fermentum, tortor massa accumsan justo, vel dapibus nisl justo vel libero.</p>
          <button>Read More</button>
        </div>
        {/* Add more blog boxes as needed */}
      </div>
    </div>
  );
};

export default Contact;
