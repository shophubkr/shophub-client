import type { Meta, StoryObj } from "@storybook/react";

import { UserProfile } from "./UserProfile";

const TEST_IMAGE_SRC =
  "https://media.istockphoto.com/id/486456250/ko/%EC%82%AC%EC%A7%84/quokka.jpg?s=612x612&w=0&k=20&c=1phcfqG7aI3-h0KWKxNJxHv-BhJgGHqCXTaXgnE771M=";

const meta: Meta<typeof UserProfile> = {
  title: "client/my-page/UserProfile",
  component: UserProfile,
  argTypes: {
    userType: {
      control: "inline-radio",
      options: ["buyer", "seller"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof UserProfile>;

export const BuyerNoImage: Story = {
  args: {
    email: "test@gmail.com",
    userType: "buyer",
  },
};

export const Buyer: Story = {
  args: {
    ...BuyerNoImage.args,
    imgSrc: TEST_IMAGE_SRC,
  },
};

export const SellerNoImage: Story = {
  args: {
    email: "test@gmail.com",
    userType: "seller",
  },
};

export const Seller: Story = {
  args: {
    ...SellerNoImage.args,
    imgSrc: TEST_IMAGE_SRC,
  },
};
