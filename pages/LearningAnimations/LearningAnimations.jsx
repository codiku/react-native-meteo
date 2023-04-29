
import { useEffect } from "react"
import { Dimensions, StyleSheet, View } from "react-native"
import { GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler"
import Animated, { runOnJS, runOnUI, useAnimatedGestureHandler, useAnimatedStyle, useWorkletCallback, useSharedValue, withSpring, withTiming, useDerivedValue, useAnimatedScrollHandler, interpolate, Extrapolate } from "react-native-reanimated"
const SQUARE_SIZE = 200
const CIRCLE_PERIMETER = 400
const CIRCLE_RADIUS = CIRCLE_PERIMETER / 2
const H = Dimensions.get("screen").height
const W = Dimensions.get("screen").width
//https://rgbacolorpicker.com/
const colors = ['rgba(245, 39, 39, 0.8)', 'rgba(245, 140, 39, 0.8)', 'rgba(245, 226, 39, 0.8)', 'rgba(39, 245, 97, 0.8)', 'rgba(39, 153, 245, 0.8)', 'rgba(71, 39, 245, 0.8)', 'rgba(245, 39, 238, 0.8)']

export function LearningAnimations() {
    const translateX = useSharedValue(0)
    const scrollHandler = useAnimatedScrollHandler((e) => {
        translateX.value = e.contentOffset.x
    })
    return <Animated.ScrollView onScroll={scrollHandler} horizontal style={[s.container]}>
        {colors.map((c, i) => <ListItem key={c} index={i} color={c} opacity={(i + 1) / 10} translateX={translateX} />)}
    </Animated.ScrollView>

}

const ListItem = ({ color, translateX, index }) => {
    const screenTranslateXInterpolationValues = [(index - 1) * W, index * W, (index + 1) * W]

    const animStyle = useAnimatedStyle(() => {
        const scaleInterpOnX = interpolate(translateX.value,
            screenTranslateXInterpolationValues,
            [0.5, 1, 0.5],
        )
        const borderRadiusInterpOnX = interpolate(translateX.value,
            screenTranslateXInterpolationValues,
            [0, SQUARE_SIZE / 4, 0],
        )
        return {
            transform: [
                { scale: scaleInterpOnX },
            ],
            borderRadius: borderRadiusInterpOnX
        }
    })
    return <View style={[s.listItem, { backgroundColor: color }]} >
        <Animated.View style={[s.square, animStyle]} />
    </View>
}

const s = StyleSheet.create({
    container: {
        flex: 1,
    },
    listItem: {
        flex: 1,
        height: H,
        width: W,
        justifyContent: 'center',
        alignItems: 'center'
    },
    square: {
        height: 200,
        width: 200,
        backgroundColor: "white"
    }

})