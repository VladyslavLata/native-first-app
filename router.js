import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RegistrationScreen } from "./src/screens/RegistrationScreen";
import { LoginScreen } from "./src/screens/LoginScreen";

export const useAppRouter = () => {
  const AuthStack = createNativeStackNavigator();
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
};
