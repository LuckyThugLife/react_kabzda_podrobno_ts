import React, {useState} from "react";

type OnOffPropsType = {
on?:boolean
    onClick:(on:boolean)=>void
}

export function OnOff(props: OnOffPropsType) {
    console.log("OnOff rendering")


    const onStyle= {
        width: "30px",
        height: "20px",
        border:"1px solid black",
        display:"inline-block",
        padding: "2px",
        backgroundColor:props.on ? "green" : "white"

    }
    const offStyle= {
        width: "30px",
        height: "20px",
        border:"1px solid black",
        display:"inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor:props.on ? "white" : "red"

    }
    const indicateStyle= {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border:"1px solid black",
        display:"inline-block",
        marginLeft: "5px",
        backgroundColor:props.on ? "green" : "red"

    }

        return <div>
            <div style={onStyle} onClick={()=>{props.onClick(true)}}> on</div>
            <div style={offStyle} onClick={()=>{props.onClick(false)}}> off</div>
            <div style={indicateStyle}></div>
        </div>

}

export default OnOff

