import type { SignInFormValues, SignInResponse } from "@auth/_types";
import axios from "axios";
import { api } from "~/app/shared/server";

export const signUpApi = {
  signUpResponse: (postData: object) => {
    return axios.post("/api/signup", { postData });
  },
};

export const API_LOGIN = {
  postLogin: async (value: SignInFormValues) => {
    const { data } = await api.post<SignInResponse>("/auth/login", value);

    return data.result;
  },
};
