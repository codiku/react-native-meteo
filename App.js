import { Home } from "./pages/Home/Home";
import AlataRegular from "./assets/fonts/Alata-Regular.ttf";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Forecast } from "./pages/Forecast/Forecast";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";

const Stack = createNativeStackNavigator();

const navTheme = {
  colors: {
    background: "transparent",
  },
};

export default function App() {
  const [isFontLoaded] = useFonts({
    "Alata-Regular": AlataRegular,
  });
  const lastNotification =
    Notifications.useLastNotificationResponse();

  useEffect(() => {
    subscribeToNotification();
  }, []);

  useEffect(() => {
    lastNotification &&
      console.log(lastNotification.notification.request.content.data);
  }, [lastNotification]);

  async function subscribeToNotification() {
    const token = await Notifications.getExpoPushTokenAsync();
    console.log("Le token", token);
  }
  return isFontLoaded ? (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        screenOptions={{
          animation: "fade",
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Forecast" component={Forecast} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : null;
}
