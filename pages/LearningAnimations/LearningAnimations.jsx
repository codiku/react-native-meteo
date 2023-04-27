import { useEffect, useRef, useState } from "react"
import { Animated, Dimensions, View } from "react-native"

export function LearningAnimations() {
    const opacity = useRef(new Animated.Value(0)).current;
    const x = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
        }).start();
        Animated.timing(x, {
            toValue: 200,
            duration: 3000,
            useNativeDriver: true,
        }).start();
    }, [])
    return <View>
        <Animated.View style={{ backgroundColor: "orange", height: 100, width: 100, opacity: opacity, transform: [{ translateX: x }] }} />
    </View>
}