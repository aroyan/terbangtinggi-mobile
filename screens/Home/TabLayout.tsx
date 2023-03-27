import { StyleSheet, View } from "react-native";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function TabLayout({ children }: Props) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#000C26",
    paddingHorizontal: 30,
    minHeight: "100%",
  },
});
