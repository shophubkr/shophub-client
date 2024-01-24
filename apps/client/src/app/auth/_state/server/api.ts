import type { SignInFormValues } from "@auth/_types";
import axios from "axios";
import { axiosInstance } from "~/app/shared/server";

export const signUpApi = {
  signUpResponse: (postData: object) => {
    return axios.post("/api/signup", { postData });
  },
};

export const LoginApi = {
  signInResponse: ({ email, password }: SignInFormValues) => {
    return axiosInstance({ isRequireAuth: false }).post("/auth/login", { email, password });
  },
};
