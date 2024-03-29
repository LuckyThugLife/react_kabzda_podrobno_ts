import React, {useState} from 'react';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import UnControlledOnOff from "./components/UnControlledOnOff/UnControlledOnOff";


// import App from "./App.css"


function App(props: any) {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className="App">


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
