import React, {useMemo, useState} from "react";

export default {
    title: "UseState demo"
}
function generateData() {
    //difficult counting
    console.log("generateData")
    return 34567869865
}

export const Example1 = () => {
    console.log("Example1")

//    const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData)//[0, function(newValue) {}]

    return <>
        <button onClick={() => setCounter(state=>state + 1)}>+</button>
        {counter}
    </>
}
