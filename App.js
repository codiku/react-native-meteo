import { s } from "./App.style";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Home } from "./pages/Home/Home";
import { Forecasts } from "./pages/Forecasts/Forecasts.jsx";
import { Alert, ImageBackground, View } from "react-native";
import backgroundImg from "./assets/background.png";
import { useEffect, useState } from "react";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { MeteoAPI } from "./api/meteo";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import Constants from "expo-constants";
import { Spinner } from "./components/Spinner/Spinner";
import { LearningAnimations } from "./pages/LearningAnimations/LearningAnimations";
const Stack = createNativeStackNavigator();

const navTheme = {
  colors: {
    background: "transparent",
  },
};

export default function App() {
  /*
  const [coordinates, setCoordinates] = useState();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [isFontLoaded] = useFonts({
    "Alata-Regular": require("./assets/fonts/Alata-Regular.ttf"),
  });


  useEffect(() => {
    subscribeToNotifications();
    // App is in background or killed and then the notification is pressed
    Notifications.addNotificationResponseReceivedListener((response) => {
      console.log(
        "addNotificationResponseReceivedListener",
        response.notification.request.content.data
      );
    });
    // App is opened and notification and is received
    Notifications.addNotificationReceivedListener((notification) => {
      console.log(
        "addNotificationReceivedListener",
        notification.request.content.data
      );
    });
    getUserCoordinates();
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetchWeatherByCoords(coordinates);
      fetchCityByCoords(coordinates);
    }
  }, [coordinates]);

  async function subscribeToNotifications() {
    let token;
    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        if (status !== "granted") {
          alert("Failed to get permissions");
          return;
        }
      }
      token = (
        await Notifications.getExpoPushTokenAsync({
          projectId: Constants.expoConfig.extra.projectId,
        })
      ).data;
      // Send the token to the backend for it to store
      console.log("Token EXPO", token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    return token;
  }

  async function fetchWeatherByCoords(coords) {
    const weatherResponse = await MeteoAPI.fetchWeatherByCoords(coords);
    setWeather(weatherResponse);
  }

  async function fetchCityByCoords(coords) {
    const cityResponse = await MeteoAPI.fetchCityByCoords(coords);
    setCity(cityResponse);
  }

  async function fetchCoordsByCity(city) {
    try {
      const coordsResponse = await MeteoAPI.fetchCoordsByCity(city);
      setCoordinates(coordsResponse);
    } catch (err) {
      Alert.alert("Aouch !", err);
    }
  }

  async function getUserCoordinates() {
    const { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setCoordinates({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoordinates({ lat: "48.85", lng: "2.35" });
    }
  }

  return (

    <NavigationContainer theme={navTheme}>
      <ImageBackground
        imageStyle={s.img}
        style={s.img_background}
        source={backgroundImg}
      >
        <SafeAreaProvider>
          <SafeAreaView style={s.container}>
          {isFontLoaded && weather ?
             (
              <Stack.Navigator
                screenOptions={{
                  headerShown: false,
                  animation: "fade",
                }}
                initialRouteName="LearnAnimations"
              >
                <Stack.Screen name="Home">
                  {() => (
                    <Home
                      city={city}
                      weather={weather}
                      onSubmitSearch={fetchCoordsByCity}
                    />
                  )}
                </Stack.Screen>
                <Stack.Screen name="Forecasts" component={Forecasts} />
            
              </Stack.Navigator>
            )
          :  <View style={{flex:1,alignItems:'center', justifyContent:'center'}}><Spinner/></View>}
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </NavigationContainer>
              
                           
  );
 */
return <>
<LearningAnimations/>
</>
 
}
