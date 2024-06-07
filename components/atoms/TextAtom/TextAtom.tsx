import { View, Text } from "react-native";
import React from "react";
import styles from "./TextAtom.styles";
import { TextAtomTypes } from "./TextAtomTypes";

export default function TextAtom(props: TextAtomTypes) {
    return <Text style={styles.textStyle} {...props} />;
}
