import type { SignInFormValues, SignInResponse } from "@auth/_types";
import axios from "axios";
import { api } from "~/app/shared/server";

export const API_SIGN_UP = {
  postSignUp: async (formData: SignUpFormValues) => {
    const { data } = await axiosInstance().post("auth/join", formData);

    return data.result;
  },
};

export const API_LOGIN = {
  // TODO: 테스트 작업이며, 변경될 수 있는 사항입니다.
  Request: async (value: SignInFormValues) => {
    const { data } = await api.post<SignInResponse>("/auth/login", value);

    return data.result;
  },
};
