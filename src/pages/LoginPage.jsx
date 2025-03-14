import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa"; // Icons
import "./LoginPage.css";

const LoginPage = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Load stored credentials from localStorage
    const savedPhone = localStorage.getItem("phone");
    const savedPassword = localStorage.getItem("password");

    if (savedPhone && savedPassword) {
      setPhone(savedPhone);
      setPassword(savedPassword);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const savedPhone = localStorage.getItem("phone");
    const savedPassword = localStorage.getItem("password");

    if (phone === savedPhone && password === savedPassword) {
      // ✅ Store phone number for Profile Page
      localStorage.setItem("phoneNumber", phone); 

      navigate("/dashboard"); // ✅ Directly redirect to Dashboard
    } else {
      alert("Invalid credentials!");
    }
  };

  const handleNavigateToSignup = () => {
    navigate("/signup"); // Navigate to Signup Page
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="input-group">
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

        {/* Buttons Container */}
        <div className="button-container">
          <button type="submit">
            <FaSignInAlt className="auth-icon" /> Login
          </button>
          <button type="button" onClick={handleNavigateToSignup}>
            <FaUserPlus className="auth-icon" /> Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
