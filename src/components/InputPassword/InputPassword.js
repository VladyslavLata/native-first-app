import React from "react";
import { useState } from "react";
import { useInputFocusedControl } from "../../hooks/useInputFocusedControl";
import { TextInput, StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const InputPassword = ({ value, placeholder, onChangeText }) => {
  // [isFocused, setisFocused] = useState(false);
  // console.log(isFocused);
  const [currentIcon, setCurrentIcon] = useState("visibility");
  const { isFocused, onBlurInput, onFocusedInput } = useInputFocusedControl();

  const toggleIcon = () => {
    if (currentIcon === "visibility") {
      setCurrentIcon("visibility-off");
    } else {
      setCurrentIcon("visibility");
    }
  };

  return (
    <View style={styles.wrapp}>
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
        secureTextEntry={currentIcon === "visibility"}
        onFocus={onFocusedInput}
        onBlur={onBlurInput}
        cursorColor={"#FF6C00"}
        placeholder={placeholder}
        placeholderTextColor={"#bdbdbd"}
        maxLength={30}
      />
      <TouchableOpacity
        style={styles.iconBox}
        activeOpacity={1}
        onPress={toggleIcon}
      >
        <MaterialIcons name={currentIcon} size={24} color="#212121" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapp: {
    position: "relative",
    width: "100%",
  },
  input: {
    width: "100%",
    height: 50,
    paddingLeft: 15,
    paddingRight: 75,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    lineHeight: 1.18,
    color: "#212121",
  },
  iconBox: {
    position: "absolute",
    top: 0,
    right: 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: "100%",
    borderRadius: 8,
    backgroundColor: "transparent",
  },
});
