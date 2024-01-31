import type { SignUpFormValues, UserType } from "@auth/_types";
import { usePostUserSignUp } from "./usePostSignUp";

export const useSignUpSubmitHandler = (role: UserType) => {
  const { isLoading, mutate } = usePostUserSignUp();

  const onSubmitHandler = (data: SignUpFormValues) => {
    const { email, password, nickname, phoneNumber } = data;

    const buyerFormData = { email, password, nickname, role };
    const sellerFormData = { ...buyerFormData, phoneNumber };

    mutate(role === "USER_BUYER" ? buyerFormData : sellerFormData);
  };

  return { onSubmitHandler, isLoading };
};
