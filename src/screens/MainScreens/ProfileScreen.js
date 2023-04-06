import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const ProfileScreen = () => {
  return (
    <View style={styles.wrapp}>
      <Text>ProfileScreen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapp: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
