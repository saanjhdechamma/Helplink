import React, { useState } from "react";
import "./Feedback.css";

const Feedback = () => {
  const [rating, setRating] = useState(null);
  const [note, setNote] = useState("");

  const handleSubmit = () => {
    if (rating !== null) {
      alert(`Feedback Submitted!\nRating: ${rating}\nNote: ${note}`);
      setRating(null);
      setNote("");
    } else {
      alert("Please select a rating.");
    }
  };

  return (
    <div className="page-container">
      <div className="feedback-container">
        <h3>Help us enhance HelpLink!</h3>
        <p>Rate your experience and let us know how we can improve.</p>
        <textarea
          className="feedback-note"
          placeholder="Write your note here..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <div className="feedback-emojis">
          {["😡", "😞", "😐", "🙂", "😀"].map((emoji, index) => (
            <button
              key={index}
              className={`emoji-btn ${rating === index ? "selected" : ""}`}
              onClick={() => setRating(index)}
            >
              {emoji}
            </button>
          ))}
        </div>
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
        <p className="back-link">↩ Go back to home page</p>
      </div>

      <div className="footer">
        <img src="/images/illustration.png" alt="Illustration" className="footer-img" />
        <div className="social-icons">
          <a href="#" className="icon">🌐</a>
          <a href="#" className="icon">📘</a>
          <a href="#" className="icon">📸</a>
          <a href="#" className="icon">🔗</a>
        </div>
        <p className="connect-text">CONNECT WITH US</p>
      </div>
    </div>
  );
};

export default Feedback;
