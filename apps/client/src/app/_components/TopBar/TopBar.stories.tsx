import type { Meta, StoryObj } from "@storybook/react";
import { TopBar } from "./TopBar";

const meta: Meta<typeof TopBar> = {
  title: "Components/Top",
  component: TopBar,
  decorators: [(TopBar) => <TopBar />],
};

export default meta;

type Story = StoryObj<typeof TopBar>;

export const TopBarStory: Story = {
  name: "TopBar",
  args: {
    children: "shophub",
  },
};
