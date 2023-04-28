import { Dimensions, View } from "react-native"
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
const LEFT_SCREEN = 0
const RIGHT_SCREEN = Dimensions.get("window").width
const TOP_SCREEN = 0
const BOT_SCREEN = Dimensions.get("window").height
const SQUARE_SIZE = 100
export function LearningAnimations() {

    const x = useSharedValue(0);
    /*
        const gestureHandler = useAnimatedGestureHandler({
            onStart: (_, ctx) => {
                ctx.startX = 0;
            },
            onActive: (event, ctx) => {
                x.value = ctx.startX + event.translationX;
            },
    
        });
         */
    useEffect(() => {
        x.value = withTiming(RIGHT_SCREEN - SQUARE_SIZE, { duration: 2000 })
    }, [])

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: x.value,
                },
            ],
        };
    });

    return <>
        <Animated.View style={[s.square, animatedStyle]} />
    </>

}
/*
*/

const s = StyleSheet.create({
    square: { backgroundColor: 'blue', height: SQUARE_SIZE, width: SQUARE_SIZE }
})