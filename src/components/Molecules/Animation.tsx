import React, { useState, useEffect } from "react";
import "../../App.css";

interface AnimationProps {
  text: string;
}

const Animation: React.FC<AnimationProps> = ({ text }) => {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = text;
      if (!isDeleting) {
        if (typedText === currentPhrase) {
          setIsDeleting(true);
          setTimeout(() => {
            setIsDeleting(false);
            setLoopNum((prevLoopNum) => (prevLoopNum + 1) % 2);
          }, 5000); // Increase the timeout to slow down the animation (e.g., 5000 milliseconds = 5 seconds)
        } else {
          setTypedText((prevText) => {
            return currentPhrase.substring(0, prevText.length + 1);
          });
        }
      } else {
        if (typedText === "") {
          setIsDeleting(false);
          setLoopNum((prevLoopNum) => (prevLoopNum + 1) % 2);
        } else {
          setTypedText((prevText) => {
            return currentPhrase.substring(0, prevText.length - 1);
          });
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, 100); // Adjust the timeout to control the typing speed
    return () => clearTimeout(typingTimeout);
  }, [typedText, loopNum, isDeleting, text]);

  return (
    <div className="typing-animation-container">
      <h1 className="typing-animation">{typedText}</h1>
    </div>
  );
};

export default Animation;
