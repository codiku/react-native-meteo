import { useEffect, useState } from "react";

import { Text } from "react-native";
import { nowToHHMM } from "./../../services/date-time";

export function Clock() {
  const [time, setTime] = useState(nowToHHMM());
  useEffect(() => {
    let interval = setInterval(() => {
      setTime(nowToHHMM());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return <Text>{time}</Text>;
}
