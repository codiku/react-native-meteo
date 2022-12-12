import { Image, View } from "react-native";

import { Txt } from "../Txt/Txt";
import { s } from "./ForecastListItem.style";

export function ForecastListItem({image,day,date,temperature}) {
  return <View style={s.container}>
    <Image source={image} style={s.image}/>
    <Txt style={s.day}>{day}</Txt>
    <Txt  style={s.date}>{date}</Txt>
    <Txt  style={s.temperature}>{temperature}°</Txt>
  </View>
}
