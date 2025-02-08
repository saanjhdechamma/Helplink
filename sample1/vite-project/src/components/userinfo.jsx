import React from "react";
import "./userinfo.css";
import userImage from "../images/userprofile.png"; // Ensure correct path

const UserInfo = () => {
  return (
    <div className="user-info-container">
      <div className="header">Patient Request</div>

      <div className="profile-section">
        <img src={userImage} alt="User Profile" /> {/* Fixed image source */}
        <h2>Akanksha</h2>
        <p>Female, 20 y.e</p>
      </div>

      <div className="reason-box">
        <h3>Consultation</h3>
        <p>
          I've been feeling unwell for the past few days with a persistent cough
          and a mild fever. I'm also experiencing some fatigue and a sore
          throat. I'm worried it might be something serious, especially since I
          was in close contact with a colleague who had a bad cold recently. I'd
          appreciate your help in figuring out what's going on.
        </p>
      </div>

      <div className="action-buttons">
        <button className="accept-btn">Accept</button>
        <button className="decline-btn">Decline</button>
      </div>
    </div>
  );
};

export default UserInfo;
