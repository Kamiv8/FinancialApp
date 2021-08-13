import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ConfimCard from './ConfimCard';

export default {
  title: 'Organism/ConfimCard',
  component: ConfimCard,
} as ComponentMeta<typeof ConfimCard>;

const Template: ComponentStory<typeof ConfimCard> = (args) => <ConfimCard {...args} />;

export const LoginRegister = Template.bind({});
LoginRegister.args = {
  children: 'enter',
  type: 'login',
};
