import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import OperationBar from './OperationBar';

export default {
  title: 'organism/OperationBar',
  component: OperationBar,
} as ComponentMeta<typeof OperationBar>;

const Template: ComponentStory<typeof OperationBar> = (args) => <OperationBar {...args} />;


export const Operation = Template.bind({});

Operation.args = {

};
