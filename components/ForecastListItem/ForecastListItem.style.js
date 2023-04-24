import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
  day: {
    fontSize: 20,
  },
  date: {
    fontSize: 20,
  },
  temperature: {
    minWidth: 50,
    textAlign: "right",
  },
});

export { s };
