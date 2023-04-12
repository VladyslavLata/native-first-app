import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const DefaultCreatePosrtScreen = ({ navigation }) => {
  console.log(navigation);
  // setBackWithCreatePost(navigation.navigate("PostsScreen"));
  return (
    <View style={styles.wrapp}>
      {/* <TouchableOpacity style={{ position: "absolute", left: 0, top: -6 }}>
        <Text style={{ color: "red" }}>FFFFFF</Text>
      </TouchableOpacity> */}
      <Text>CreatePostsScreen!</Text>
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
