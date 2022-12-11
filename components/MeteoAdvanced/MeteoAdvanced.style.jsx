import { StyleSheet, View } from "react-native";

import { Txt } from "../Txt/Txt";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,
    borderColor: "#ffffff",
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#0000005b",
  },
});

export function StyledContainer({ children }) {
  return <View style={{ alignItems: "center" }}>{children}</View>;
}
export function StyledTxtLabel({ children }) {
  return <Txt style={{ fontSize: 30 }}>{children}</Txt>;
}

export function StyledTxtValue({ children }) {
  return <Txt style={{ fontSize: 15 }}>{children}</Txt>;
}
