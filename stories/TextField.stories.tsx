import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from '../src/client/components/TextField';

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  args: {
    placeholder: 'Enter text here...',
    fullWidth: false,
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Username',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Email',
    type: 'email',
    description: 'We will never share your email.',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    type: 'password',
    defaultValue: '123',
    error: 'Password is too weak',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    disabled: true,
    defaultValue: 'Cannot edit this',
  },
};
