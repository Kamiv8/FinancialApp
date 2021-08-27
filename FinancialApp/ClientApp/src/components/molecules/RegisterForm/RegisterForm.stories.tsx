import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RegisterForm from './RegisterForm';

export default {
  title: 'Molecules/RegisterForm',
  component: RegisterForm,
  argTypes: {
    onSubmit: {
      action: 'click',
    },
  },
} as ComponentMeta<typeof RegisterForm>;

const Template: ComponentStory<typeof RegisterForm> = (args) => (
  <RegisterForm {...args} />
);

export const Register = Template.bind({});
Register.args = {
};
