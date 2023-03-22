import { ReactNode } from "react";
import { StyleSheet, Text, StyleProp, TextStyle } from "react-native";

type Props = {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  rest?: any;
};

export default function Heading({ children, style, ...rest }: Props) {
  return (
    <Text style={[styles.heading, style]} {...rest}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
