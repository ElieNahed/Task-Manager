import React from "react";
import Box from "@mui/material/Box";

interface AlertProps {
  text: string;
}

const Alert: React.FC<AlertProps> = ({ text }) => {
  return (
    <Box
      sx={{
        border: "2px solid #365486", // Dark blue
        borderRadius: "5px",
        backgroundColor: "#7FC7D9", // Light blue
        padding: "10px",
        textAlign: "center",
        fontWeight: "bold",
        width: "90%", // Set width to 90% of the container
        maxWidth: "40rem", // Set max width for larger screens
        position: "absolute",
        top: "80%", // Position in the center vertically
        left: "50%", // Position in the center horizontally
        transform: "translate(-50%, -50%)", // Center the alert
        zIndex: 999, // Ensure it appears above other elements
        boxShadow: "3px 3px 5px 5px rgba(0, 0, 0, 0.4)", // Same as original
      }}
    >
      {text}
    </Box>
  );
};

export default Alert;
