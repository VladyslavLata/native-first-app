import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { FontAwesome } from "@expo/vector-icons";

export const CreatePostsScreen = () => {
  const [photo, setPhoto] = useState(null);
  return (
    <View style={styles.wrapp}>
      <View style={styles.wrappCamera}>
        <Camera style={styles.camera}>
          <TouchableOpacity style={styles.snap} activeOpacity={0.6}>
            <FontAwesome
              name="camera"
              size={24}
              color={photo ? "#ffffff" : "#bdbdbd"}
            />
          </TouchableOpacity>
        </Camera>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapp: {
    flex: 1,
    // width: "100%",
    // height: "100%",
    paddingTop: 30,
    paddingHorizontal: 15,
    backgroundColor: "red",
    // justifyContent: "center",
    // alignItems: "center",
  },
  wrappCamera: {
    // position: "relative",
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderRadius: 8,
    overflow: "hidden",
  },
  camera: {
    width: "100%",
    height: 240,
    backgroundColor: "#f6f6f6",
    justifyContent: "center",
    alignItems: "center",
  },
  snap: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#ffffff",
  },
});
