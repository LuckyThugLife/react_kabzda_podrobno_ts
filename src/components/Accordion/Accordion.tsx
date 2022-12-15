import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")


        return <div>
            <AccordionTitle title={props.titleValue}/>
            {!props.collapsed && <AccordionBody/>}
        </div>

}

/*export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

    if (props.collapsed === true) {
        return <div>
            <AccordionTitle title={props.titleValue}/>

        </div>
    } else {

        return <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>
    }
}*/


type AccordionTitlePropsType = {
    title: string
}
function AccordionTitle(props:AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")

    return (
        <h3>--- {props.title} ---</h3>
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