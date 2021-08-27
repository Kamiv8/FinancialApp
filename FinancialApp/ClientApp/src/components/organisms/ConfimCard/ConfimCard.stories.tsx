import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ConfimCard from './ConfimCard';

export default {
  title: 'Organism/ConfimCard',
  component: ConfimCard,

} as ComponentMeta<typeof ConfimCard>;

const Template: ComponentStory<typeof ConfimCard> = (args) => (
    <ConfimCard {...args} />

);

export const Login = Template.bind({});
Login.args = {
  children: 'enter',
  type: 'login',
  title: 'Sign in',
  paragraph: "if u don't have account, click here",
};

export const Register = Template.bind({});
Register.args = {
  children: 'enter',
  type: 'register',
  title: 'Create Account',
  paragraph: "I want to log in",
};



