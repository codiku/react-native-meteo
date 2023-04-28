import { Dimensions, SafeAreaView, Text, View } from "react-native"
import { WaterDrop } from "../../components/WaterDrop/WaterDrop";
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
import { Txt } from "../../components/Txt/Txt"
const LEFT_SCREEN = 0
const RIGHT_SCREEN = Dimensions.get("screen").width
const TOP_SCREEN = 0
const BOT_SCREEN = Dimensions.get("screen").height
const SQUARE_SIZE = 100
const HALF_SCREEN_HOR = Dimensions.get("screen").width / 2
const HALF_SCREEN_VERT = Dimensions.get("screen").height / 2
export function LearningAnimations() {

    /* Animations values */
    const animSquareOpacity = useSharedValue(1);
    const animSquareRotateX = useSharedValue("0deg");
    const animSquarebackgroundColor = useSharedValue("#3878F4");


    /* Running animations */
    useEffect(() => {
        animSquareRotateX.value = withRepeat(withTiming("360deg", { duration: 3000 }), -1)
        animSquarebackgroundColor.value = withRepeat(withTiming("red", { duration: 3000 }), -1, true)
    }, [])

    /* Associating animations to style properties */
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    rotate: animSquareRotateX.value
                }
            ],
            opacity: animSquareOpacity.value,
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
    square: { borderRadius: 30, justifyContent: 'center', alignItems: 'center', height: SQUARE_SIZE, width: SQUARE_SIZE }
})