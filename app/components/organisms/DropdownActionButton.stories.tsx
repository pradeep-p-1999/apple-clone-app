import type { Meta, StoryObj } from '@storybook/react';
import DropdownActionButton from './DropdownActionButton';

const meta: Meta<typeof DropdownActionButton> = {
  title: 'UI/DropdownActionButton',
  component: DropdownActionButton,
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'select',
      options: ['primary', 'action'],
    },
    initialValue: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DropdownActionButton>;

export const PrimaryMode: Story = {
  args: {
    mode: 'primary',
    initialValue: '',
  },
};

export const ActionMode: Story = {
  args: {
    mode: 'action',
    initialValue: '',
  },
};
