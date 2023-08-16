// Button.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';

// import { Button } from './components/CTA';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const CTA: Story = {
  render: () => <Button>hi</Button>,
};
