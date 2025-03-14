import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaVideo, FaCogs, FaHome, FaFolderOpen } from "react-icons/fa"; // Removed FaBell
import "./Dashboard.css";

const Dashboard = () => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          streamRef.current = stream;
        }
      })
      .catch((error) => {
        console.error("Error accessing webcam:", error);
      });

    return () => stopCamera();
  }, []);

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  const handleNavigateToLogin = () => {
    stopCamera();
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2 className="logo">Smart Doorbell</h2>
        <ul>
          <li onClick={handleNavigateToLogin} className="nav-button">
            <FaHome className="icon" /> Home
          </li>
          <li className="nav-button">
            <FaVideo className="icon" /> Live Feed
          </li>
          <li className="nav-button">
            <FaFolderOpen className="icon" /> Old Footage
          </li>
          <li className="nav-button">
            <FaCogs className="icon" /> Settings
          </li>
        </ul>
      </div>

      <div className="main-content">
        <h1 className="title">Live Video Feed</h1>
        <div className="video-container">
          <video ref={videoRef} autoPlay playsInline />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;