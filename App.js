import { Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import { useFonts } from "expo-font";

export default function App() {
  const [isFontLoaded] = useFonts({
    "Alata-Regular": require("./assets/fonts/Alata-Regular.ttf"),
  });
  return (
    <SafeAreaView>
      {isFontLoaded && (
        <Text style={{ fontFamily: "Alata-Regular", fontSize: 50 }}>Hello</Text>
      )}
    </SafeAreaView>
  );
}
