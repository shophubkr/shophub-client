import type { Preview } from "@storybook/react";
import * as NextImage from "next/image";
import React from "react";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "initialState", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
