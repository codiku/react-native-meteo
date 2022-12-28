import { Image, View } from "react-native";
import { Txt } from "../Txt/Txt.jsx";
import { s } from "./MeteoBasic.style.js";

export function MeteoBasic({}) {
  return (
    <>
      <View style={s.clock}>
        <Txt>Todo</Txt>
      </View>
      <Txt>Todo</Txt>
      <Txt style={s.weather_lbl}>Todo</Txt>
      <View style={s.temperature_box}>
        <Txt style={s.temperature_lbl}>3°</Txt>
        <View style={s.image} />
      </View>
    </>
  );
}
