import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  BackHandler,
} from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { useEffect, useRef, useState } from "react";

import Spacer from "../../components/Spacer";

export default function SearchFlightScreen({ navigation }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const bottomSheetModalRef = useRef(null);

  const snapPoints = ["100%"];

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
    setIsOpen(true);
  }

  // This useEffect is handling back button to close modal instead of navigating to Stack before
  useEffect(() => {
    const backAction = () => {
      if (isOpen) {
        bottomSheetModalRef.current?.close();
        setIsOpen(false);
        return true;
      } else {
        return false;
      }
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [isOpen]);

  return (
    <View style={{ height: "100%" }}>
      <BottomSheetModalProvider>
        <View style={[styles.container]}>
          <Spacer height={24} />
          <View
            style={{
              backgroundColor: "#F4F7FE",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={[
                styles.inputButton,
                { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
              ]}
              onPress={handlePresentModal}
            >
              <Text style={styles.inputButtonText}>Departure</Text>
            </TouchableOpacity>
            <View
              style={{
                borderTopWidth: 1,
                width: "90%",
                borderTopColor: "#D9DCE5",
              }}
            />
            <TouchableOpacity
              style={[
                styles.inputButton,
                {
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                },
              ]}
            >
              <Text style={styles.inputButtonText}>Arrival</Text>
            </TouchableOpacity>
          </View>

          <Spacer height={16} />
          <TouchableOpacity style={styles.inputButton}>
            <Text style={styles.inputButtonText}>Date</Text>
          </TouchableOpacity>
          <Spacer height={16} />
          <TouchableOpacity style={styles.inputButton}>
            <Text style={styles.inputButtonText}>Passenger & Seat Class</Text>
          </TouchableOpacity>
          <Spacer height={16} />
          <TouchableOpacity
            style={[styles.inputButton, { backgroundColor: "#007DFE" }]}
          >
            <Text
              style={[
                styles.inputButtonText,
                { color: "white", fontWeight: "600" },
              ]}
            >
              Search Flight
            </Text>
          </TouchableOpacity>

          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            enablePanDownToClose
          >
            <View style={styles.contentContainer}>
              <TouchableOpacity
                onPress={() => bottomSheetModalRef.current?.close()}
                style={{
                  position: "absolute",
                  borderRadius: 50,
                  padding: 8,
                  top: 8,
                  left: 8,
                  backgroundColor: "gray",
                }}
              >
                <Text style={{ color: "white" }}>Close</Text>
              </TouchableOpacity>
              <Text
                style={[
                  styles.title,
                  {
                    marginVertical: 24,
                    alignSelf: "flex-start",
                    marginTop: 48,
                  },
                ]}
              >
                Select an Airport
              </Text>
              <TextInput
                placeholder="Enter airport name"
                placeholderTextColor="black"
                style={{
                  alignSelf: "stretch",
                  borderColor: "blue",
                  borderWidth: 1,
                  borderRadius: 50,
                  padding: 8,
                  paddingHorizontal: 16,
                }}
              />
              <Spacer height={16} />
              <Text style={{ alignSelf: "flex-start" }}>Hello</Text>
              {/* Render FlatList of Search Result here */}
            </View>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
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
    color: "#101318",
    fontSize: 14,
    fontWeight: "bold",
  },
  description: {
    color: "#56636F",
    fontSize: 13,
    fontWeight: "normal",
    width: "100%",
  },
  inputButton: {
    backgroundColor: "#F4F7FE",
    padding: 12,
    borderRadius: 8,
  },
  inputButtonText: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
