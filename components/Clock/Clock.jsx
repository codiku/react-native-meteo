import { useEffect, useState } from "react";

import { Txt } from "../Txt/Txt";
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
  return <Txt>{time}</Txt>;
}
