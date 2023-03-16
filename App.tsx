import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import LoginScreen from "./screens/Authentication/LoginScreen";
import OnboardingScreen from "./screens/OnboardingScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitleAlign: "center",
            headerTintColor: "yellow",
            headerTitleStyle: {
              fontWeight: "400",
            },
            headerStyle: {
              backgroundColor: "blue",
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={OnboardingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Details" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
