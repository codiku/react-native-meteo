import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "black",
    zIndex: 0,
  },
  background_image: {
    opacity: 0.75,
  },
  container: {
    flex: 1,
    margin: 15,
    zIndex: 2,
  },
  meteo_container: {
    flex: 3,
    justifyContent: "space-between",
  },
  searchbar_container: {
    flex: 3,
    alignItems: "center",
  },
  advanced_meteo_container: {
    flex: 2,
    justifyContent: "flex-end",
  },
});
