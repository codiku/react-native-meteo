import { View, SafeAreaView } from "react-native";

import { MeteoBasic } from "./components/MeteoBasic/MeteoBasic";
import { s } from "./App.style";
import { useFonts } from "expo-font";
import { SearchBar } from "./components/SearchBar/SearchBar";

export default function App() {
  const [isFontLoaded] = useFonts({
    "Alata-Regular": require("./assets/fonts/Alata-Regular.ttf"),
  });

  return isFontLoaded ? (
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
