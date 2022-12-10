import { Text, View } from "react-native";

import { s } from "./MeteoBasic.style";

export function MeteoBasic() {
  return (
    <>
      <View style={s.timeContainer}>
        <Text>xx:xx</Text>
      </View>

      <View>
        <Text style={{ fontSize: 30 }}>City</Text>
      </View>

      <View style={s.weather}>
        <Text style={{ transform: [{ rotate: "-90deg" }] }}>Weather</Text>
      </View>

      <View style={s.temperatureContainer}>
        <Text style={{ fontSize: 150 }}>XX°</Text>
        <Text style={{ fontSize: 100 }}>#</Text>
      </View>
    </>
  );
}
