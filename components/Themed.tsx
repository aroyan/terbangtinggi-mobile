import { Text as DefaultText } from "react-native";

export type TextProps = DefaultText["props"];

export function Text(props: TextProps) {
  const { style, ...rest } = props;

  return <DefaultText style={[{ color: "#e4e5e5" }, style]} {...rest} />;
}

export function Link(props: TextProps) {
  const { style, ...rest } = props;

  return (
    <Text style={[{ textDecorationLine: "underline" }, style]} {...rest} />
  );
}
