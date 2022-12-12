import { TouchableOpacity, View } from "react-native";
import { WEATHER_INTERPRATIONS, getWeatherIntepration } from './../../services/weather';
import { useNavigation, useRoute } from "@react-navigation/native";

import { Container } from "../../components/Container/Container";
import { ForecastListItem } from './../../components/ForecastListItem/ForecastListItem';
import { Txt } from "../../components/Txt/Txt";
import { getDayName } from "../../services/date-time";
import { s } from "./Forecast.style";

export function Forecast() {
  const nav = useNavigation();
  const { params } = useRoute();
  const forecast = params
  const backButton = (
    <TouchableOpacity onPress={() => nav.goBack()}>
      <Txt style={s.back_txt}>{"<"}</Txt>
    </TouchableOpacity>
  );

  const header = (
    <View>
      <View style={s.header}>
        <View style={s.back_btn}>{backButton}</View>
        <Txt style={s.title}>{forecast.city}</Txt>
      </View>
      <Txt style={s.subtitle}>Prévision sur 7 jours</Txt>
    </View>
  );
  const forecastList = (
    <View style={{ flex: 1, marginVertical: 50 }}>
      {
        forecast.time.map((time,index)=> {
          const temperature = forecast.temperature_2m_max[index].toFixed(0)
          const code = forecast.weathercode[index]
          return <ForecastListItem key={time} image={getWeatherIntepration(code).image} day={getDayName(time)} date={time} temperature={temperature} />
        })
      }
    
     
    </View>
  );

  return (
    <Container>
      {header}
      {forecastList}
    </Container>
  );
}
