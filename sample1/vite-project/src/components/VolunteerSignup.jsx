import React, { useState } from "react";
import "./VolunteerSignup.css";
// import volunteerImage from "../images/VolunteerSignup1.png"; 


const VolunteerSignup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    number: "",
    email: "",
    password: "",
    languages: "",
    availability: "Available",
    helpType: "",
    medicalTraining: "",
    certification: "",
    transport: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Volunteer Account Created Successfully!");
  };

  return (
    <div className="volunteer-signup-container">
      <div className="volunteer-signup-card">
        <h2 className="signup-title">SIGN UP PAGE</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="fullName" placeholder="Volunteer full name" onChange={handleChange} required />
          <input type="tel" name="number" placeholder="Volunteer Number" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Volunteer Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Volunteer Password" onChange={handleChange} required />
          <input type="text" name="languages" placeholder="Languages Spoken (To help with communication)" onChange={handleChange} required />

          <select name="availability" onChange={handleChange} required>
            <option value="Available">Available</option>
            <option value="Not Available">Not Available</option>
          </select>

          <input type="text" name="helpType" placeholder="Preferred Help Type" onChange={handleChange} required />
          <input type="text" name="medicalTraining" placeholder="Any Medical Training? (Yes/No)" onChange={handleChange} required />
          <input type="text" name="certification" placeholder="If Yes, Certification (Optional)" onChange={handleChange} />
          <input type="text" name="transport" placeholder="Mode of Transport (Bike, Car, On Foot, None)" onChange={handleChange} required />

          <div className="terms">
            <input type="checkbox" name="termsAccepted" onChange={handleChange} required />
            <label>Terms of Use and Privacy Policy</label>
          </div>

          <button type="submit" className="create-account-btn">Create Account</button>
        </form>

        <p className="login-text">Already have an Account? <a href="#">Log in</a></p>
      </div>
    </div>
  );
};

export default VolunteerSignup;