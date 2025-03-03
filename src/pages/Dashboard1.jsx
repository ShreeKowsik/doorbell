import React, { useEffect, useRef } from "react";
import { FaVideo, FaCogs, FaBell, FaHome, FaFolderOpen } from "react-icons/fa"; // Import the Old Footage icon
import "./Dashboard.css";

const Dashboard = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Access the user's webcam
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error("Error accessing webcam:", error);
      });
  }, []);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">Smart Doorbell</h2>
        <ul>
          <li><FaHome className="icon" /> Home</li>
          <li><FaVideo className="icon" /> Live Feed</li>
          <li><FaFolderOpen className="icon" /> Old Footage</li> {/* Added Old Footage icon */}
          <li><FaBell className="icon" /> Alerts</li>
          <li><FaCogs className="icon" /> Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="title">Live Video Feed</h1>
        <div className="video-container">
          {/* Updated video streaming implementation */}
          <video ref={videoRef} autoPlay playsInline />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

