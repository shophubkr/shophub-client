import { worker } from "./browser";

export async function initMocks() {
  if (process.env.NODE_ENV === "development") {
    worker.start();
  }
}
