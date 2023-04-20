import { Text, View } from "react-native";
import { s } from "./Home.style";
export function Home() {
  return (
    <>
      <View style={s.meteo_basic}>
        <Text style={{ color: "white", fontSize: 30 }}>Hello</Text>
      </View>
      <View style={s.searchbar_container}>
        <Text style={{ color: "white", fontSize: 30 }}>SearchBar</Text>
      </View>
      <View style={s.meteo_advanced}>
        <Text style={{ color: "white", fontSize: 30 }}>
          Advanded Weather info
        </Text>
      </View>
    </>
  );
}
