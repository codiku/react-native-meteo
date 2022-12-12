import { ImageBackground, SafeAreaView } from "react-native";
import { s } from "./Container.style";

export function Container({ children }) {
  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      resizeMode="cover"
      style={s.background}
      imageStyle={s.background_image}
    >
      <SafeAreaView style={s.container}>{children}</SafeAreaView>
    </ImageBackground>
  );
}
