import { TouchableOpacity, View } from "react-native";
import { Txt } from "../../components/Txt/Txt";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Container } from "../../components/Container/Container";
import { s } from "./Forecast.style";
export function Forecast({ navigation }) {
  const nav = useNavigation();
  const { params } = useRoute();

  const backButton = (
    <TouchableOpacity onPress={() => nav.goBack()}>
      <Txt style={s.back_txt}>{"<"}</Txt>
    </TouchableOpacity>
  );

  const header = (
    <View>
      <View style={s.header}>
        <View style={s.back_btn}>{backButton}</View>
        <Txt style={s.title}>City</Txt>
      </View>
      <Txt style={s.subtitle}>Prévision sur 7 jours</Txt>
    </View>
  );

  const forecastList = (
    <View style={{ flex: 1, backgroundColor: "blue", marginVertical: 50 }}>
      <Txt>Todo</Txt>
    </View>
  );

  return (
    <Container>
      {header}
      {forecastList}
    </Container>
  );
}
