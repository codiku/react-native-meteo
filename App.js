import { Home } from "./pages/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Forecast } from "./pages/Forecast/Forecast";
import { useFonts } from "expo-font";
const Stack = createNativeStackNavigator();

export default function App() {
  const [isFontLoaded] = useFonts({
    "Alata-Regular": require("./assets/fonts/Alata-Regular.ttf"),
  });
  return isFontLoaded ? (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Forecast" component={Forecast} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  ) : null;
}
