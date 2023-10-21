import type { SignInFormValues } from "@auth/_types";
import axios from "axios";

export const LoginApi = {
  signInResponse: ({ email, password }: SignInFormValues) => {
    return axios.post("/api/login", { email, password });
  },
};
