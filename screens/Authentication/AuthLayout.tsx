import { View, StyleSheet } from "react-native";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#000C26",
    height: "100%",
    paddingHorizontal: 30,
  },
});
