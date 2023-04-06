import React, { StrictMode, useCallback } from "react";
// import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import { RegistrationScreen } from "./src/screens/RegistrationScreen";
import { LoginScreen } from "./src/screens/LoginScreen";
import { Home } from "./src/screens/MainScreens/Home";
import { useAppRouter } from "./router";

// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const AuthStack = createNativeStackNavigator();
  const router = useAppRouter(true);

  const [fontsLoaded] = useFonts({
    "Roboto-M": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-R": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      {router}
      {/* <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          name="Registration"
          options={{ headerShown: false }}
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <AuthStack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />
      </AuthStack.Navigator> */}
    </NavigationContainer>
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
