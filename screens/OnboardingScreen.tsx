import {
  ImageBackground,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Spacer from "../components/Spacer";

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format",
        }}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <Text style={styles.text}>Onboarding Screen</Text>
        <Spacer height={16} />
        <TouchableOpacity style={styles.button}>
          <Text>Getting Started</Text>
        </TouchableOpacity>
        <Spacer height={8} />
        <Text>Already have an account? Login</Text>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "whitesmoke",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    width: "auto",
  },
  container: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
