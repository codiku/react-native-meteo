import { Home } from "./pages/Home/Home";
import {
  SafeAreaView,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { ImageBackground } from "react-native";
import backgroundImg from "./assets/background.png";
import { s } from "./App.style";
import AlataRegular from "./assets/fonts/Alata-Regular.ttf";
import { useFonts } from "expo-font";

export default function App() {
  const [isFontLoaded] = useFonts({
    "Alata-Regular": AlataRegular,
  });

  return (
    <ImageBackground
      source={backgroundImg}
      style={s.img_background}
      imageStyle={s.img}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          {isFontLoaded ? <Home /> : null}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
