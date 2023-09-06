import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  "stories": ["../../../packages/ui/**/*.stories.tsx", "../../client/src/**/*.stories.tsx"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chakra-ui/storybook-addon",
  ],
  "core": {
    "builder": "@storybook/builder-vite",
  },
  "framework": {
    "name": "@storybook/react-vite",
    "options": {},
  },
  "docs": {
    "autodocs": "tag",
  },
  "viteFinal": (config) => {
    return mergeConfig(config, {
      define: { "process.env": {} },
    });
  },
};

export default config;
