import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import LoginScreen from "./screens/Authentication/LoginScreen";
import RegisterScreen from "./screens/Authentication/RegisterScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import ForgotPasswordScreen from "./screens/Authentication/ForgotPasswordScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "400",
            },
            headerStyle: {
              backgroundColor: "#131D38",
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={OnboardingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerTitle: "",
            }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              headerTitle: "",
            }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
            options={{
              headerTitle: "",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}

export default App;
