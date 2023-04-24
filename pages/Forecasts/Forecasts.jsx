import { s } from "./Forecasts.style.js";
import { Txt } from "../../components/Txt/Txt.jsx";
import { useRoute } from "@react-navigation/native";
import { Header } from "../../components/Header/Header.jsx";
import { ForecastListItem } from "../../components/ForecastListItem/ForecastListItem.jsx";
import { View } from "react-native";
import { DAYS, getWeatherInterpretation } from "../../utils/meteo-utils.js";

export function Forecasts({}) {
  const { params } = useRoute();

  const forecastList = (
    <View style={{ marginTop: 50 }}>
      {params.time.map((time, index) => {
        const weatherCode = params.weathercode[index];
        const image = getWeatherInterpretation(weatherCode).image;
        const temperature = params.temperature_2m_max[index];
        const date = new Date(time);
        const dayOfTheWeek = DAYS[date.getDay()];
        const formatedDate = date.toLocaleDateString("default", {
          day: "numeric",
          month: "numeric",
        });
        return (
          <ForecastListItem
            key={time}
            image={image}
            day={dayOfTheWeek}
            date={formatedDate}
            temperature={temperature.toFixed(0)}
          />
        );
      })}
    </View>
  );
  return (
    <>
      <Header city={params.city} />
      {forecastList}
    </>
  );
}
