import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/Loginpage";
import SignupPage from "./pages/Signuppage";
import Dashboard from "./pages/Dashboard1"; // Ensure this path is correct
import ProfilePage from "./pages/Profilepage"; // ✅ Import Profile Page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<ProfilePage />} /> {/* ✅ Profile Page Route */}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
