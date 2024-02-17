import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { VH } from "../../utils";
import { Accordion } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "client/components/Accordion",
  component: Accordion,
  decorators: [
    (Story) => (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: VH(100),
          margin: "0 auto",
          padding: "8px 0 0 0",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Accordion>;

const AccordionSample = () => {
  const [value, setIsValue] = useState(false);
  const onChange = () => setIsValue((prev) => !prev);

  return (
    <Accordion value={value} onChange={onChange}>
      {/* Accordion은 children<ReactNode[] 타입>을 래핑합니다 */}
    </Accordion>
  );
};

export const Default: Story = {
  render: () => <AccordionSample />,
};
