import { Image, View } from "react-native";
import { Txt } from "../Txt/Txt.jsx";
import { s } from "./MeteoBasic.style.js";

export function MeteoBasic({}) {
  return (
    <>
      <View style={s.clock}>
        <Txt>Clock</Txt>
      </View>

      <Txt>City</Txt>

      <Txt style={s.weather_label}>Label</Txt>

      <View style={s.temperature_box}>
        <Txt style={s.temperature}>3°</Txt>
        <Image style={s.image} />
      </View>
    </>
  );
}
