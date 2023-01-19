import React, {useState} from "react";

type UnControlledOnOffPropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}

export function UnControlledOnOff(props: UnControlledOnOffPropsType) {
    console.log("UnControlledOnOff rendering")
    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"

    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: on ? "white" : "red"

    }
    const indicateStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"

    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return <div>
        <div style={onStyle} onClick={onClicked}>on
        </div>
        <div style={offStyle} onClick={offClicked}>off
        </div>
        <div style={indicateStyle}></div>
    </div>

}

export default UnControlledOnOff

