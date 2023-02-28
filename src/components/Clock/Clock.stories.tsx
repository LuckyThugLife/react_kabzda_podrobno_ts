import React from "react";
import {Clock} from "./Clock";

export default {
    title: "Clock",
    component: Clock
}


export const ClockAnalogBaseExample = () => {
return <Clock mode={"analog"}/>

}
export const ClockDigitalBaseExample = () => {
    return <Clock mode={"digital"}/>

}

