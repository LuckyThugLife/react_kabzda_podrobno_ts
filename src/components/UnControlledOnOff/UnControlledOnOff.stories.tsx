import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {action} from "@storybook/addon-actions";
import UnControlledOnOff from './UnControlledOnOff';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UnControlledOnOff stories',
    component: UnControlledOnOff,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 /*   argTypes: {
        backgroundColor: { control: 'color' },
    },*/
}/* as ComponentMeta<typeof Rating>;*/

const callback = action("on or off clicked")

export const OnMode = () => <UnControlledOnOff defaultOn={true} onChange={callback}/>
export const OffMode = () => <UnControlledOnOff defaultOn={false} onChange={callback}/>
export const BugMode = () => <div>Unsync when change defaultValue when already rendered</div>


export const DefaultInputValue = () => <input defaultValue={"yo"}/>

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
