import * as Location from "expo-location";

import { ImageBackground, View, SafeAreaView } from "react-native";
import { useEffect, useState } from "react";

import { MeteoAPI } from "./api/meteo-api";
import { MeteoAdvanced } from "./components/MeteoAdvanced/MeteoAdvanced";
import { MeteoBasic } from "./components/MeteoBasic/MeteoBasic";
import { SearchBar } from "./components/SearchBar/SearchBar.style";
import { getWeatherIntepration } from "./services/weather";
import { s } from "./App.style";
import { useFonts } from "expo-font";

export default function App() {
  const [coordinates, setCoordinates] = useState();
  const [city, setCity] = useState();
  const [weatherData, setWeatherData] = useState();
  const [isFontLoaded] = useFonts({
    "Alata-Regular": require("./assets/fonts/Alata-Regular.ttf"),
  });

  useEffect(() => {
    getUserCoordinates();
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetchWeather();
      fetchCity();
    }
  }, [coordinates]);

  async function fetchCity() {
    const cityResponse = await MeteoAPI.fetchCityByCoords(coordinates);
    setCity(cityResponse);
  }
  async function fetchWeather() {
    const weatherResponse = await MeteoAPI.fetchWeatherByCoords(coordinates);
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
  const currentWeather = weatherData && weatherData["current_weather"];

  return isFontLoaded && weatherData && city ? (
    <ImageBackground
      source={require("./assets/background.png")}
      resizeMode="cover"
      style={s.background}
      imageStyle={s.background_image}
    >
      <SafeAreaView style={s.container}>
        <View style={s.meteo_container}>
          <MeteoBasic
            city={city}
            temperature={parseInt(currentWeather.temperature)}
            interpretation={getWeatherIntepration(currentWeather.weathercode)}
          />
        </View>
        <View style={s.searchbar_container}>
          <SearchBar />
        </View>
        <View style={s.advanced_meteo_container}>
          <MeteoAdvanced
            windspeed={currentWeather.windspeed}
            dusk={weatherData.daily.sunrise[0].split("T")[1]}
            dawn={weatherData.daily.sunset[0].split("T")[1]}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  ) : null;
}
