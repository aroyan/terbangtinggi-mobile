import { useState, useLayoutEffect } from "react";
import { Alert, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as WebBrowser from "expo-web-browser";
import { AntDesign } from "@expo/vector-icons";

import { RootStackParamList } from "../../App";
import { Link, Text } from "../../components/Themed";
import Heading from "../../components/Heading";
import GoogleIcon from "../../components/Icons/GoogleIcon";
import Spacer from "../../components/Spacer";
import AuthLayout from "./AuthLayout";

type LoginScreenProp = NativeStackNavigationProp<RootStackParamList, "Login">;

export default function LoginScreen() {
  const navigation = useNavigation<LoginScreenProp>();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (text: string) => setEmail(text);
  const handlePasswordChange = (text: string) => setPassword(text);

  const handleLogin = () =>
    Alert.alert("Login", "implement login later", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <AntDesign
          name="close"
          size={24}
          color="white"
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
    });
  }, [navigation]);

  return (
    <AuthLayout>
      <Spacer height={32} />

      <Heading style={{ color: "#e4e5e5" }}>Login</Heading>

      <Spacer height={24} />

      <Text>
        Book your entire trip in one place, with free access to Member Prices
        and points
      </Text>

      <Spacer height={20} />

      <TextInput
        autoComplete="email"
        blurOnSubmit
        placeholder="Email address"
        placeholderTextColor="white"
        style={styles.input}
        value={email}
        onChangeText={handleEmailChange}
      />

      <Spacer height={24} />

      <TextInput
        autoComplete="password"
        blurOnSubmit
        placeholder="Password"
        placeholderTextColor="white"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={handlePasswordChange}
      />

      <Spacer height={16} />

      <TouchableOpacity
        onPress={() =>
          WebBrowser.openBrowserAsync(
            "https://terbang-tinggi-client.vercel.app/auth/forgot-password"
          )
        }
      >
        <Link>Forgot password?</Link>
      </TouchableOpacity>

      <Spacer height={16} />

      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={{ color: "#021038", fontWeight: "bold" }}>Login</Text>
      </TouchableOpacity>

      <Spacer height={16} />

      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: "#131D38",
            flexDirection: "row",
            borderColor: "#687087",
            borderWidth: 1,
          },
        ]}
      >
        <GoogleIcon height={24} width={24} />
        <Spacer width={8} />
        <Text style={{ color: "#A4B7F9", fontWeight: "400" }}>
          Login with Google
        </Text>
      </TouchableOpacity>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6F92F0",
    borderRadius: 12,
    height: 46,
  },
  buttonImage: {
    flexDirection: "row",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    height: 46,
  },
  container: {
    backgroundColor: "#000C26",
    height: "100%",
    paddingHorizontal: 30,
  },
  input: {
    borderColor: "silver",
    borderWidth: 1,
    padding: 8,
    color: "white",
    borderRadius: 8,
  },
});
