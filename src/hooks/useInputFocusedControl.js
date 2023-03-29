import { useState } from "react";

export const useInputFocusedControl = (isFocused, setisFocused) => {
  [isFocused, setisFocused] = useState(false);

  const onFocusedInput = () => {
    setisFocused(true);
  };

  const onBlurInput = () => {
    setisFocused(false);
  };

  return { isFocused, onFocusedInput, onBlurInput };
};
