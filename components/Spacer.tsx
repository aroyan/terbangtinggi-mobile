import { View } from "react-native";
import React from "react";

type Props =
  | { height?: never; width?: number }
  | { height?: number; width?: never };

const Spacer: React.FC<Props> = ({ height, width }) => {
  return <View style={{ height, width }} />;
};

export default Spacer;
