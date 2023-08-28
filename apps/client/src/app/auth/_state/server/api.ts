import axios from "axios";
import type { APIResponse, FormValues } from "../../_types/types";

export const LoginApi = {
  signInResponse: ({ email, password }: FormValues) => {
    return axios.post<APIResponse<FormValues>>("/api/login", { email, password });
  },
};
