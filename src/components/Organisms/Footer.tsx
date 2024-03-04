import React from "react";
import Animation from "../Molecules/Animation";
import "./style.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <span className="animation-text">
            {" "}
            <Animation text="Developed by Elie Nahed" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
