import type { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from "./SearchBar";

const meta: Meta<typeof SearchBar> = {
  title: "Components/Search",
  component: SearchBar,
  decorators: [(SearchBar) => <SearchBar />],
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const SearchBarStory: Story = {
  name: "SearchBar",
  args: {},
};
