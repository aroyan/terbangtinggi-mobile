import { ReactNode } from "react";
import {
  StyleSheet,
  Text as DefaultText,
  StyleProp,
  TextStyle,
} from "react-native";

type HeadingProps = {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  rest?: any;
};

export type TextProps = DefaultText["props"];

export function Heading({ children, style, ...rest }: HeadingProps) {
  return (
    <DefaultText style={[styles.heading, style]} {...rest}>
      {children}
    </DefaultText>
  );
}

export function Text(props: TextProps) {
  const { style, ...rest } = props;

  return <DefaultText style={[style]} {...rest} />;
}

export function Link(props: TextProps) {
  const { style, ...rest } = props;

  return (
    <Text style={[{ textDecorationLine: "underline" }, style]} {...rest} />
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
