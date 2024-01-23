import type { SignUpFormValues, UserType } from "@auth/_types";
import { usePostUserSignUp } from "./usePostSignUp";

export const useSignUpSubmitHandler = (role: UserType) => {
  const { isLoading, mutateAsync } = usePostUserSignUp();

  const onSubmitHandler = async (data: SignUpFormValues) => {
    const { email, password, nickname, phoneNumber } = data;

    const buyerFormData = { email, password, nickname, role };
    const sellerFormData = { ...buyerFormData, phoneNumber };

    try {
      await mutateAsync(role === "USER_BUYER" ? buyerFormData : sellerFormData);
    } catch (error) {
      console.log(error);
    }
  };

  return { onSubmitHandler };
};
