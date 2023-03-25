import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const InputPassword = ({ value, placeholder, onChangeText }) => {
  [isFocused, setisFocused] = useState(false);

  const [currentIcon, setCurrentIcon] = useState("visibility");

  const toggleIcon = () => {
    if (currentIcon === "visibility") {
      setCurrentIcon("visibility-off");
    } else {
      setCurrentIcon("visibility");
    }
  };
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
      secureTextEntry={true}
      onFocus={() => setisFocused(true)}
      onBlur={() => setisFocused(false)}
      cursorColor={"#FF6C00"}
      placeholder={placeholder}
      placeholderTextColor={"#bdbdbd"}
      maxLength={25}
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