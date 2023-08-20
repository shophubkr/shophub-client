import { worker } from "./browser";

if (process.env.NODE_ENV === "development") {
  worker.start();
}

export {};
