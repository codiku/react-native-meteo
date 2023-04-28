import { Dimensions, SafeAreaView, View } from "react-native"
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
const LEFT_SCREEN = 0
const RIGHT_SCREEN = Dimensions.get("screen").width
const TOP_SCREEN = 0
const BOT_SCREEN = Dimensions.get("screen").height
const SQUARE_SIZE = 100
const HALF_SCREEN_HOR = Dimensions.get("screen").width / 2
const HALF_SCREEN_VERT = Dimensions.get("screen").height / 2
export function LearningAnimations() {

    /* Animations values */
    const animSquareX = useSharedValue(HALF_SCREEN_HOR - SQUARE_SIZE / 2);
    const animSquareOpacity = useSharedValue(1);
    const animSquareScale = useSharedValue(1);

    /* Running animations */
    useEffect(() => {
        // animSquareX.value = withTiming(RIGHT_SCREEN - SQUARE_SIZE, { duration: 2000 })
        // animSquareOpacity.value = withSpring(1, { duration: 2000 })
        animSquareScale.value = withRepeat(withSpring(2, { duration: 5000 }), -1, true)
    }, [])

    /* Associating animations to style properties */
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: animSquareX.value,
                },
                {
                    scale: animSquareScale.value
                }
            ],
            borderRadius: animSquareScale.value * 30,
            opacity: animSquareOpacity.value
        };
    });

    /* Sending the animation style to Animated.View */
    return <Animated.View style={[s.square, animatedStyle]} />


}
/*
*/

const s = StyleSheet.create({
    square: { backgroundColor: 'blue', position: "absolute", top: HALF_SCREEN_VERT - (SQUARE_SIZE / 2), height: SQUARE_SIZE, width: SQUARE_SIZE }
})