import React from "react";
import { FaSpinner } from "react-icons/fa";
import { useAppContext } from "../Context/appContext";

const LoadingScreen = () => {
  const { isLoading } = useAppContext();

  if (!isLoading) {
    return null; // Don't render anything if isLoading is false
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        fontSize: "5rem",
        height: "100%",
        background: "rgba(255, 255, 255, 0.8)", // A semi-transparent white background
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999, // Make sure the loading screen is on top of other content
      }}
    >
      <FaSpinner className="spin-icon" />
    </div>
  );
};

export default LoadingScreen;
