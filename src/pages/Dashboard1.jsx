import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaVideo, FaUser, FaHome, FaFolderOpen } from "react-icons/fa"; 
import styled from "styled-components";
import "./Dashboard.css";

const Dashboard = () => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [cameraOn, setCameraOn] = useState(false);
  const navigate = useNavigate();

  const startCamera = async () => {
    try {
      stopCamera(); // Ensure previous streams are stopped

      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.muted = true;
        videoRef.current.play();
      }

      streamRef.current = stream;
      setCameraOn(true);
    } catch (error) {
      console.error("Error accessing webcam:", error);
      alert("Error accessing camera. Check permissions!");
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    setCameraOn(false);
  };

  const toggleCamera = () => {
    if (cameraOn) {
      stopCamera();
    } else {
      startCamera();
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2 className="logo">Smart Doorbell</h2>
        <ul>
          <li onClick={() => navigate("/")} className="nav-button">
            <FaHome className="icon" /> Home
          </li>
          <li className="nav-button">
            <FaVideo className="icon" /> Live Feed
          </li>
          <li className="nav-button">
            <FaFolderOpen className="icon" /> Old Footage
          </li>
          <li onClick={() => navigate("/profile")} className="nav-button">
            <FaUser className="icon" /> Profile
          </li>
        </ul>
      </div>

      <div className="main-content">
        <h1 className="title">Live Video Feed</h1>
        <div className="video-container">
          <video ref={videoRef} autoPlay playsInline />
        </div>

        {/* Power Button */}
        <StyledWrapper>
          <input id="checkbox" type="checkbox" checked={cameraOn} onChange={toggleCamera} />
          <label className="switch" htmlFor="checkbox">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="slider">
              <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z" />
            </svg>
          </label>
        </StyledWrapper>
      </div>
    </div>
  );
};

// **Styled Power Button (Fixed)**
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  #checkbox {
    display: none;
  }

  .switch {
    position: relative;
    width: 70px;
    height: 70px;
    background-color: rgb(99, 99, 99);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid rgb(126, 126, 126);
    box-shadow: 0px 0px 3px rgb(2, 2, 2) inset;
    transition: all 0.3s ease-in-out;
  }

  .switch svg {
    width: 1.2em;
  }

  .switch svg path {
    fill: rgb(48, 48, 48);
  }

  #checkbox:checked + .switch {
    box-shadow: 0px 0px 10px rgb(151, 243, 255) inset,
      0px 0px 40px rgb(151, 243, 255), 0px 0px 100px rgb(151, 243, 255),
      0px 0px 5px rgb(151, 243, 255);
    border: 2px solid rgb(255, 255, 255);
    background-color: rgb(146, 180, 184);
  }

  #checkbox:checked + .switch svg {
    filter: drop-shadow(0px 0px 5px rgb(151, 243, 255));
  }

  #checkbox:checked + .switch svg path {
    fill: rgb(255, 255, 255);
  }
`;

export default Dashboard;
