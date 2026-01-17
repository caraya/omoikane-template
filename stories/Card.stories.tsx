import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../src/client/components/Card';
import { Title, Body, Button } from '../src/client/components';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    className: 'max-w-sm p-6',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <Title className="mb-2">Card Title</Title>
      <Body className="mb-4">
        This is a basic card component. It can contain any content you like including text, images, and buttons.
      </Body>
      <Button>Action</Button>
    </Card>
  ),
  args: {
    bordered: true,
    shadow: false,
  },
};

export const WithShadow: Story = {
  render: (args) => (
    <Card {...args}>
      <Title className="mb-2">Shadow Card</Title>
      <Body className="mb-4">
        This card has a drop shadow enabled for extra elevation.
      </Body>
      <div className="flex justify-end bg-gray-50 -m-6 mt-4 p-4 border-t border-gray-100">
         <Button variant="secondary" size="sm">Cancel</Button>
         <Button size="sm" className="ml-2">Save</Button>
      </div>
    </Card>
  ),
  args: {
    bordered: true,
    shadow: true,
    className: 'max-w-sm p-6',
  },
};
