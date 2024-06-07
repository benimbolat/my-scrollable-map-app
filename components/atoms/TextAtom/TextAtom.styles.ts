import { Fonts } from "@/constants/Fonts";
import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const atomTextStyle = StyleSheet.create({
    textStyle: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "400",
        color: Colors.black,
        fontFamily: Fonts.default,
    },
});

export default atomTextStyle;
