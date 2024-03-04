import React from "react";
import Animation from "../Molecules/Animation";

const Footer: React.FC = () => {
  return (
    <footer className="bg-#365486-200 py-4">
      <div className="container mx-auto">
        <div className="flex justify-center ">
          <Animation text="This website made by Elie Nahed" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
