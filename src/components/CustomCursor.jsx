import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [innerPosition, setInnerPosition] = useState({ x: -20, y: -20 });
  const [outerPosition, setOuterPosition] = useState({ x: -20, y: -20 });
  const [isVisible, setIsVisible] = useState(true);
    const [isActive, setIsActive] = useState(false);

  // For Tracking Mouse Movements
  useEffect(() => {
    const moveCursor = (e) => {
      setInnerPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  /* For Smooth Outer Cursor Animation */
  useEffect(() => {
    const followOuterCursor = () => {
      // Calculate the difference between inner and outer cursor positions
      const xDiff = innerPosition.x - outerPosition.x;
      const yDiff = innerPosition.y - outerPosition.y;

      setOuterPosition((prev) => ({
        /* // Update the outer cursor position by moving it towards the inner cursor 
        // by 10% of the distance, thus creating a trailing effect */
        x: prev.x + xDiff * 0.1,
        y: prev.y + yDiff * 0.1,

        /* // The 0.1 is the speed of the cursor (10% of the distance between 
        // the inner and outer circles). 
        // It is called the easing factor. It takes value between 0 and 1. 
        // Higher value means faster movement. */
      }));
    };

    /* // Use requestAnimationFrame for smoother animations
    // This will ensure that the outer cursor follows the inner cursor smoothly */
    const animationFrameId = requestAnimationFrame(followOuterCursor);  

    return () => cancelAnimationFrame(animationFrameId);
  }, [innerPosition, outerPosition]);

  // Add hover effect for interactive elements
  useEffect(() => {
    const handleInteractiveEnter = () => setIsActive(true);
    const handleInteractiveLeave = () => setIsActive(false);
    const selectors = "a, button, [role='button'], input, textarea, select, label";
    const elements = document.querySelectorAll(selectors);

    elements.forEach((el) => {
      el.addEventListener("mouseenter", handleInteractiveEnter);
      el.addEventListener("mouseleave", handleInteractiveLeave);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleInteractiveEnter);
        el.removeEventListener("mouseleave", handleInteractiveLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Outer Circle */}
      <div
        style={{
          position: "fixed", // So it stays in place even when scrolling
          top: `${outerPosition.y}px`,
          left: `${outerPosition.x}px`,
          pointerEvents: "none",  /* // So it doesn't interfere with the 
          // inner circle and ensures that it doesn't block clicks */
          zIndex: 9998,
          transform: `translate(-50%, -50%) scale(${isActive ? 1.5 : 1})`, /* // Centers the circle on the mouse 
          cursor. 
          // Position should be made fixed for this to work. 
          // And also adding a scale effect when hovering over interactive elements 
          // and back to normal when not*/
          transition: "opacity 0.3s ease, transform 0.2s cubic-bezier(.4,2,.6,1)", /* // Smooth transition for opacity by using ease.
          // Smooth transition for the scale effect by using cubic-bezier which makes the scaling animation feel springy and dynamic */
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className="border-2 border-accent-light dark:border-accent-dark"
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
          }}
        />  {/* Makes a circular cursor with a border. i.e. Outer Cursor */}
      </div>

      {/* Inner Circle */}
      <div
        style={{
          position: "fixed",  // So it stays in place even when scrolling
          top: `${innerPosition.y}px`,
          left: `${innerPosition.x}px`,
          pointerEvents: "none",  /* // So it doesn't interfere with the 
          // outer circle and ensures that it doesn't block clicks */
          zIndex: 9999, 
          transform: `translate(-50%, -50%) scale(${isActive ? 1.2 : 1})`, /* // Centers the circle on the mouse 
          cursor. 
          // Position should be made fixed for this to work. 
          // And also adding a scale effect when hovering over interactive elements 
          // and back to normal when not */
          transition: "opacity 0.3s ease, transform 0.2s cubic-bezier(.4,2,.6,1)", /* // Smooth transition for opacity by using ease.
          // Smooth transition for the scale effect by using cubic-bezier which makes the scaling animation feel springy and dynamic */
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className="bg-accent-light dark:bg-accent-dark"
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
          }}
        />  {/* Makes a circular cursor with a background color. i.e. Inner Cursor */}
      </div>
    </>
  );
};

export default CustomCursor;
