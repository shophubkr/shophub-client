"use client";

import type { PropsWithChildren } from "react";

export const Provider = ({ children }: PropsWithChildren) => {
  import("../mocks");

  return children;
};
