import React from 'react';

import { Button } from './Button';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    design: {
       type: 'figma',
       url: 'https://www.figma.com/file/hcxZYsCwYzrRUZcOFMyoyI/Ant-Design-System-for-Figma-1.2-Free-Demo-Community?node-id=57%3A933'
    }
 }
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
