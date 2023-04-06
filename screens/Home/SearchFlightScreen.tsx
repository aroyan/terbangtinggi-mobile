import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  BackHandler,
  ListRenderItem,
  FlatList,
} from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { useEffect, useRef, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Spacer from "../../components/Spacer";
import { AIRPORTS_DATA, IAirport } from "../../constants/airports";
import { ALL_AIRPORTS_INDONESIA_URL } from "../../config";

export default function SearchFlightScreen({ navigation }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const departureBottomSheetRef = useRef(null);
  const arrivalBottomSheetRef = useRef(null);
  const dateBottomSheetRef = useRef(null);

  const [searchAirport, setSearchAirport] = useState<string>("");
  const [departureAirport, setDepartureAirport] = useState<string>("");
  const [indonesianAirports, setIndonesianAirpots] = useState<
    IAirport[] | null
  >(null);

  const snapPoints = ["100%"];

  function handlePresentModal() {
    departureBottomSheetRef.current?.present();
    setIsOpen(true);
  }

  function handleShowArrivalModal() {
    arrivalBottomSheetRef.current?.present();
    setIsOpen(true);
  }

  function handleShowDateModal() {
    dateBottomSheetRef.current?.present();
    setIsOpen(true);
  }

  // This useEffect is handling back button to close modal instead of navigating to Stack before
  useEffect(() => {
    const backAction = () => {
      if (isOpen) {
        departureBottomSheetRef.current?.close();
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

  useEffect(() => {
    const saveDataToAsyncStorage = async (value: any) => {
      try {
        await AsyncStorage.setItem("INDONESIAN_AIRPORTS", value);
      } catch (error) {
        throw error;
      }
    };

    const getAllIndonesiaAirports = async () => {
      const data = await fetch(ALL_AIRPORTS_INDONESIA_URL);
      const jsonData = await data.json();
      saveDataToAsyncStorage(JSON.stringify(jsonData));
    };

    const getDataFromAsyncStorage = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("INDONESIAN_AIRPORTS");
        if (jsonValue === null) {
          getAllIndonesiaAirports();
        }
        setIndonesianAirpots(JSON.parse(jsonValue!));
      } catch (error) {
        throw error;
      }
    };

    getDataFromAsyncStorage();
  }, []);

  // useEffect(() => {
  //   async function removeItemValue(key: string) {
  //     try {
  //       await AsyncStorage.removeItem(key);
  //       return true;
  //     } catch (exception) {
  //       return false;
  //     }
  //   }
  //   removeItemValue("INDONESIAN_AIRPORTS");
  // }, []);

  const filteredAirports = indonesianAirports ?? AIRPORTS_DATA;

  const DATA = filteredAirports.filter((airport) => {
    const searchTerm = searchAirport.toLowerCase();
    const { airportName, cityName, alias } = airport;
    const lowerCaseAlias = alias?.map((alias) => alias.toLowerCase()) || [];

    return (
      airportName.toLowerCase().includes(searchTerm) ||
      cityName.toLowerCase().includes(searchTerm) ||
      lowerCaseAlias.includes(searchTerm)
    );
  });

  const handleAirportChange = (text: string) => setSearchAirport(text);

  const renderAirports: ListRenderItem<IAirport> = ({ item }) => {
    return (
      <View
        style={{
          padding: 16,
          marginBottom: 8,
          borderRadius: 4,
          backgroundColor: "whitesmoke",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setDepartureAirport(item.airportName);
            departureBottomSheetRef.current?.close();
          }}
        >
          <Text>
            {item.airportName} - {item.airportCode}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

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
              <Text style={styles.inputButtonText}>
                {departureAirport || "Departure"}
              </Text>
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
              onPress={handleShowArrivalModal}
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

          {/* Bottom sheet for Departure */}
          <BottomSheetModal
            ref={departureBottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            enablePanDownToClose
          >
            <View style={styles.contentContainer}>
              <TouchableOpacity
                onPress={() => departureBottomSheetRef.current?.close()}
                style={{
                  position: "absolute",
                  borderRadius: 50,
                  padding: 8,
                  top: 8,
                  left: 8,
                }}
              >
                <Text>Close</Text>
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
                value={searchAirport}
                placeholder="Search Airport"
                style={[
                  styles.input,
                  {
                    alignSelf: "stretch",
                    borderColor: "blue",
                    borderWidth: 1,
                    borderRadius: 50,
                    padding: 8,
                    paddingHorizontal: 16,
                  },
                ]}
                onChangeText={handleAirportChange}
              />
              <Spacer height={16} />
              {!searchAirport ? null : (
                <FlatList data={DATA} renderItem={renderAirports} />
              )}
            </View>
          </BottomSheetModal>

          {/* Bottom sheet for arrival */}
          <BottomSheetModal
            ref={arrivalBottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            enablePanDownToClose
          >
            <View style={styles.contentContainer}>
              <TouchableOpacity
                onPress={() => arrivalBottomSheetRef.current?.close()}
                style={{
                  position: "absolute",
                  borderRadius: 50,
                  padding: 8,
                  top: 8,
                  left: 8,
                }}
              >
                <Text>Close</Text>
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
                Select arrival airport
              </Text>

              <TextInput
                value={searchAirport}
                placeholder="Search Airport"
                style={[
                  styles.input,
                  {
                    alignSelf: "stretch",
                    borderColor: "blue",
                    borderWidth: 1,
                    borderRadius: 50,
                    padding: 8,
                    paddingHorizontal: 16,
                  },
                ]}
                onChangeText={handleAirportChange}
              />
              <Spacer height={16} />
              {!searchAirport ? null : (
                <FlatList data={DATA} renderItem={renderAirports} />
              )}
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
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
});
