import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Title from './Title';

export default {
  title: 'Atoms/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => (
  <Title {...args} />
);

export const Login = Template.bind({});
Login.args = {
  children: "Sign in",
};

export const UserTitle = Template.bind({});
UserTitle.args = {
  children: "Roland loko",
  whiteStyle: true,
}