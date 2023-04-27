import waterDropImg from "../../assets/water-drop.png"
import { useEffect, useRef } from "react"
import { Animated, Dimensions, Easing, View } from "react-native"

export function WaterDrop({ drop, onAnimCompleted }) {
    const waterDropY = useRef(new Animated.Value(-100)).current;
    useEffect(() => {
        Animated.timing(waterDropY, {
            useNativeDriver: true,
            toValue: 700,
            duration: 5000,
        }).start(() => {
            onAnimCompleted(drop)
        })
    }, [])
    return <Animated.View style={{ position: "absolute", backgroundColor: 'blue', left: drop.x, height: 50, width: 50, transform: [{ translateY: waterDropY }] }} />
}