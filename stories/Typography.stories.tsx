import type { Meta, StoryObj } from '@storybook/react';
import { DisplayHeading, Title, Heading, Subheading, Body, Label, Caption } from '../src/client/components/Typography';

const meta = {
  title: 'Components/Typography',
  // We can't set a single component here easily since we are documenting a system, 
  // so we'll point to DisplayHeading as main but document others in stories
  component: DisplayHeading, 
  tags: ['autodocs'],
} satisfies Meta<typeof DisplayHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllTypography: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <Label className="block mb-2 text-xs">Display Heading</Label>
        <DisplayHeading>The Quick Brown Fox</DisplayHeading>
      </div>
      <div>
        <Label className="block mb-2 text-xs">Title</Label>
        <Title>The Quick Brown Fox</Title>
      </div>
      <div>
        <Label className="block mb-2 text-xs">Heading</Label>
        <Heading>The Quick Brown Fox</Heading>
      </div>
      <div>
        <Label className="block mb-2 text-xs">Subheading</Label>
        <Subheading>The Quick Brown Fox</Subheading>
      </div>
      <div>
        <Label className="block mb-2 text-xs">Body</Label>
        <Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Body>
      </div>
      <div>
        <Label className="block mb-2 text-xs">Label</Label>
        <Label>Form Label</Label>
      </div>
      <div>
        <Label className="block mb-2 text-xs">Caption</Label>
        <Caption>Fig. 1.1 - A caption text usually used for auxiliary information.</Caption>
      </div>
    </div>
  ),
};
