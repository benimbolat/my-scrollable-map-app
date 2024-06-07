import { Button, View } from "react-native";
import React from "react";
import { ButtonAtomTypes } from "./ButtonAtomTypes";

export default function ButtonAtom(props: ButtonAtomTypes) {
    return (
        <View>
            <Button {...props} />
        </View>
    );
}
