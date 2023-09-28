import { worker } from "./browser";

export const initMocks = async () => {
  if (process.env.NODE_ENV === "development") {
    worker.start();
  }
};
