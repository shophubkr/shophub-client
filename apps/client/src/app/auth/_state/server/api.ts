import type { SignInFormValues, SignUpApiResponse, SignUpBusinessNumber } from "@auth/_types";
import axios from "axios";
import { axiosInstance } from "~/app/shared/server";

export const signUpApi = {
  businessConfirm: (value: string) => {
    return axios.post<SignUpApiResponse<SignUpBusinessNumber>>(
      `https://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=jLYDm8UrTI6O0xwYjloDybofTULlg9YFEVIbA8pyRkS78TmOmeB%2B%2FlVlBWBqqoOtBAiEn%2FyukJGWMuMJrMdt0w%3D%3D`,
      { b_no: [value] },
    );
  },

  signUpResponse: (postData: object) => {
    return axios.post("/api/signup", { postData });
  },
};

export const LoginApi = {
  signInResponse: ({ email, password }: SignInFormValues) => {
    return axiosInstance({ isRequireAuth: false }).post("/auth/login", { email, password });
  },
};
