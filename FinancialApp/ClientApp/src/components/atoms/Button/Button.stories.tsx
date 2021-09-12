import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const First = Template.bind({});
First.args = {
  children: 'enter',
  type: 'first'
};

export const Reverse = Template.bind({});
Reverse.args = {
  children: 'Add operation',
}