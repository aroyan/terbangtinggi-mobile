import {
  ImageBackground,
  Pressable,
  View,
  Text,
  StyleSheet,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";

import Spacer from "../components/Spacer";

export default function OnboardingScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        imageStyle={{ opacity: 0.5 }}
        source={{
          uri: "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format",
        }}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <Entypo name="cross" size={28} color="white" style={styles.cross} />
        <Spacer height={16} />
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={styles.text}>Terbang Tinggi</Text>
          </View>
          <Spacer height={20} />
          <View>
            <Text style={styles.text}>
              Find best ticket price for your next journey
            </Text>
            <Spacer height={8} />
            <Text
              style={{
                textAlign: "center",
                color: "whitesmoke",
                marginHorizontal: 32,
              }}
            >
              Easy way to book your flight anytime and anywhere with your
              smartphone
            </Text>
          </View>
          <View style={{}}>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={{ fontWeight: "500", textAlign: "center" }}>
                Getting Started
              </Text>
            </Pressable>

            <Spacer height={8} />
            <Text style={{ color: "white", textAlign: "center" }}>
              Already have an account?{" "}
              <Text
                style={{ fontWeight: "bold" }}
                onPress={() => navigation.navigate("Login")}
              >
                Login
              </Text>
            </Text>
            <Spacer height={16} />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(0,0,0)",
  },
  button: {
    backgroundColor: "whitesmoke",
    paddingVertical: 16,
    borderRadius: 100,
    width: "auto",
    alignSelf: "stretch",
    marginHorizontal: 8,
  },
  container: {
    flex: 1,
  },
  cross: { position: "absolute", top: 16, right: 16 },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
