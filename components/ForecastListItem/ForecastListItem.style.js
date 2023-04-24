import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
  day: {
    fontSize: 20,
    width: 50,
    textAlign: "center",
  },
  date: {
    fontSize: 20,
    width: 80,
    textAlign: "center",
  },
  temperature: {
    minWidth: 50,
    textAlign: "right",
  },
});

export { s };
