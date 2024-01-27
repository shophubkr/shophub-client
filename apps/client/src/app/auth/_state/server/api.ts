import type { SignInFormValues } from "@auth/_types";
import axios from "axios";
import { axiosInstance } from "~/app/shared/server";

export const signUpApi = {
  signUpResponse: (postData: object) => {
    return axios.post("/api/signup", { postData });
  },
};

export const LoginApi = {
  // TODO: 테스트 작업이며, 변경될 수 있는 사항입니다.
  signInResponse: ({ email, password }: SignInFormValues): Promise<{ accessToken: string; refreshToken: string }> => {
    return axiosInstance().post("/auth/login", { email, password });
  },
};
