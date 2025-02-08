import React from "react";
import "./Homepage.css";

// Import images
import img1 from "../images/consultation.png";
import img2 from "../images/stroke.png";
import img3 from "../images/skin_conditions.png";
import img4 from "../images/emergency.png";
import img5 from "../images/breathing_problem.png";
import img6 from "../images/heart_disease.png";
import img7 from "../images/diabetes.png";
import img8 from "../images/bleeding.png";
import img9 from "../images/arthritis.png";

// Categories with correct imported images
const categories = [
  { name: "Consultation", image: img1 },
  { name: "Stroke", image: img2 },
  { name: "Skin conditions", image: img3 },
  { name: "Heart Disease", image: img6 },
  { name: "Breathing problem", image: img5 },
  { name: "Emergency", image: img4 },
  { name: "Diabetes", image: img7 },
  { name: "Bleeding", image: img8 },
  { name: "Arthritis", image: img9 }
];

const Homepage = () => {
  return (
    <div className="homepage-container">
      {/* Header Section */}
      <div className="header">
        <div className="profile-icon">&#9776;</div>
        <div className="welcome-text">
          <h2>Welcome</h2>
          <p>Akanksha</p>
        </div>
        <div className="location-icon">📍</div>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search volunteer" />
      </div>

      {/* Categories */}
      <h3 className="categories-title">Categories</h3>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.image} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>

      {/* More Button */}
      <div className="more-button">More ⬇</div>

      {/* Footer Buttons */}
      <div className="footer-buttons">
        <button className="nearby-volunteer">Near by volunteer</button>
        <button className="urgent-help">Urgent help requests</button>
      </div>
    </div>
  );
};

export default Homepage;
