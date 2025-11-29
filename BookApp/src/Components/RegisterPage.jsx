import React, { useState } from "react";
import "../Components/RegisterPage.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Registration successful!");
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">📚 BookApp Register</h2>

        <form onSubmit={handleSubmit} className="register-form">
          <label className="register-label">Full Name</label>
          <input
            type="text"
            className="register-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="register-label">Email</label>
          <input
            type="email"
            className="register-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="register-label">Password</label>
          <input
            type="password"
            className="register-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label className="register-label">Confirm Password</label>
          <input
            type="password"
            className="register-input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit" className="register-button">
            Register
          </button>
           <p className="login-text">
          Already have an account?{" "}
          <a href="/login" className="login-link">
            login here
          </a>
        </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
