import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  timeContainer: {
    alignItems: "flex-end",
  },
  weather: {
    alignItems: "flex-end",
  },
  temperatureContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  temperature: {
    fontSize: 150,
  },
  image: {
    height: 50,
    width: 50,
  },
});
