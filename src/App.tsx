import React, {useState} from 'react';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";

// import App from "./App.css"


function App(props: any) {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(3)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    return (
        <div className="App">

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UnControlledRating/>
            
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed}/>
            <UnControlledAccordion titleValue={"User"}/>

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
