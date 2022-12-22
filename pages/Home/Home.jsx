import { Text, View } from "react-native";
import { s } from "./Home.style";

export function Home({}) {
  return (
    <>
      <View style={s.meteo_basic}>
        <Text style={{ fontSize: 60, color: "white" }}>Hello</Text>
      </View>
      <View style={s.searchbar_container}></View>
      <View style={s.meteo_advanced}></View>
    </>
  );
}
