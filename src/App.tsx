import React, {useState} from 'react';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import UnControlledOnOff from "./components/UnControlledOnOff/UnControlledOnOff";
import {UncontrolledInput} from "./components/UncontrolledInput/UncontrolledInput";
import {ControlledInput} from "./components/ControlledInput/ControlledInput";
import {TrackValueOfUncontrolledInput} from "./components/UncontrolledInput/TrackValueOfUncontrolledInput";
import {GetValueOfUncontrolledInputByButtonPress} from "./components/UncontrolledInput/GetValueOfUncontrolledInputByButtonPress";

// import App from "./App.css"


function App(props: any) {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className="App">

            {/* <Rating value={ratingValue}
                    onClick={setRatingValue}/>
            <UnControlledRating/>
            
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onClick={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>
            <UnControlledAccordion titleValue={"User"}/>

            <UnControlledOnOff onChange={setSwitchOn}/> {switchOn.toString()}*/}
            <UncontrolledInput/>
            <ControlledInput/>
            <TrackValueOfUncontrolledInput/>
            <GetValueOfUncontrolledInputByButtonPress/>

        </div>
    );
}

type PageTittlePropsType = {
    title: string
}

function PageTittle(props: PageTittlePropsType) {
    console.log("PageTittle rendering")
    return <h1>{props.title}</h1>
}


export default App;
