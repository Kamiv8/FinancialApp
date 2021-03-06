import React from "react";
import { ComponentStory, ComponentMeta} from '@storybook/react';

import Input from './Input';


export default {
    title: 'Atoms/Input',
    component: Input,

} as ComponentMeta<typeof Input>;


const Template : ComponentStory<typeof Input> = args => <Input {...args}/>


export const Login = Template.bind({});
Login.args = {
    placeholder: "LOGIN"
}
export const Operation = Template.bind({});


Operation.args = {
    placeholder: "Title",
    styleType: 'operation'
    
}