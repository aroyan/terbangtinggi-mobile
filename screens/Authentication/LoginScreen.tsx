import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Heading from "../../components/Heading";
import GoogleIcon from "../../components/Icons/GoogleIcon";
import Spacer from "../../components/Spacer";

export default function LoginScreen({ navigation }: any) {
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

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  return (
    <View style={styles.container}>
      <Spacer height={32} />

      <Heading style={{ color: "#e4e5e5" }}>Login</Heading>

      <Spacer height={24} />

      <Text style={{ color: "white" }}>
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

      <TouchableOpacity>
        <Text onPress={handleForgotPassword} style={styles.link}>
          Forgot password?
        </Text>
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
    </View>
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
  link: { color: "white", textDecorationLine: "underline" },
  tinyLogo: {
    width: 24,
    height: 24,
  },
});
