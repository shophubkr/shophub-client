import type { APIResponse, BusinessNumber, FormValues } from "@auth/_types/types";
import axios from "axios";

export const signUpApi = {
  businessConfirm: (value: string) => {
    return axios.post<APIResponse<BusinessNumber>>(
      `https://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=jLYDm8UrTI6O0xwYjloDybofTULlg9YFEVIbA8pyRkS78TmOmeB%2B%2FlVlBWBqqoOtBAiEn%2FyukJGWMuMJrMdt0w%3D%3D`,
      { b_no: [value] },
    );
  },

  signUpResponse: (postData: object) => {
    return axios.post("/api/signup", { postData });
  },
};

export const LoginApi = {
  signInResponse: ({ email, password }: FormValues) => {
    return axios.post<APIResponse<FormValues>>("/api/login", { email, password });
  },
};
