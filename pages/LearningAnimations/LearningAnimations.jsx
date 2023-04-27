import { useEffect, useRef, useState } from "react"
import { Animated, Dimensions, Easing, View } from "react-native"
import { WaterDrop } from "../../components/WaterDrop/WaterDrop";
export function LearningAnimations() {
    let uniqId = 0
    const [droplist, setDroplist] = useState([{ x: 0, id: 99 }])

    useEffect(() => {
        setInterval(() => {
            addDropRandomX()
        }, 200)
    }, [])

    function addDropRandomX() {
        const randomX = Math.floor(Math.random() * Dimensions.get("screen").width) + 1;
        uniqId++

        setDroplist(list => [...list, { x: randomX, id: uniqId }])

    }


    return <View>
        {droplist.map(d => <WaterDrop key={d.id} drop={d} />)}
    </View>
}
/*
*/