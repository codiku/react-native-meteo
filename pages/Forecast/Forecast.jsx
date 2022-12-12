import { TouchableOpacity, View } from "react-native";
import { Txt } from "../../components/Txt/Txt";
import { useNavigation, useRoute } from "@react-navigation/native";

export function Forecast({ navigation }) {
  const nav = useNavigation();
  const { params } = useRoute();
  return (
    <TouchableOpacity
      onPress={() => nav.goBack()}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Txt style={{ color: "black" }}>
        Forecasts ! {JSON.stringify(params)}{" "}
      </Txt>
    </TouchableOpacity>
  );
}
