import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  image: {
    height: 50,
    width: 50,
  },
  day: {
    fontSize: 20,
  },
  date: {
    fontSize: 20,
  },
  temperature: {
    width: 50,
    textAlign: "right",
  },
});

export { s };
