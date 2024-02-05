import type { SignInFormValues, SignInResponse } from "@auth/_types";
import axios from "axios";
import axiosInstance from "~/app/shared/server/axios/axios";
import type { BaseResponse } from "~/app/shared/server/types";

export const signUpApi = {
  signUpResponse: (postData: object) => {
    return axios.post("/api/signup", { postData });
  },
};

export const API_LOGIN = {
  // TODO: 테스트 작업이며, 변경될 수 있는 사항입니다.
  Request: async ({ email, password }: SignInFormValues) => {
    const { data } = await axiosInstance.post<BaseResponse<SignInResponse>>("/auth/login", {
      email,
      password,
    });

    return data.result;
  },
};
