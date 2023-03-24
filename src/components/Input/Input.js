import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

export const Input = ({ value, placeholder, onChangeText }) => {
  [isFocused, setisFocused] = useState(false);
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      onFocus={() => setisFocused(true)}
      onBlur={() => setisFocused(false)}
      cursorColor={"#FF6C00"}
      placeholder={placeholder}
      placeholderTextColor={"#bdbdbd"}
      maxLength={30}
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
    borderColor: isFocused ? "#FF6C00" : "#E8E8E8",
    backgroundColor: isFocused ? "#ffffff" : "#f6f6f6",
    color: "#212121",
  },
});
