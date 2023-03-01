import React, {useEffect, useMemo, useState} from "react";

export default {
    title: "UseEffect demo"
}

export const SimpleExample = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log("SimpleExample")

    useEffect(() => {
        console.log("useEffect every render")

        document.title = counter.toString()
        //api.getUsers().then("")
        //setInterval
        //IndexedDB
        //document.getElementById
        //document.title = "User "

    })

    useEffect(() => {
        console.log("useEffect only first render (componentDidMount)")
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log("useEffect first render and every counter change")
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setCounter(counter + 1)}> count+</button>
        <button onClick={() => setFake(fake + 1)}> fake+</button>
    </>
}



export const SetIntervalExample = () => {

    const [counter, setCounter] = useState(1)
    console.log("SetIntervalExample")

    useEffect(() => {
       const intervalId = setInterval(() => {
            console.log("tick + 1")
            setCounter((state) => state + 1)
        }, 1000)
        return () => {
           clearInterval(intervalId)
        }
    }, [])

    return <>
        Hello, counter: {counter} fake: {fake}
    </>
}


export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1)
    console.log("Component rendered with " + counter)

    useEffect(() => {
        console.log("Reset occurred: " + counter)
        return () => {
            console.log("RESET EFFECT " + counter)
        }
    }, [counter])
    const increase = () => {
        setCounter(counter + 1)
    }

    return <>
        Hello, counter: {counter}
        <button onClick={increase}> +</button>
    </>
}

export const CaseTrackerExample = () => {

    const [text, setText] = useState("")
    console.log("Component rendered with " + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener("keypress", handler)
        return () => { window.removeEventListener("keypress", handler)}
    }, [text])

    return <>
        Typed text: {text}
    </>
}

export const SetTimeoutExample = () => {

    const [text, setText] = useState("")
    console.log("Component rendered with " + text)

    useEffect(() => {
        // const handler = (e: KeyboardEvent) => {
        //     console.log(e.key)
        //     setText(text + e.key)
        // }

 const timeoutId = setTimeout(()=>{
    console.log("TIMEOUT EXPIRED")
    setText("3 second passed")
}, 3000)
        return () => {
    clearTimeout(timeoutId)
        }
    }, [text])

    return <>
        text: {text}
    </>
}