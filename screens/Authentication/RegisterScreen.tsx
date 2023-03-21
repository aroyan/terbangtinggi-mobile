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

export default function RegisterScreen({ navigation }: any) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const handleEmailChange = (text: string) => setEmail(text);
  const handlePasswordChange = (text: string) => setPassword(text);
  const handleConfirmPasswordChange = (text: string) =>
    setConfirmPassword(text);
  const handleUsernameChange = (text: string) => setUsername(text);

  const handleRegister = () =>
    Alert.alert("Register", "implement Register later", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <View style={styles.container}>
      <Spacer height={32} />

      <Heading style={{ color: "#e4e5e5" }}>Register</Heading>

      <Spacer height={24} />

      <Text style={{ color: "white" }}>
        Book your entire trip in one place, with free access to Member Prices
        and points
      </Text>

      <Spacer height={20} />

      <TextInput
        autoComplete="off"
        blurOnSubmit
        placeholder="Username"
        placeholderTextColor="#FBF8FF"
        style={styles.input}
        value={username}
        onChangeText={handleUsernameChange}
      />

      <Spacer height={24} />

      <TextInput
        autoComplete="email"
        blurOnSubmit
        placeholder="Email address"
        placeholderTextColor="#FBF8FF"
        style={styles.input}
        value={email}
        onChangeText={handleEmailChange}
      />

      <Spacer height={24} />

      <TextInput
        autoComplete="password"
        blurOnSubmit
        placeholder="Password"
        placeholderTextColor="#FBF8FF"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={handlePasswordChange}
      />

      <Spacer height={24} />

      <TextInput
        autoComplete="password"
        blurOnSubmit
        placeholder="Confirm Password"
        placeholderTextColor="#FBF8FF"
        style={styles.input}
        secureTextEntry
        value={confirmPassword}
        onChangeText={handleConfirmPasswordChange}
      />

      <Spacer height={16} />

      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "white" }}>Have an account? </Text>
        <TouchableOpacity>
          <Text
            onPress={() => navigation.navigate("Login")}
            style={styles.link}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>

      <Spacer height={16} />

      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={handleRegister}
      >
        <Text style={{ color: "#021038", fontWeight: "bold" }}>Register</Text>
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
          Continue with Google
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
    borderColor: "#697488",
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
