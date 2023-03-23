import {
  View,
  Text,
  Image,
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { RootStackParamList } from "../App";
import { OnboardingData } from "../constants/onboarding";

type OnboardingScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  "Onboarding"
>;

export default function OnboardingItem({ item }: { item: OnboardingData }) {
  const { width } = useWindowDimensions();
  const navigation = useNavigation<OnboardingScreenProp>();

  const handleCloseOnboarding = async () => {
    try {
      await AsyncStorage.setItem("isFirstTimeOpening", JSON.stringify(false));
    } catch (error) {
      throw error;
    }
  };

  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      {item.id === 3 ? (
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => {
            handleCloseOnboarding();
            navigation.navigate("Register");
          }}
        >
          <Text style={{ color: "white", fontWeight: "500" }}>GET STARTED</Text>
        </TouchableOpacity>
      ) : null}
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => {
          handleCloseOnboarding();
          navigation.navigate("Home");
        }}
      >
        <AntDesign name="close" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
  },
  title: {
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 10,
    color: "#493d8a",
    textAlign: "center",
  },
  description: {
    fontWeight: "300",
    color: "#62656b",
    textAlign: "center",
    paddingHorizontal: 64,
  },
  closeButton: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  getStartedButton: {
    backgroundColor: "#493d8a",
    borderRadius: 16,
    paddingHorizontal: 32,
    paddingVertical: 16,
    marginBottom: 16,
  },
});
