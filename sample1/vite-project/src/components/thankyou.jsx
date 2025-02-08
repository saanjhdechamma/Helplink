import React from "react";
import "./thankyou.css";
import thankyouImage from "../images/thank.png"; // Import the image correctly

const ThankYou = () => {
  return (
    <div className="thankyou-container">
      <img src={thankyouImage} alt="Thank You" /> {/* Use imported image */}
      <h2>Your experience matters!</h2>
      <p>
        Thank you for using HelpLab. Please take a moment to give us your
        feedback.
      </p>

      <div className="button-group">
        <button className="feedback-btn">Give Feedback</button>
        <button className="no-thanks-btn">No, Thanks</button>
      </div>

      <a href="/" className="back-home">← Go back to home page</a>
    </div>
  );
};

export default ThankYou;
