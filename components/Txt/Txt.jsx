import { Text } from "react-native";
import { s } from "./Txt.style";

export function Txt(props) {
  return <Text style={[s.text, props.style]}>{props.children}</Text>;
}
