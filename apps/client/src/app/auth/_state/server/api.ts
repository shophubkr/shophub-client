import type { SignInFormValues, SignUpFormValues } from "@auth/_types";
import axios from "axios";
import { AxiosInstance } from "~/app/shared/server";

export const authApi = {
  signUp: (formData: SignUpFormValues) => AxiosInstance({ isRequireAuth: false }).post("api/v1/auth/join", formData),
};

export const LoginApi = {
  signInResponse: ({ email, password }: SignInFormValues) => {
    return axios.post("/api/login", { email, password });
  },
};
