import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/Loginpage";
import SignupPage from "./pages/Signuppage"; // Imported Signup Page
import Dashboard from "./pages/Dashboard1"; // Ensure this path is correct

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route redirects to LoginPage */}
        <Route path="/" element={<LoginPage />} />
        
        {/* Signup route */}
        <Route path="/signup" element={<SignupPage />} />

        {/* Dashboard route */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Handle unknown routes by redirecting to the login page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
