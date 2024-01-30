import { componentWrapperDecorator, type Meta, type StoryObj } from '@storybook/angular';

import { BtnComponent } from './btn.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<BtnComponent> = {
  title: 'Roanja/Btn',
  component: BtnComponent,
  decorators: [componentWrapperDecorator((story) => `<div class="text-center m-3">${story}</div>`)],
  tags: ['autodocs'],
  parameters: {
    componentSubtitle:
      'Buttons are used to initialize an action, either in the background or foreground of an experience. They are used primarily for actions, such as "Add", "Close", "Cancel", "Save", etc.',
  },
  /*
   * More on Storybook argTypes at:
   * https://storybook.js.org/docs/react/api/argtypes
   */
  render: (args: BtnComponent) => ({
    props: {
      ...args,
    },
  }),
  
};

export default meta;
type Story = StoryObj<BtnComponent>;

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

export const SizeLg: Story = {
  args: {
    size: 'lg',
    label: 'Button',
  },
};

export const SizeSm: Story = {
  args: {
    size: 'sm',
    label: 'Button',
  },
};

export const Expand: Story = {
  args: {
    expand: 'block',
    label: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Button',
  },
};

