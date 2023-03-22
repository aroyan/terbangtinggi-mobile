import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import LoginScreen from "./screens/Authentication/LoginScreen";
import RegisterScreen from "./screens/Authentication/RegisterScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import Home from "./screens/Home";

export type RootStackParamList = {
  Onboarding: undefined;
  Home: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  // change this with AsyncStorage later
  const isFirstTimeOpening = true;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={isFirstTimeOpening ? "Onboarding" : "Home"}
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
            name="Onboarding"
            component={OnboardingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
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
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}

export default App;
