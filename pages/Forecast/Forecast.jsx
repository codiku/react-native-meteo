import { Container } from "../../components/Container/Container.jsx";
import { Txt } from "../../components/Txt/Txt.jsx";
import { s } from "./Forecast.style.js";
import { useRoute } from "@react-navigation/native";
export function Forecast({}) {
  const { params } = useRoute();
  console.log("*** params !", params);
  return (
    <Container>
      <Txt>Forecast</Txt>
    </Container>
  );
}
