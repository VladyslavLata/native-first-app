import React from "react";
// import { useState } from "react";
import { useInputFocusedControl } from "../../hooks/useInputFocusedControl";
import { TextInput, StyleSheet } from "react-native";

export const Input = ({
  valueInput,
  placeholder,
  onChange,
  isFocusedInput,
  setIsFocusedInput,
  // onInputIsFocused,
}) => {
  const { isFocused, onBlurInput, onFocusedInput } = useInputFocusedControl(
    `${isFocusedInput}`,
    `${setIsFocusedInput}`
  );

  return (
    <TextInput
      style={[
        styles.input,
        {
          borderColor: isFocused ? "#FF6C00" : "#E8E8E8",
          backgroundColor: isFocused ? "#ffffff" : "#f6f6f6",
        },
      ]}
      value={valueInput}
      onChange={onChange}
      onBlur={onBlurInput}
      onFocus={() => {
        onFocusedInput();
        // onInputIsFocused(true);
      }}
      cursorColor={"#FF6C00"}
      placeholder={placeholder}
      placeholderTextColor={"#bdbdbd"}
      maxLength={40}
      onKeyPress={(keyPress) => console.log(keyPress.nativeEvent.key)}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 50,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 8,
    fontFamily: "Roboto-R",
    fontSize: 16,
    lineHeight: 1.18,
    color: "#212121",
  },
});
