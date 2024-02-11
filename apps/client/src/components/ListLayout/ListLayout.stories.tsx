import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "@chakra-ui/react";
import { ListLayout } from "./ListLayout";

const meta: Meta<typeof ListLayout> = {
  title: "client/components/ListLayout",
  component: ListLayout,
};

export default meta;

type Story = StoryObj<typeof ListLayout>;

const TEST_LIST = ["item1", "item2", "item3"];

export const Default: Story = {
  render: () => (
    <ListLayout>
      {TEST_LIST.map((item) => (
        <Box w="300px" h="100px" bgColor="gray.200">
          {item}
        </Box>
      ))}
    </ListLayout>
  ),
};
