import { TextProps } from "react-native";

export interface TextAtomTypes extends TextProps {
    type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
}
