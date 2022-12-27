import { Text, View } from "react-native";
import { s } from "./Home.style";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { useEffect, useState } from "react";
import { MeteoAPI } from "../../api/meteo";

export function Home() {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();

  useEffect(() => {
    getUserCoords();
  }, []);

  useEffect(() => {
    if (coords) {
      fetchWeather(coords);
    }
  }, [coords]);

  console.log(weather);
  async function getUserCoords() {
    let { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setCoords({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoords({ lat: "48.85", lng: "2.35" });
    }
  }

  async function fetchWeather(coords) {
    const weatherResponse = await MeteoAPI.fetchWeatherFromCoords(
      coords
    );
    setWeather(weatherResponse);
  }

  return (
    <>
      <View style={s.meteo_basic}></View>
      <View style={s.searchbar_container}></View>
      <View style={s.meteo_advanced}></View>
    </>
  );
}
