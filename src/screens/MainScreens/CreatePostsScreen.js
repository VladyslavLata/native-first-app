import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DefaultCreatePosrtScreen } from "../nestedScreens/DefaultCreatePosrtScreen";
import { getHeaderTitle } from "@react-navigation/elements";
// export const CreatePostsScreen = ({ navigation }) => {
//   console.log(navigation);
//   // setBackWithCreatePost(navigation.navigate("PostsScreen"));
//   return (
//     <View style={styles.wrapp}>
//       <Text>CreatePostsScreen!</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   wrapp: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

const MyBackButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{ color: "green" }}>GGGG</Text>
    </TouchableOpacity>
  );
};

const MyHeader = ({ title, leftButton }) => {
  return (
    <View style={{ width: "100%", height: 50, backgroundColor: "red" }}>
      <Text style={{ textAlign: "center" }}>{title}</Text>
      {leftButton}
      {/* <MyBackButton /> */}
    </View>
  );
};

export const CreatePostsScreen = ({ navigation }) => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DefaultCreatePosrtScreen"
        options={{
          // headerShown: true,
          // headerBackVisible: true,
          header: ({ navigation, route, options, back }) => {
            const title = getHeaderTitle(options, route.name);
            console.log("back", back);

            return (
              <MyHeader
                title={title}
                leftButton={
                  !back ? (
                    <MyBackButton onPress={() => navigation.goBack()} />
                  ) : undefined
                }
                style={options.headerStyle}
              />
            );
          },
        }}
        component={DefaultCreatePosrtScreen}
      />
    </Stack.Navigator>
  );
};
