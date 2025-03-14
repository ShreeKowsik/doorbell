import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import "./LoginPage.css"; // Reusing same styles

const SignupPage = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    
    if (!phone || !password) {
      alert("Please fill all fields!");
      return;
    }

    // Save credentials in localStorage
    localStorage.setItem("phone", phone);
    localStorage.setItem("password", password);

    alert("Signup successful! Redirecting to login...");
    navigate("/"); // Go back to LoginPage
  };

  return (
    <div className="login-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup} className="input-group">
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone Number"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        {/* Signup Button */}
        <div className="button-container">
          <button type="submit">
            <FaUserPlus className="auth-icon" /> Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
