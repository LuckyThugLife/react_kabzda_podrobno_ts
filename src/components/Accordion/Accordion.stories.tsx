import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Accordion stories',
    component: Accordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    /*   argTypes: {
           backgroundColor: { control: 'color' },
       },*/
}/* as ComponentMeta<typeof Rating>;*/

const callback = action("accordion mode change event fired")
const onClickCallback = action("some items was clicked")

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} items={[]}
                                                  onClick={onClickCallback}/>
export const UsersUnCollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback}
                                                     items={[{title: "Rustam", value: 1}, {
                                                         title: "Fira",
                                                         value: 2
                                                     }, {title: "Adam", value: 3}, {title: "Aya", value: 4}]}
                                                     onClick={onClickCallback}/>


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion
        titleValue={"Users"}
        collapsed={value}
        onChange={() => setValue(!value)}
        items={[
            {title: "Rustam", value: 1},
            {title: "Fira", value: 2},
            {title: "Adam", value: 3},
            {title: "Aya", value: 4}
        ]}
        onClick={(id)=>{alert(`user with ID ${id} should be happy`)}}/>
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
