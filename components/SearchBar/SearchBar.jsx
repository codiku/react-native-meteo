import { TextInput } from "react-native";
import { s } from "./SearchBar.style.js";

export function SearchBar({ onSubmit }) {
  return (
    <TextInput
      onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
      style={s.input}
      placeholder="Type a city... Ex: Paris"
    />
  );
}
