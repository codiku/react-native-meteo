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
    height: 90,
    width: 90,
  },
  interpretation_label: {
    fontSize: 20,
    transform: [{ rotate: "-90deg" }],
  },
});
