import { TextInput } from "react-native";
import { s } from "./SearchBar.style";

export function SearchBar({ onSubmit }) {
  return <TextInput onSubmitEditing={onSubmit} style={s.input} placeholder="Cherche une ville... Ex: Paris" placeholderTextColor={"grey"} />

}
