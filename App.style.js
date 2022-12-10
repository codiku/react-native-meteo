import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  meteo_container: {
    flex: 3,
    backgroundColor: "red",
    justifyContent: "space-between",
  },
  searchbar_container: {
    flex: 3,
    alignItems: "center",
    backgroundColor: "green",
  },
  advanced_meteo_container: {
    flex: 2,
    justifyContent: "flex-end",
  },
});
