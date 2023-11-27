import type { SingUpFormValues } from "../auth/_types";
import { api } from "./@core";

export const authApi = {
  signUp: (userInfo: SingUpFormValues) => {
    return api.post("/api/v1/auth/join", JSON.stringify(userInfo), { headers: { "Content-Type": "application/json" } });
  },
};
