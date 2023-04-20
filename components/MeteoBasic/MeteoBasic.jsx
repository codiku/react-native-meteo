import { s } from "./MeteoBasic.style";
import { Txt } from "../Txt/Txt";
import { Image, View } from "react-native";

export function MeteoBasic({}) {
  return (
    <>
      <View style={s.clock}>
        <Txt>Clock</Txt>
      </View>
      <View>
        <Txt>City</Txt>
      </View>

      <View style={s.interpretation}>
        <Txt style={s.interpretation_txt}>Sunny</Txt>
      </View>

      <View style={s.temperature_box}>
        <Txt style={s.temperature}>3°</Txt>
        <Image style={s.image} />
      </View>
    </>
  );
}
