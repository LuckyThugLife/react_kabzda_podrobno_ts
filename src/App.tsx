import React from 'react';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";


function App() {
    console.log("App rendering")
    return (
        <div className="App">

         {/*   <PageTittle title={"This is APP component"}/>
            <PageTittle title={"My friends"}/>*/}

            <Accordion titleValue={"Menu"} collapsed={false}/>
            <Accordion titleValue={"User"} collapsed={true}/>

            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>



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
