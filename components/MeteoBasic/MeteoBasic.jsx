import { Image, Text, View } from "react-native";

import { Clock } from "../Clock/Clock";
import { s } from "./MeteoBasic.style";

export function MeteoBasic({ city, temperature, interpretation }) {
  return (
    <>
      <View style={s.timeContainer}>
        <Clock />
      </View>

      <View>
        <Text style={{ fontSize: 30 }}>{city}</Text>
      </View>

      <View style={s.weather}>
        <Text style={{ transform: [{ rotate: "-90deg" }] }}>
          {interpretation.label}
        </Text>
      </View>

      <View style={s.temperatureContainer}>
        <Text style={s.temperature}>{temperature}°</Text>
        <Image style={s.image} source={interpretation.image} />
      </View>
    </>
  );
}
