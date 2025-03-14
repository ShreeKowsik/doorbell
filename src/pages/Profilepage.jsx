import React from "react";
import { useNavigate } from "react-router-dom";
import { FaVideo, FaUser, FaHome, FaFolderOpen } from "react-icons/fa"; 
import "./Dashboard.css"; 

const ProfilePage = () => {
  const navigate = useNavigate();

 
  const phoneNumber = localStorage.getItem("phoneNumber") || "Not Available";
  const doorbellSerial = "DB-" + Math.floor(100000 + Math.random() * 900000);

  const handleNavigateToHome = () => {
    navigate("/");
  };

  const handleNavigateToDashboard = () => {
    navigate("/dashboard"); // ✅ Redirect to Dashboard (Live Feed)
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <div className="sidebar">
        <h2 className="logo">Smart Doorbell</h2>
        <ul>
          <li onClick={handleNavigateToHome} className="nav-button">
            <FaHome className="icon" /> Home
          </li>
          <li onClick={handleNavigateToDashboard} className="nav-button"> {/* ✅ Live Video Navigation */}
            <FaVideo className="icon" /> Live Feed
          </li>
          <li className="nav-button">
            <FaFolderOpen className="icon" /> Old Footage
          </li>
          <li className="nav-button">
            <FaUser className="icon" /> Profile
          </li>
        </ul>
      </div>

      {/* Profile Page Content */}
      <div className="main-content">
        <h1 className="title">Profile</h1>
        <div className="profile-details">
          <p><strong>Phone Number:</strong> {phoneNumber}</p>
          <p><strong>Doorbell Serial No:</strong> {doorbellSerial}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
