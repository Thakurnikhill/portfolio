import { useEffect, useState } from "react";

const useTouchScreen = () => {
  const [isTouchScreen, setIsTouchScreen] = useState(false);

  useEffect(() => {
    const checkTouchScreen = () => {
      setIsTouchScreen("ontouchstart" in window || navigator.maxTouchPoints > 0);
    };

    checkTouchScreen();
    window.addEventListener("resize", checkTouchScreen);

    return () => {
      window.removeEventListener("resize", checkTouchScreen);
    };
  }, []);

  return isTouchScreen;
};

export default useTouchScreen;
