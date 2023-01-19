import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick:()=>void
}

export function Accordion(props: AccordionPropsType) {
    console.log("ControlledSelect rendering")


        return <div>
            <AccordionTitle title={props.titleValue} onChange={props.onClick}/>
            {!props.collapsed && <AccordionBody/>}
        </div>

}


type AccordionTitlePropsType = {
    title: string
    onChange:()=>void
}
function AccordionTitle(props:AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")

    return (
        <h3 onClick={(e)=>props.onChange()}>--- {props.title} ---</h3>
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