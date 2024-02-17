import type { Meta, StoryObj } from "@storybook/react";
import { VH } from "~/utils";
import { TabBar } from "./TabBar";

const meta: Meta<typeof TabBar> = {
  title: "client/components/TabBar",
  component: TabBar,
  decorators: [
    (Story) => (
      <div style={{ position: "relative", width: "390px", height: VH(100) }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof TabBar>;

export const Default: Story = {
  args: {
    onPathRoutingHandler: () => {},
  },
};
