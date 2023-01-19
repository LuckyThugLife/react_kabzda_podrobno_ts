import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {action} from "@storybook/addon-actions";
import {UnControlledAccordion} from "./UnControlledAccordion";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UnControlledAccordion stories',
    component: UnControlledAccordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 /*   argTypes: {
        backgroundColor: { control: 'color' },
    },*/
}/* as ComponentMeta<typeof Rating>;*/

const callback = action("accordion mode change event fired")



export const ModeChanging = () => {
   return <UnControlledAccordion titleValue={"Users"}/>
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
