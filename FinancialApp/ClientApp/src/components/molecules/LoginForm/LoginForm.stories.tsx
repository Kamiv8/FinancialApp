import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoginForm from './LoginForm';

export default {
  title: 'Molecules/LoginForm',
  component: LoginForm,
  argTypes: {
    onSubmit: {
      action: 'click',
    },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const Login = Template.bind({});
Login.args = {
};
