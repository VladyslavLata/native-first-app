import { useState } from "react";

export const useVisibilityPassword = () => {
  const [currentIcon, setCurrentIcon] = useState("visibility");

  const toggleIcon = () => {
    if (currentIcon === "visibility") {
      setCurrentIcon("visibility-off");
    } else {
      setCurrentIcon("visibility");
    }
  };
};
