import { s } from "./Forecasts.style.js";
import { Txt } from "../../components/Txt/Txt.jsx";
import { useRoute } from "@react-navigation/native";
import { Header } from "../../components/Header/Header.jsx";

export function Forecasts({}) {
  const { params } = useRoute();

  return (
    <>
      <Header city={params.city} />
    </>
  );
}
