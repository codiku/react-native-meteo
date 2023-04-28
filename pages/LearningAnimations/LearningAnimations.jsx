import { Dimensions, SafeAreaView, View } from "react-native"
import { WaterDrop } from "../../components/WaterDrop/WaterDrop";
import Animated, {
    useSharedValue,
    withSpring,
    useAnimatedStyle,
    useAnimatedGestureHandler,
    withTiming,
} from 'react-native-reanimated';
import { PanGestureHandler } from "react-native-gesture-handler";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
const LEFT_SCREEN = 0
const RIGHT_SCREEN = Dimensions.get("window").width
const TOP_SCREEN = 0
const BOT_SCREEN = Dimensions.get("window").height
const SQUARE_SIZE = 100
export function LearningAnimations() {

    /* Animations values */
    const animSquareX = useSharedValue(0);
    const animSquareOpacity = useSharedValue(1);

    /* Running animations */
    useEffect(() => {
        animSquareX.value = withTiming(RIGHT_SCREEN - SQUARE_SIZE, { duration: 2000 })
        animSquareOpacity.value = withTiming(0, { duration: 2000 })
    }, [])

    /* Associating animations to style properties */
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: animSquareX.value,
                },
            ],
            opacity: animSquareOpacity.value
        };
    });

    /* Sending the animation style to Animated.View */
    return <Animated.View style={[s.square, animatedStyle]} />


}
/*
*/

const s = StyleSheet.create({
    square: { backgroundColor: 'blue', height: SQUARE_SIZE, width: SQUARE_SIZE }
})