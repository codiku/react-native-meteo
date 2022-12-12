import * as Location from "expo-location";

import { View, SafeAreaView } from "react-native";
import { useEffect, useState } from "react";

import { MeteoBasic } from "./components/MeteoBasic/MeteoBasic";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { s } from "./App.style";
import { useFonts } from "expo-font";

const API_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=Europe%2FBerlin&current_weather=true";

export default function App() {
  const [coordinates, setCoordinates] = useState();
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
    }
  }, [coordinates]);

  async function fetchWeather() {
    const weatherResponse = await axios.get(API_URL);
    setWeatherData(weatherResponse.data);
  }
  async function getUserCoordinates() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      // Default to Paris
      setCoordinates({ lat: "48.85", lng: "2.35" });
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setCoordinates({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  }

  return isFontLoaded && weatherData ? (
    <SafeAreaView style={s.container}>
      <View style={s.meteo_container}>
        <MeteoBasic />
      </View>
      <View style={s.searchbar_container}>
        <SearchBar />
      </View>
      <View style={s.advanced_meteo_container}>
        <View style={{ backgroundColor: "blue", height: 150 }} />
      </View>
    </SafeAreaView>
  ) : null;
}
