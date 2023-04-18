import { useState, useEffect } from "react";
import { Keyboard } from "react-native";

export const useKeyboardVisibility = () => {
  const [keyboardIsVisible, setKeyboardisVisible] = useState(false);

  // console.log(keyboardIsVisible);
  useEffect(() => {
    const showKeyboard = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardisVisible(true);
    });
    const hideKeyboard = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardisVisible(false);
    });

    return () => {
      showKeyboard.remove();
      hideKeyboard.remove();
    };
  }, []);

  return { keyboardIsVisible };
};
