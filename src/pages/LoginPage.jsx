import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./LoginPage.css";

const LoginPage = () => {
  const [phone, setPhone] = useState("1234567890");
  const [password, setPassword] = useState("abcd");
  const navigate = useNavigate(); // Hook to navigate

  const handleLogin = (e) => {
    e.preventDefault();
    if (phone === "1234567890" && password === "abcd") {
      alert("Login successful!");
      navigate("/dashboard"); // Redirect to Dashboard
    } else {
      alert("Invalid credentials!");
    }
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
