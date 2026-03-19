import React, { useState } from "react";
import axios from "axios";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit =async (e) => {
    e.preventDefault();
    try{
        const res=await axios.post("http://localhost:5000/login", { email, password });
        if(res.status===200 && res.data.success){
            alert("Login successful");
        }
         else{
        alert("Login failed");
    }
    }
    catch(err){
        alert("server error ");
    }
   
    
  };

  return (
    <>
      <div className="container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>

      {/* CSS at bottom */}
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f2f2f2;
        }

        .container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .login-form {
          background: white;
          padding: 30px;
          border-radius: 10px;
          width: 300px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          text-align: center;
        }

        .login-form h2 {
          margin-bottom: 20px;
        }

        .login-form input {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .login-form button {
          width: 100%;
          padding: 10px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .login-form button:hover {
          background: #0056b3;
        }
      `}</style>
    </>
  );
}