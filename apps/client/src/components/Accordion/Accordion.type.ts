import type { PropsWithChildren } from "react";

export interface AccordionProps extends PropsWithChildren {
  value: boolean;
  onChange: VoidFunction;
}
