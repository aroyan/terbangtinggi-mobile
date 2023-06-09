import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

import LoginScreen from "./screens/Authentication/LoginScreen";
import RegisterScreen from "./screens/Authentication/RegisterScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import HomeTabNavigator from "./screens/Home/HomeTabNavigator";
import SearchFlightScreen from "./screens/Home/SearchFlightScreen";

export type RootStackParamList = {
  Onboarding: undefined;
  HomeTabNavigator: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  SearchFlight: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  const [isFirstTimeOpening, setIsFirstTimeOpening] = useState(true);

  // const isFirstTimeOpeningDevMode = true;

  const getOnboardingStatus = async () => {
    try {
      const value = await AsyncStorage.getItem("isFirstTimeOpening");
      const parsedValue = JSON.parse(value!);
      if (value !== null) {
        setIsFirstTimeOpening(true);
      }
      setIsFirstTimeOpening(parsedValue);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getOnboardingStatus();
  }, []);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={
              isFirstTimeOpening ? "Onboarding" : "HomeTabNavigator"
            }
            screenOptions={{
              headerTitleAlign: "center",
              // headerTintColor: "white",
              headerTitleStyle: {
                fontWeight: "400",
              },
              headerStyle: {
                // backgroundColor: "#131D38",
              },
            }}
          >
            <Stack.Screen
              name="Onboarding"
              component={OnboardingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeTabNavigator"
              component={HomeTabNavigator}
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
              name="SearchFlight"
              component={SearchFlightScreen}
              options={{
                headerTitle: "",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="light" />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
