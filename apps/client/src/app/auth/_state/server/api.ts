import type { SignInFormValues } from "@auth/_types";
import type { SignInResponse } from "@auth/_types/signInResponse.type";
import axios from "axios";
import { axiosInstance } from "~/app/shared/server";

export const signUpApi = {
  signUpResponse: (postData: object) => {
    return axios.post("/api/signup", { postData });
  },
};

export const API_LOGIN = {
  // TODO: 테스트 작업이며, 변경될 수 있는 사항입니다.
  Request: async ({ email, password }: SignInFormValues) => {
    const { data } = await axiosInstance().post<SignInResponse>("/auth/login", {
      email,
      password,
    });

    return data.result;
  },
};
