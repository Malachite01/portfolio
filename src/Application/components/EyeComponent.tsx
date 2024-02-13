import React, { useEffect, useRef } from "react";

interface EyeComponentProps {
  follow?: boolean;
  white?: boolean;
}

const EyeComponent = ({ follow, white}: EyeComponentProps) => {
  const irisRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (follow && irisRef.current) {
        irisRef.current.style.animation = "none";
        const eyeRect = irisRef.current.parentElement?.getBoundingClientRect();
        if (eyeRect) {
          const eyeCenterX = eyeRect.left + eyeRect.width / 2;
          const eyeCenterY = eyeRect.top + eyeRect.height / 2;

          const deltaX = e.clientX - eyeCenterX;
          const deltaY = e.clientY - eyeCenterY;

          const angle = Math.atan2(deltaY, deltaX);
          const radius = Math.min(eyeRect.width / 2, eyeRect.height / 2);

          let irisX = eyeCenterX + radius * Math.cos(angle);
          let irisY = eyeCenterY + radius * Math.sin(angle);

          // Apply limits
          irisX = Math.min(Math.max(irisX, eyeCenterX - 50), eyeCenterX + 50);
          irisY = Math.min(Math.max(irisY, eyeCenterY - 10), eyeCenterY + 10);

          irisRef.current.style.transform = `translate(${irisX - eyeCenterX}px, ${irisY - eyeCenterY}px)`;
        }
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [follow]);

  return (
    <div className="eye-container">
      <div className={"eye" + (white ? " white" : "")}>
        <div className={"eyelash" + (white ? " white" : "")}></div>
        <div className={"eyelash" + (white ? " white" : "")}></div>
        <div className={"eyelash" + (white ? " white" : "")}></div>
        <div className={"eyelash" + (white ? " white" : "")}></div>
        <div className={"eyelash" + (white ? " white" : "")}></div>
        <div className={"iris" + (white ? " white" : "")} ref={irisRef}></div>
      </div>
    </div>
  );
};

export default EyeComponent;
