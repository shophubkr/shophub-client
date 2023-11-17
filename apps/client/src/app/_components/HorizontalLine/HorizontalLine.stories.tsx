import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "@chakra-ui/react";
import { HorizontalLine } from "./HorizontalLine";

const meta: Meta<typeof HorizontalLine> = {
  title: "client/components/HorizontalLine",
  component: HorizontalLine,
  decorators: [
    (Story) => (
      <div style={{ width: "358px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof HorizontalLine>;

export const Default: Story = {};

export const Height5: Story = {
  args: {
    h: "5px",
  },
};

export const BlackColor: Story = {
  args: {
    color: "#000",
    h: "3px",
  },
};

export const UseExample: Story = {
  render: () => (
    <Box>
      <Box w="full" h="150px" bgColor="#eee" borderRadius="8px" p="10px">
        컨텐츠
      </Box>
      <HorizontalLine m="18px 0" />
      <Box w="full" h="150px" bgColor="#eee" borderRadius="8px" p="10px">
        컨텐츠
      </Box>
    </Box>
  ),
};
