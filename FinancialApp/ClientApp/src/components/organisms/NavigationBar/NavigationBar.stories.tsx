import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NavigationBar from './NavigationBar';

export default {
  title: 'Organism/NavigationBar',
  component: NavigationBar,
} as ComponentMeta<typeof NavigationBar>;

const Template: ComponentStory<typeof NavigationBar> = (args) => (
  <NavigationBar {...args} />
);

export const Navigation = Template.bind({});
