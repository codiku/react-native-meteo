import { s } from "./Forecasts.style.js";
import { Txt } from "../../components/Txt/Txt.jsx";
import { useRoute } from "@react-navigation/native";

export function Forecasts({}) {
  const { params } = useRoute();
  console.log(params);
  return <Txt>Forecasts</Txt>;
}
