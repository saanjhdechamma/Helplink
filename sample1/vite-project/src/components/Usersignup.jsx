import React, { useState } from "react";
import "./Usersignup.css";
// import UsersignupImage from "../images/Usersignup1.png";

const Usersignup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    number: "",
    emergencyContact: "",
    email: "",
    password: "",
    address: "",
    bloodGroup: "",
    medicalConditions: "",
    medications: "",
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
    alert("Account Created Successfully!");
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
         <img src={UsersignupImage} alt="Illustration" className="img-fluid mb-3 Usersignup-img" />
        <h2 className="signup-title">SIGN UP PAGE</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="fullName" placeholder="User full Name" onChange={handleChange} required />
          <input type="date" name="dateOfBirth" placeholder="User date of birth" onChange={handleChange} required />
          <input type="text" name="gender" placeholder="User gender" onChange={handleChange} required />
          <input type="tel" name="number" placeholder="User Number" onChange={handleChange} required />
          <input type="tel" name="emergencyContact" placeholder="Emergency Contact (Alternate Mobile Number of Family/Friend)" onChange={handleChange} required />
          <input type="email" name="email" placeholder="User Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="User Password" onChange={handleChange} required />
          <input type="text" name="address" placeholder="User Address" onChange={handleChange} required />
          <input type="text" name="bloodGroup" placeholder="User Blood group" onChange={handleChange} required />
          <input type="text" name="medicalConditions" placeholder="Any Existing Medical Conditions (e.g., Diabetes, etc.)" onChange={handleChange} />
          <input type="text" name="medications" placeholder="Current Medications (If Any)" onChange={handleChange} />
          
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

export default Usersignup;