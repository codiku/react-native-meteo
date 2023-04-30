
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
const pics = ["https://fastly.picsum.photos/id/1045/200/200.jpg?hmac=NOMPYGOtm89-zlf7NNDG7qSjCOy3XpvrdQRBF4aUZgE", "https://fastly.picsum.photos/id/89/200/200.jpg?hmac=urh6JbqBxFLcQQEPfUQ23bUlEH7vg3qqqUOts86_LLI", "https://fastly.picsum.photos/id/23/200/200.jpg?hmac=IMR2f77CBqpauCb5W6kGzhwbKatX_r9IvgWj6n7FQ7c", "https://fastly.picsum.photos/id/543/200/200.jpg?hmac=YuoZMit51ELMe2bbgwymVwwXFjmpaZ7hS_J1MfjC1IQ", "https://fastly.picsum.photos/id/260/200/200.jpg?hmac=Nu9V4Ixqq3HiFhfkcsL5mNRZAZyEHG2jotmiiMRdxGA", "https://fastly.picsum.photos/id/511/200/200.jpg?hmac=QTzrMGu9nrJDRE4TMoboI_EAM5ZdwXF09ylHr7LFZCg", "https://fastly.picsum.photos/id/596/200/200.jpg?hmac=TiMsstBNF6YKq9Gn7QGsihITEUcv_O8QuTXEVR3T6GA"]
export function LearningAnimations() {
    const translateX = useSharedValue(0)
    const scrollHandler = useAnimatedScrollHandler((e) => {
        translateX.value = e.contentOffset.x
    })
    return <Animated.ScrollView onScroll={scrollHandler} horizontal style={[s.container]}>
        {colors.map((c, i) => <ListItem pic={pics[i]} key={c} index={i} color={c} opacity={(i + 1) / 10} translateX={translateX} />)}
    </Animated.ScrollView>

}

const ListItem = ({ color, translateX, index, pic }) => {
    const screenTranslateXInterpolationValues = [(index - 1) * W, index * W, (index + 1) * W]

    const animStyle = useAnimatedStyle(() => {
        const scaleInterpOnX = interpolate(translateX.value,
            screenTranslateXInterpolationValues,
            [0.5, 1, 0.5],
        )
        const borderRadiusInterpOnX = interpolate(translateX.value,
            screenTranslateXInterpolationValues,
            [0, SQUARE_SIZE / 2, 0],
        )
        return {
            transform: [
                { scale: scaleInterpOnX },
            ],
            borderRadius: borderRadiusInterpOnX
        }
    })
    return <View style={[s.listItem, { backgroundColor: color }]} >
        <Animated.Image style={[s.square, animStyle]} source={{ uri: pic }} />
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
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "white"
    }

})