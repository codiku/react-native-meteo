import { StyledContainer, StyledTxtLabel, StyledTxtValue, s } from "./MeteoAdvanced.style";

import { View } from "react-native";

export function MeteoAdvanced({dusk,dawn,windspeed}) {
  return (
    <View style={s.container}>
      <StyledContainer>
        <StyledTxtLabel>{dusk}</StyledTxtLabel>
        <StyledTxtValue>Aube</StyledTxtValue>
      </StyledContainer>
      <StyledContainer>
        <StyledTxtLabel>{dawn}</StyledTxtLabel>
        <StyledTxtValue>Crépuscule</StyledTxtValue>
      </StyledContainer>
      <StyledContainer>
        <StyledTxtLabel>{windspeed.toFixed(0)} km/h</StyledTxtLabel>
        <StyledTxtValue>Vent</StyledTxtValue>
      </StyledContainer>
    </View>
  );
}
