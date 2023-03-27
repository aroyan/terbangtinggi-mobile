import { useLayoutEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";

import { RootStackParamList } from "../../App";
import { Heading, Link, Text } from "../../components/Themed";
import GoogleIcon from "../../components/Icons/GoogleIcon";
import Spacer from "../../components/Spacer";
import AuthLayout from "./AuthLayout";

type RegisterScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  "Register"
>;

export default function RegisterScreen() {
  const navigation = useNavigation<RegisterScreenProp>();

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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <AntDesign
          name="close"
          size={24}
          color="black"
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

      <Heading>Register</Heading>

      <Spacer height={24} />

      <Text>
        Book your entire trip in one place, with free access to Member Prices
        and points
      </Text>

      <Spacer height={20} />

      <TextInput
        autoComplete="off"
        blurOnSubmit
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={handleUsernameChange}
      />

      <Spacer height={24} />

      <TextInput
        autoComplete="email"
        blurOnSubmit
        placeholder="Email address"
        style={styles.input}
        value={email}
        onChangeText={handleEmailChange}
      />

      <Spacer height={24} />

      <TextInput
        autoComplete="password"
        blurOnSubmit
        placeholder="Password"
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
        style={styles.input}
        secureTextEntry
        value={confirmPassword}
        onChangeText={handleConfirmPasswordChange}
      />

      <Spacer height={16} />

      <View style={{ flexDirection: "row" }}>
        <Text>Have an account? </Text>
        <TouchableOpacity>
          <Link onPress={() => navigation.replace("Login")}>Login</Link>
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
  input: {
    borderColor: "#697488",
    borderWidth: 1,
    padding: 8,
    color: "white",
    borderRadius: 8,
  },
});
