import React, { StrictMode } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { RegistrationScreen } from "./src/screens/RegistrationScreen";
import { LoginScreen } from "./src/screens/LoginScreen";

export default function App() {
  return (
    <>
      <StrictMode>
        {/* <React.StrictMode> */}
        <RegistrationScreen />
        {/* <LoginScreen /> */}
        {/* <View style={styles.container}>
        <Text>Open up App.js to stalasdashhgdsfsf sd hj</Text>
        <StatusBar style="auto" />
      </View> */}
        {/* </React.StrictMode> */}
      </StrictMode>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 2,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
