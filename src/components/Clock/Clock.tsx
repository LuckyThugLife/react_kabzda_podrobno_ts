import React, {useEffect, useState} from "react";

type PropsType = {}

const get2DigitsString = (num: number) => num < 10 ? "0" + num : num

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("TICK")
            setDate(new Date())
        }, 1000)
        return ()=>{
            clearInterval(intervalId)
        }
    }, [])


   /* const hoursString = date.getHours() < 10
        ? "0" + date.getHours()
        : date.getHours()

    const minutesString = date.getMinutes() < 10
        ? "0" + date.getMinutes()
        : date.getMinutes()

    const secondsString = date.getSeconds() < 10
        ? "0" + date.getSeconds()
        : date.getSeconds()
*/

   /* const hoursString = get2DigitsString(date.getHours())
    const minutesString = get2DigitsString(date.getMinutes())
    const secondsString = get2DigitsString(date.getSeconds())*/

    return <div>
        <span>{get2DigitsString(date.getHours())}</span>
        :
        <span>{get2DigitsString(date.getMinutes())}</span>
        :
        <span>{get2DigitsString(date.getSeconds())}</span>
    </div>
}