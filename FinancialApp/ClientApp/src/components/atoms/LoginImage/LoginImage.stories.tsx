import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoginImage from './LoginImage';

export default {
  title: 'Atoms/LoginImage',
  component: LoginImage,
  argTypes: {
    onSubmit: {
      action: 'click',
    },
  },
} as ComponentMeta<typeof LoginImage>;

const Template: ComponentStory<typeof LoginImage> = (args) => (
  <LoginImage {...args} />
);

export const Image = Template.bind({});
Image.args = {};
