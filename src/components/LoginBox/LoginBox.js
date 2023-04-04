import { View, StyleSheet, Text, Keyboard } from "react-native";
// import { useState, useEffect } from "react";

export const LoginBox = ({
  registration,
  header,
  children,
  keyboardIsVisible,
}) => {
  return (
    <View
      style={[
        styles.box,
        {
          paddingTop: registration ? 90 : 30,
          paddingBottom: registration
            ? keyboardIsVisible
              ? 20
              : 60
            : keyboardIsVisible
            ? 20
            : 130,
        },
      ]}
    >
      <Text style={styles.header}>{header}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  header: {
    marginBottom: 35,
    fontSize: 35,
    fontFamily: "Roboto-M",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",
  },
});
