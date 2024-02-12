import type { Meta, StoryObj } from "@storybook/react";

import { SummarySection } from "./SummarySection";

const meta: Meta<typeof SummarySection> = {
  title: "client/my-page/SummarySection",
  component: SummarySection,
  decorators: [
    (Story) => (
      <div style={{ width: "358px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SummarySection>;

export const Default: Story = {
  args: {
    title: "가장 가까운 팔로우 매장",
    href: "/my-page/buyer/follow-stores",
  },
};
