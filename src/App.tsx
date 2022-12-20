import React from 'react';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
// import App from "./App.css"


function App() {
    console.log("App rendering")
    return (
        <div className="App">

         {/*   <PageTittle title={"This is APP component"}/>
            <PageTittle title={"My friends"}/>*/}

            {/*<UnControlledAccordion titleValue={"Menu"} collapsed={false}/>
            <UnControlledAccordion titleValue={"User"} collapsed={true}/>

            <UnControlledRating value={0}/>
            <UnControlledRating value={1}/>
            <UnControlledRating value={2}/>
            <UnControlledRating value={3}/>
            <UnControlledRating value={4}/>
            <UnControlledRating value={5}/>
*/}

            <UnControlledAccordion titleValue={"User"}/>
            <UnControlledRating/>

            <OnOff/>
            <OnOff/>
            <OnOff/>

        </div>
    );
}

type PageTittlePropsType = {
    title:string
}
function PageTittle(props:PageTittlePropsType) {
    console.log("PageTittle rendering")
    return (
       <h1>{props.title}</h1>

    );
}

export default App;
