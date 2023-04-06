import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const PostsScreen = () => {
  return (
    <View style={styles.wrapp}>
      <Text>PostsScreen!</Text>
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
