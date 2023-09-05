import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  "stories": ["../../../packages/ui/**/*.stories.tsx", "../../client/src/**/*.stories.tsx"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chakra-ui/storybook-addon",
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {},
  },
  "docs": {
    "autodocs": "tag",
  },
};

export default config;
