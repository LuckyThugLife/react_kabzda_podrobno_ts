import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type UnControlledAccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

export function UnControlledAccordion(props: UnControlledAccordionPropsType) {
    console.log("UnControlledAccordion rendering")

    //let [collapsed,setCollapsed]=useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed:false})


    return <div>
        {/*<UnControlledAccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>*/}
        <UnControlledAccordionTitle title={props.titleValue} onClick={() => {
            dispatch({type: TOGGLE_COLLAPSED})
        }}/>
        {!state.collapsed && <UnControlledAccordionBody/>}
    </div>

}


type UnControlledAccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function UnControlledAccordionTitle(props: UnControlledAccordionTitlePropsType) {
    console.log("UnControlledAccordionTitle rendering")

    return (
        <h3 onClick={() => {
            props.onClick()
        }}>--- {props.title} ---</h3>
    )
}

type UnControlledAccordionBodyPropsType = {
    title?: number
}

function UnControlledAccordionBody(props: UnControlledAccordionBodyPropsType) {
    console.log("UnControlledAccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}