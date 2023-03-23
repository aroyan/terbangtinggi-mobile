import { ScrollView, TouchableOpacity } from "react-native";

import { Text } from "../../components/Themed";
import TabLayout from "./TabLayout";

export default function HomeScreen({ navigation }: any) {
  return (
    <TabLayout>
      <ScrollView>
        <Text>Home</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text>Register</Text>
        </TouchableOpacity>
      </ScrollView>
    </TabLayout>
  );
}
