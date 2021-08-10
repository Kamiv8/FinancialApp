import React from "react";
import { ComponentStory, ComponentMeta} from '@storybook/react';

import Input from './Input';



export default {
    title: 'Atoms/Input',
    component: Input,

} as ComponentMeta<typeof Input>;


const Template : ComponentStory<typeof Input> = args => <Input {...args}/>


export const Primary = Template.bind({});
Primary.args ={
    type: "text",
    placeholder: "LOGIN"
}
export const Secondary = Template.bind({});


Secondary.args = {
    type: "button",
    value: "Log in"
}