import { View } from "react-native";
import {
  s,
  StyledContainer,
  StyledLabel,
  StyledValue,
} from "./MeteoAdvanced.style.js";
import { Txt } from "../Txt/Txt";
export function MeteoAdvanced({ dusk, dawn, wind }) {
  return (
    <View style={s.container}>
      <StyledContainer>
        <StyledValue>{dusk}</StyledValue>
        <StyledLabel>Sunrise</StyledLabel>
      </StyledContainer>
      <StyledContainer>
        <StyledValue>{dawn}</StyledValue>
        <StyledLabel>Sunset</StyledLabel>
      </StyledContainer>
      <StyledContainer>
        <StyledValue>{wind} km/h</StyledValue>
        <StyledLabel>Wind speed</StyledLabel>
      </StyledContainer>
    </View>
  );
}
