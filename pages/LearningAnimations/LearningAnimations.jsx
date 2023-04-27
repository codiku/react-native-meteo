import { useEffect, useState } from "react"
import { View } from "react-native"

export function LearningAnimations() {
    const [x, setX] = useState(0)

    useEffect(() => {
        /* setInterval(() => {
             setX(x => x + 1)
         }, 25)
         */
    }, [])
    return <View>
        <View style={{ backgroundColor: "orange", height: 100, width: 100, transform: [{ translateX: x }] }} />
    </View>
}