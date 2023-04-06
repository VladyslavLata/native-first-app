import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { PostsScreen } from "./PostsScreen";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { ProfileScreen } from "./ProfileScreen";

export const Home = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator initialRouteName="PostsScreen">
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: "Публікації",
          tabBarShowLabel: true,
          headerTitleStyle: {
            color: "#212121",
            fontSize: 17,
            fontFamily: "Roboto-M",
            lineHeight: 22,
          },
          headerStyle: { backgroundColor: "red" },
          tabBarLabelStyle: { color: "red" },
          headerTitleAlign: "center",
        }}
      />
      <Tabs.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  wrapp: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
