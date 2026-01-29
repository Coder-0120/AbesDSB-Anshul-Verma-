import React, { useState } from "react";
import "../Components/LoginPage.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password!");
      return;
    }

    // Later you can verify credentials with backend or localStorage
    alert("Login successful!");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">📚 BookApp Login</h2>

        <form onSubmit={handleSubmit} className="login-form">
          <label className="login-label">Email</label>
          <input
            type="email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="login-label">Password</label>
          <input
            type="password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <p className="login-text">
          Don’t have an account?{" "}
          <a href="/register" className="login-link">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
