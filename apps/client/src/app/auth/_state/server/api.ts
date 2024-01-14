import axios from "axios";
import { createAxiosInstance } from "~/app/shared/server/axios";
import type { SignUpFormValues } from "../../_types";
import type { SignInFormValues } from "../../_types/signInType";

export const LoginApi = {
  signInResponse: ({ email, password }: SignInFormValues) => {
    return axios.post("/api/login", { email, password });
  },
};

export const authApi = {
  signUp: (userInfo: SignUpFormValues) => {
    return createAxiosInstance.post("/api/v1/auth/join", JSON.stringify(userInfo), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
