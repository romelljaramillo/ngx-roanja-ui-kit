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
export const Dark: Story = {
  args: {
    type: 'dark',
    label: 'Button',
  },
};

export const Primary: Story = {
  args: {
    type: 'primary',
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    label: 'Button',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    label: 'Button',
  },
};

export const Info: Story = {
  args: {
    type: 'info',
    label: 'Button',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    label: 'Button',
  },
};


export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Button',
  },
};

