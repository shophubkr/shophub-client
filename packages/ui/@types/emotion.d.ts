import "@emotion/react";
import type { ShophubTheme } from "@shophub/theme";

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ShophubTheme {}
}
