import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { PostsScreen } from "./PostsScreen";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { ProfileScreen } from "./ProfileScreen";

export const Home = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
      initialRouteName="PostsScreen"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerTitleStyle: {
          color: "#212121",
          fontSize: 17,
          fontFamily: "Roboto-M",
          lineHeight: 22,
        },

        headerTitleAlign: "center",
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "PostsScreen") {
            return (
              <View
                style={[
                  styles.iconTabWrapp,
                  { alignItems: "flex-end", paddingRight: 12 },
                ]}
              >
                <SimpleLineIcons
                  name="grid"
                  size={24}
                  color={"rgba(33,33,33, 0.5)"}
                />
              </View>
            );
          } else if (route.name === "CreatePostsScreen") {
            return (
              <View style={styles.tabBtn}>
                <MaterialIcons name="add" size={24} color="#ffffff" />
              </View>
            );
          } else if (route.name === "ProfileScreen") {
            return (
              <View style={[styles.iconTabWrapp, { paddingLeft: 12 }]}>
                <Ionicons
                  name="person-outline"
                  size={24}
                  color={"rgba(33,33,33, 0.5)"}
                />
              </View>
            );
          }
        },
      })}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: "Публікації",
        }}
      />
      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
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
  iconTabWrapp: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  tabBtn: {
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff6c00",
    borderRadius: 35,
  },
});
