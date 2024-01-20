import type { Meta, StoryObj } from '@storybook/angular';

import { BtnComponent } from './btn.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<BtnComponent> = {
  title: 'Roanja/Btn',
  component: BtnComponent,
  tags: ['autodocs'],
  render: (args: BtnComponent) => ({
    props: {
      ...args,
    },
  })
};

export default meta;
type Story = StoryObj<BtnComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Color: Story = {
  args: {
    type: 'primary',
    label: 'Button',
  },
};

export const Outline: Story = {
  args: {
    outline: true,
    label: 'Button',
  },
};

export const Size: Story = {
  args: {
    size: 'lg',
    label: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Button',
  },
};

