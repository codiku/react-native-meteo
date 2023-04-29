import { Dimensions, SafeAreaView, Text, View } from "react-native"
import { WaterDrop } from "../WaterDrop/WaterDrop";
import Animated, {
    useSharedValue,
    withSpring,
    withRepeat,
    useAnimatedStyle,
    withTiming,
} from 'react-native-reanimated';
import { PanGestureHandler } from "react-native-gesture-handler";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Txt } from "../Txt/Txt"
const LEFT_SCREEN = 0
const RIGHT_SCREEN = Dimensions.get("screen").width
const TOP_SCREEN = 0
const BOT_SCREEN = Dimensions.get("screen").height
const SQUARE_SIZE = 50
const HALF_SCREEN_HOR = Dimensions.get("screen").width / 2
const HALF_SCREEN_VERT = Dimensions.get("screen").height / 2
export function Spinner() {

    /* Animations values */
    const animSquareScale = useSharedValue(1);
    const animSquareRotateX = useSharedValue("0deg");
    const animSquarebackgroundColor = useSharedValue("#5FD4CE");


    /* Running animations */
    useEffect(() => {
        animSquareRotateX.value = withRepeat(withTiming("360deg", { duration: 3000 }), -1)
        animSquarebackgroundColor.value = withRepeat(withTiming("#FCC77A", { duration: 3000 }), -1, true)
        animSquareScale.value = withRepeat(withTiming(1.5, { duration: 3000 }), -1)
    }, [])

    /* Associating animations to style properties */
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    rotate: animSquareRotateX.value
                },
                { scale: animSquareScale.value }
            ],
            backgroundColor: animSquarebackgroundColor.value
        };
    });

    /* Sending the animation style to Animated.View */
    return <Animated.View style={[s.square, animatedStyle]} >
        <Text style={{ color: "white", fontSize: 10 }}>Loading...</Text>
    </Animated.View>


}
/*
*/

const s = StyleSheet.create({
    square: { borderRadius: 15, justifyContent: 'center', alignItems: 'center', height: SQUARE_SIZE, width: SQUARE_SIZE }
})