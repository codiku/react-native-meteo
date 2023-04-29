
import { useEffect } from "react"
import { Dimensions, StyleSheet, View } from "react-native"
import { GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler"
import Animated, { runOnJS, runOnUI, useAnimatedGestureHandler, useAnimatedStyle, useWorkletCallback, useSharedValue, withSpring, withTiming, useDerivedValue } from "react-native-reanimated"
const LEFT_SCREEN = 0
const RIGHT_SCREEN = Dimensions.get("screen").width
const TOP_SCREEN = 0
const BOT_SCREEN = Dimensions.get("screen").height
const SQUARE_SIZE = 100
const CIRCLE_PERIMETER = 400
const CIRCLE_RADIUS = CIRCLE_PERIMETER / 2
const HALF_SCREEN_HOR = Dimensions.get("screen").width / 2
const HALF_SCREEN_VERT = Dimensions.get("screen").height / 2
export function LearningAnimations() {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);




    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, ctx) => {

            ctx.translateX = translateX.value;
            ctx.translateY = translateY.value;
        },
        onActive: (event, ctx) => {

            translateX.value = ctx.translateX + event.translationX;
            translateY.value = ctx.translateY + event.translationY;
        },
        onEnd: (_) => {
            const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2)
            if (distance < CIRCLE_RADIUS) {
                translateX.value = withSpring(0);
                translateY.value = withSpring(0);
            }
        },
    });


    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value,
                },
                {
                    translateY: translateY.value,
                },
            ],
        };
    });
    return <GestureHandlerRootView style={{ flex: 1, }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={s.circle}>
                <PanGestureHandler onGestureEvent={gestureHandler}>

                    <Animated.View style={[s.square, animatedStyle]} />
                </PanGestureHandler>
            </View>
        </View>
    </GestureHandlerRootView>
}


const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    square: {
        height: SQUARE_SIZE,
        width: SQUARE_SIZE,
        backgroundColor: 'rgba(0,140,256,1)',
        borderRadius: 15
    },
    circle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: CIRCLE_PERIMETER,
        width: CIRCLE_PERIMETER,
        borderRadius: CIRCLE_RADIUS,
        borderWidth: 5,
        borderColor: 'rgba(0,140,256,1)'
    }
})