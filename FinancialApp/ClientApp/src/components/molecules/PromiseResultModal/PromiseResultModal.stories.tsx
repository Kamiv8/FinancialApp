import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PromiseResultModal from './PromiseResultModal';

export default {
  title: 'Molecules/PromiseResultModal',
  component: PromiseResultModal,
  argTypes: {},
} as ComponentMeta<typeof PromiseResultModal>;

const Template: ComponentStory<typeof PromiseResultModal> = (args) => (
  <PromiseResultModal {...args} />
);

export const Card = Template.bind({});
Card.args = {
  children: 'Login or password is not correct',
};
