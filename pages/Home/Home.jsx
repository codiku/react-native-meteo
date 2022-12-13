import * as Location from "expo-location";

import { Alert, View } from "react-native";
import { useEffect, useState } from "react";

import { Container } from "../../components/Container/Container";
import { MeteoAPI } from "../../api/meteo-api";
import { MeteoAdvanced } from "../../components/MeteoAdvanced/MeteoAdvanced";
import { MeteoBasic } from "../../components/MeteoBasic/MeteoBasic";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { getWeatherIntepration } from "../../services/weather";
import { s } from "./Home.style";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const [coordinates, setCoordinates] = useState();
  const [city, setCity] = useState();
  const [weatherData, setWeatherData] = useState();

  const nav = useNavigation();
  const currentWeather = weatherData && weatherData["current_weather"];

  useEffect(() => {
    getUserCoordinates();
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetchWeather(coordinates);
      fetchCity(coordinates);
    }
  }, [coordinates]);

  async function fetchCity(coords) {

    const cityResponse = await MeteoAPI.fetchCityByCoords(coords);
    setCity(cityResponse);

  }
  async function fetchWeather(coords) {
    const weatherResponse = await MeteoAPI.fetchWeatherByCoords(coords);
    setWeatherData(weatherResponse);
  }
  async function getUserCoordinates() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      // Default to Paris
      setCoordinates({ lat: "48.85", lng: "2.35" });
      return;
    }
    let location = await Location.getCurrentPositionAsync();
    setCoordinates({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  }
  function goToForecastPage() {
    nav.navigate("Forecast", { city, ...weatherData.daily });
  }

  async function submitSearch(e) {
    const city = e.nativeEvent.text
    try {
      const cityCoords = await MeteoAPI.fetchCoordsByCity(city)
      setCoordinates(cityCoords)
    }
    catch (e) {
      Alert.alert("Oups !", e)
    }

  }

  return weatherData && city ? (

    <Container>
      <View style={s.meteo_container}>
        <MeteoBasic
          onPressTemperature={goToForecastPage}
          city={city}
          temperature={parseInt(currentWeather.temperature)}
          interpretation={getWeatherIntepration(currentWeather.weathercode)}
        />
      </View>

      <View style={s.searchbar_container}>
        <SearchBar onSubmit={submitSearch} />
      </View>

      <View style={s.advanced_meteo_container}>
        <MeteoAdvanced
          windspeed={currentWeather.windspeed}
          dusk={weatherData.daily.sunrise[0].split("T")[1]}
          dawn={weatherData.daily.sunset[0].split("T")[1]}
        />
      </View>

    </Container>


  ) : null;
}
