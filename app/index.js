import { View, Text, Button } from "react-native";
import React from "react";
import ButtonAtom from "../components/atoms/ButtonAtom/ButtonAtom";

export default function app() {
    return (
        <View>
            <Text>Open up App.js to start working on your app!</Text>
            <ButtonAtom title="Click me" />
        </View>
    );
}
