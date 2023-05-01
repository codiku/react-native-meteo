
import { useEffect, useRef } from "react"
import { Dimensions, StyleSheet, View } from "react-native"
import { GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler"
import Animated, { runOnJS, runOnUI, useAnimatedGestureHandler, scrollTo, useAnimatedStyle, useWorkletCallback, useSharedValue, withSpring, withTiming, useDerivedValue, useAnimatedScrollHandler, interpolate, Extrapolate, useAnimatedRef } from "react-native-reanimated"
const SQUARE_SIZE = 200
const CIRCLE_PERIMETER = 400
const CIRCLE_RADIUS = CIRCLE_PERIMETER / 2
const H = Dimensions.get("screen").height
const W = Dimensions.get("screen").width
const IMG_MAX_H = 300
const IMG_MIN_H = 100
const items = [
    {
        title: "Upcoming Show Live from Paris",
        subtitle: "SPRING-SUMMER 2021",
        picture: require("./assets/chanel.jpg"),
    },
    {
        title: "In Boutiques",
        subtitle: "FALL-WINTER 2020/21",
        picture: require("./assets/sonnie-hiles-pU4J5VFnqCQ-unsplash-with-gradient.jpg"),
    },
    {
        title: "Deauville Film Festival",
        subtitle: "CHANEL IN CINEMA",
        picture: require("./assets/laura-chouette-NFrPPyGe5q0-unsplash-with-gradient.jpg"),
    },
    {
        title: "IN BOUTIQUES",
        subtitle: "Métiers d'art 2019/20",
        picture: require("./assets/butsarakham-buranaworachot-au6Gddf1pZQ-unsplash.jpg"),
    },

    {
        title: "Balade en Méditerranée",
        subtitle: "CRUISE 2020/21",
        picture: require("./assets/christopher-campbell-A3QXXEfcA1U-unsplash.jpg"),
    },
    {
        title: "Spring-Summer 2020 Campaign",
        subtitle: "EYEWEAR",
        picture: require("./assets/chase-fade-Pb13EUxzMDw-unsplash.jpg"),
    },
    {
        title: "Upcoming Show Live from Paris 2",
        subtitle: "SPRING-SUMMER 2021 2 ",
        picture: require("./assets/chanel.jpg"),
    },
    {
        title: "In Boutiques  2",
        subtitle: "FALL-WINTER 2020/21 2",
        picture: require("./assets/sonnie-hiles-pU4J5VFnqCQ-unsplash-with-gradient.jpg"),
    },
    {
        title: "Deauville Film Festival 2",
        subtitle: "CHANEL IN CINEMA 2",
        picture: require("./assets/laura-chouette-NFrPPyGe5q0-unsplash-with-gradient.jpg"),
    },
    {
        title: "IN BOUTIQUES 2",
        subtitle: "Métiers d'art 2019/20 2",
        picture: require("./assets/butsarakham-buranaworachot-au6Gddf1pZQ-unsplash.jpg"),
    },

    {
        title: "Balade en Méditerranée 2 ",
        subtitle: "CRUISE 2020/21 2",
        picture: require("./assets/christopher-campbell-A3QXXEfcA1U-unsplash.jpg"),
    },
    {
        title: "Spring-Summer 2020 Campaign 2",
        subtitle: "EYEWEAR",
        picture: require("./assets/chase-fade-Pb13EUxzMDw-unsplash.jpg"),
    },
];

export function LearningAnimations() {
    const yDistance = useSharedValue(0)


    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (e) => {
            yDistance.value = e.contentOffset.y
        },
    })

    return <Animated.ScrollView
        scrollEventThrottle={16} onScroll={scrollHandler} style={[s.container]}>
        {items.map((item, i) => <ListItem item={item} key={item.title} i={i} yDistance={yDistance} />)}
    </Animated.ScrollView>

}

const ListItem = ({ item, yDistance, i }) => {

    const animStyle = useAnimatedStyle(() => {
        console.log("scroll", yDistance.value, " index ", i, " ",)

        return {
            height: interpolate(yDistance.value,
                [i * IMG_MAX_H, (i * IMG_MAX_H) - IMG_MAX_H],
                [IMG_MAX_H, IMG_MIN_H],
                Extrapolate.CLAMP
            )
        }
    })
    return <Animated.Image resizeMode="cover" style={[s.image, animStyle]} source={item.picture} />

}

const s = StyleSheet.create({
    container: {
        flex: 1,
    },
    listItem: {
        flex: 1,
    },
    image: {
        width: "100%",
        height: IMG_MIN_H
    }

})