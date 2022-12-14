import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick:()=>void
}

export function Accordion(props: AccordionPropsType) {
    console.log("OnOff rendering")


        return <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick}/>
            {!props.collapsed && <AccordionBody/>}
        </div>

}


type AccordionTitlePropsType = {
    title: string
    onClick:()=>void
}
function AccordionTitle(props:AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")

    return (
        <h3 onClick={props.onClick}>--- {props.title} ---</h3>
    )
}

type AccordionBodyPropsType = {
    title?: number
}
function AccordionBody(props:AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}