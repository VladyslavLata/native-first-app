import React from "react";
import { useState } from "react";
import { useInputFocusedControl } from "../../hooks/useInputFocusedControl";
import { TextInput, StyleSheet } from "react-native";

export const Input = ({ value, placeholder, onChangeText }) => {
  const { isFocused, onBlurInput, onFocusedInput } = useInputFocusedControl();

  return (
    <TextInput
      style={[
        styles.input,
        {
          borderColor: isFocused ? "#FF6C00" : "#E8E8E8",
          backgroundColor: isFocused ? "#ffffff" : "#f6f6f6",
        },
      ]}
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlurInput}
      onFocus={onFocusedInput}
      cursorColor={"#FF6C00"}
      placeholder={placeholder}
      placeholderTextColor={"#bdbdbd"}
      maxLength={40}
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
    fontSize: 16,
    lineHeight: 1.18,
    color: "#212121",
  },
});
