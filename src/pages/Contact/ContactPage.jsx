import React, { useState } from "react";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";
import "./Contact.css"; // Import your CSS file for styling
import Contact from "../../components/Contact/Contact";
const ContactPage = () => {
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
    <Contact/>
      <div className="blog-boxes">
        <div className="blog-box">
          <h3>How to get your Creche registered</h3>
          <p>Fill in the application form to get registered with us.</p>
          <button
            onClick={() => window.open('https://forms.gle/fayc1r1vy8pfEbGD7', '_blank')}
          >
            Apply
          </button>
        </div>
        <div className="blog-box">
          <h3>How to use Creche Spots app</h3>
          <p>Use the document to show you a step by step guide on how to use the app.</p>
          <button>Download</button>
        </div>
        <div className="blog-box">
          <h3>Donate to Creches</h3>
          <p>Donate to creches registered with Creche Spots.</p>
          <button>Read More</button>
        </div>
        
        {/* Add more blog boxes as needed */}
      </div>
    </div>
  );
};

export default ContactPage;
