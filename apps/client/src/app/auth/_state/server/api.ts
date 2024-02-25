import type { SignInFormValues, SignInResponse, SignUpFormValues, SignUpResponse } from "@auth/_types";
import { api } from "~/app/shared/server";

export const API_SIGN_UP = {
  postSignUp: async (formData: SignUpFormValues) => {
    const { data } = await api.post<SignUpResponse>("auth/join", formData);

    return data.result;
  },
};

export const API_LOGIN = {
  postLogin: async (value: SignInFormValues) => {
    const { data } = await api.post<SignInResponse>("/auth/login", value);

    return data.result;
  },
};
