import React from "react";
import "./Homepage.css";

const categories = [
  { name: "Consultation", image: "consultation.jpg" },
  { name: "Stroke", image: "stroke.jpg" },
  { name: "Skin conditions", image: "skin_conditions.jpg" },
  { name: "Heart Disease", image: "heart_disease.jpg" },
  { name: "Breathing problem", image: "breathing_problem.jpg" },
  { name: "Emergency", image: "emergency.jpg" },
  { name: "Diabetes", image: "diabetes.jpg" },
  { name: "Bleeding", image: "bleeding.jpg" },
  { name: "Arthritis", image: "arthritis.jpg" }
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