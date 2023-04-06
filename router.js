import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RegistrationScreen } from "./src/screens/RegistrationScreen";
import { LoginScreen } from "./src/screens/LoginScreen";
import { CommentsScreen } from "./src/screens/MainScreens/CommentsScreen";
import { CreatePostsScreen } from "./src/screens/MainScreens/CreatePostsScreen";
import { Home } from "./src/screens/MainScreens/Home";
import { MapScreen } from "./src/screens/MainScreens/MapScreen";
import { PostsScreen } from "./src/screens/MainScreens/PostsScreen";
import { ProfileScreen } from "./src/screens/MainScreens/ProfileScreen";

export const useAppRouter = (isAuth) => {
  const AuthStack = createNativeStackNavigator();
  // const Tab = createBottomTabNavigator();

  if (!isAuth) {
    return (
      <AuthStack.Navigator>
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
      </AuthStack.Navigator>
    );
  }
  return (
    <Home />
    // <Tab.Navigator>
    //   <Tab.Screen name="CommentsScreen" component={CommentsScreen} />
    //   <Tab.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
    //   <Tab.Screen name="Home" component={Home} />
    //   <Tab.Screen name="MapScreen" component={MapScreen} />
    //   <Tab.Screen name="PostsScreen" component={PostsScreen} />
    //   <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    // </Tab.Navigator>
  );
};
