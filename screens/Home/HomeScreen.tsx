import { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ListRenderItem,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

import Spacer from "../../components/Spacer";
import TabLayout from "./TabLayout";
import { Heading, Text } from "../../components/Themed";
import { AIRPORTS_DATA, IAirport } from "../../constants/airports";
import { ALL_AIRPORTS_INDONESIA_URL } from "../../config";

export default function HomeScreen({ navigation }: any) {
  const [searchAirport, setSearchAirport] = useState<string>("");
  const [departureAirport, setDepartureAirport] = useState<string>("");
  const [indonesianAirports, setIndonesianAirpots] = useState<
    IAirport[] | null
  >(null);

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
          backgroundColor: "indigo",
          marginBottom: 8,
          borderRadius: 4,
        }}
      >
        <TouchableOpacity onPress={() => setDepartureAirport(item.airportName)}>
          <Text>
            {item.airportName} - {item.airportCode}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <TabLayout>
      <Spacer height={8} />

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("SearchFlight")}
        >
          <FontAwesome name="plane" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton}>
          <FontAwesome name="hotel" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton}>
          <MaterialCommunityIcons name="bag-suitcase" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton}>
          <FontAwesome name="ticket" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Spacer height={8} />
      {/* Move this to bottom sheet later */}
      <TextInput
        value={searchAirport}
        placeholder="Search Airport"
        style={styles.input}
        onChangeText={handleAirportChange}
      />
      <Spacer height={8} />

      {/* If there is no value from text input, it'll render nothing */}
      {!searchAirport ? null : (
        <FlatList data={DATA} renderItem={renderAirports} />
      )}
      {/* Show popular airports from here */}
    </TabLayout>
  );
}

const styles = StyleSheet.create({
  menuButton: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  content: {
    backgroundColor: "#f0f0f0",
    padding: 16,
    height: "100%",
  },
  contentText: {
    fontSize: 16,
  },
  menuContainer: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
  },
});
