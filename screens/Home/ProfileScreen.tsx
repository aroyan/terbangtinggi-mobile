import {
  Button,
  Pressable,
  StyleSheet,
  Switch,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { useEffect, useRef, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import { Text } from "../../components/Themed";
import TabLayout from "./TabLayout";

export default function ProfileScreen({ navigation }: any) {
  const [darkmode, setDarkmode] = useState(false);
  const [device, setDevice] = useState(false);
  const { width } = useWindowDimensions();
  const [theme, setTheme] = useState("dim");
  const [isOpen, setIsOpen] = useState(false);

  const bottomSheetModalRef = useRef(null);

  const snapPoints = ["90%"];

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  }

  useEffect(() => {
    (async () => {
      const req = await fetch("https://jsonplaceholder.typicode.com/todos/2");
      const data = await req.json();
    })();
  }, []);

  return (
    <TabLayout>
      <BottomSheetModalProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Text>Profile</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text>Go to home</Text>
          </TouchableOpacity>
          <View style={[styles.container]}>
            <Button title="Present Modal" onPress={handlePresentModal} />
            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={0}
              snapPoints={snapPoints}
              onDismiss={() => setIsOpen(false)}
              enablePanDownToClose
              // handleStyle={styles.handle}
              // handleIndicatorStyle={styles.handleIndicator}
            >
              <View style={styles.contentContainer}>
                <Text style={[styles.title, { marginBottom: 20 }]}>
                  Dark mode
                </Text>
                <View style={styles.row}>
                  <Text style={styles.subtitle}>Dark mode</Text>
                  <Switch
                    value={darkmode}
                    onChange={() => setDarkmode(!darkmode)}
                  />
                </View>
                <View style={styles.row}>
                  <Text style={styles.subtitle}>Use device settings</Text>
                  <Switch value={device} onChange={() => setDevice(!device)} />
                </View>
                <Text style={styles.description}>
                  Set Dark mode to use the Light or Dark selection located in
                  your device Display and Brightness settings.
                </Text>
                <View
                  style={{
                    width: width,
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    borderBottomColor: "gray",
                    marginVertical: 30,
                  }}
                />
                <Text style={[styles.title, { width: "100%" }]}>Theme</Text>
                <Pressable style={styles.row} onPress={() => setTheme("dim")}>
                  <Text style={styles.subtitle}>Dim</Text>
                  {theme === "dim" ? (
                    <AntDesign name="checkcircle" size={24} color="#4A98E9" />
                  ) : (
                    <Entypo name="circle" size={24} color="#56636F" />
                  )}
                </Pressable>
                <Pressable
                  style={styles.row}
                  onPress={() => setTheme("lightsOut")}
                >
                  <Text style={styles.subtitle}>Lights out</Text>
                  {theme === "lightsOut" ? (
                    <AntDesign name="checkcircle" size={24} color="#4A98E9" />
                  ) : (
                    <Entypo name="circle" size={24} color="#56636F" />
                  )}
                </Pressable>
              </View>
            </BottomSheetModal>
          </View>
        </SafeAreaView>
      </BottomSheetModalProvider>
    </TabLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  title: {
    fontWeight: "900",
    letterSpacing: 0.5,
    fontSize: 16,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  description: {
    fontSize: 13,
    fontWeight: "normal",
    width: "100%",
  },
  handle: {
    backgroundColor: "black",
  },
  handleIndicator: {
    backgroundColor: "gray",
  },
});
