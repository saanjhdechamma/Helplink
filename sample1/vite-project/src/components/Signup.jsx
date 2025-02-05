

import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.css";
import signupImage from "../images/Signup1.png"; // Place the image in src folder

const Signup = () => {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100 signup-page">
      <div className="text-center">
        <img src={signupImage} alt="Illustration" className="img-fluid mb-3 signup-img" />
        <h2 className="fw-bold">HELLO, FRIEND!</h2>
        <p className="text-muted">Welcome to HelpLink</p>
        <p className="mt-2">Create your account to access our services</p>
        <button className="btn btn-primary rounded-pill px-4 py-2">Sign up</button>
      </div>
    </div>
  );
};

export default Signup;