import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  clock: { alignItems: "flex-end" },
  weather_lbl: {
    alignSelf: "flex-end",
    transform: [{ rotate: "-90deg" }],
  },
  temperature_box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  temperature_lbl: { fontSize: 150 },
  image: { height: 90, width: 90, backgroundColor: "white" },
});

export { s };
