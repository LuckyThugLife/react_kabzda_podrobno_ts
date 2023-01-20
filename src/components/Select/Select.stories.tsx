import React, {useState} from 'react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Select stories',
    component: Select,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    /*   argTypes: {
           backgroundColor: { control: 'color' },
       },*/
}/* as ComponentMeta<typeof Rating>;*/


export const WithValue = () => {
    const [value, setValue] = useState("2")

    return <> <Select onChange={setValue}
                      value={value} items={[
        {value: "1", title: "Moscow"},
        {value: "2", title: "Minsk"},
        {value: "3", title: "Kiev"}
    ]}/>
    </>
}

export const WithOutValue = () => {
    const [value, setValue] = useState(null)

    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: "1", title: "Moscow"},
                    {value: "2", title: "Minsk"},
                    {value: "3", title: "Kiev"}
                ]}/>
    </>

}
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

/*export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primary: true,
    label: 'Rating',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Rating',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Rating',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Rating',
};*/
