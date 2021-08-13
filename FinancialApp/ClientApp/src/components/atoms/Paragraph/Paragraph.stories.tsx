import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Paragraph from './Paragraph';


export default {
  title: 'Atoms/Paragrapf',
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />;

export const Redirect = Template.bind({});
Redirect.args = {
  children: 'if you don\'t have account, click here',
  type: 'redirect',
};
