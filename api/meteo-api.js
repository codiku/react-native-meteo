import axios from "axios";

export class MeteoAPI {
  static async fetchWeatherByCoords(coords) {
    return (
      await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=Europe%2FBerlin&current_weather=true`
      )
    ).data;
  }

  static async fetchCityByCoords(coords) {
    return (
      await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lng}`
      )
    ).data.address.city;
  }

  static async fetchCoordsByCity(city) {
    const resp = await axios.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
    );
    const { latitude, longitude } = resp.data.results[0];
    return {
      lat: latitude,
      lng: longitude,
    };
  }
}
