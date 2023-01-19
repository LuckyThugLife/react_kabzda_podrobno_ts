import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UnControlledRating} from "./UnControlledRating";
import {action} from "@storybook/addon-actions";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UnControlledRating stories',
    component: UnControlledRating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 /*   argTypes: {
        backgroundColor: { control: 'color' },
    },*/
}/* as ComponentMeta<typeof Rating>;*/

const callback = action("rating changed inside component")

export const EmptyRating = () => {<UnControlledRating defaultValue={0} onChange={callback}/>}

export const Rating1 = () => <UnControlledRating defaultValue={1} onChange={callback}/>
export const Rating2 = () => <UnControlledRating defaultValue={2} onChange={callback}/>
export const Rating3 = () => <UnControlledRating defaultValue={3} onChange={callback}/>
export const Rating4 = () => <UnControlledRating defaultValue={4} onChange={callback}/>
export const Rating5 = () => <UnControlledRating defaultValue={5} onChange={callback}/>


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
