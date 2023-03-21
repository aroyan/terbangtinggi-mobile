import { StyleSheet, Text } from "react-native";

export default function Heading(props: any) {
  const { children, style, ...rest } = props;
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
