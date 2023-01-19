import React, {ChangeEvent, useState} from "react";

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")
    const onChange = (event:ChangeEvent<HTMLInputElement>) => {

        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }

    return <><input onChange={onChange}/> - {value}</>
}




