import type { SignUpFormValues } from "~/app/auth/_types";
import type { UserType } from "~/app/auth/signup/step1/_components/ChoiceUserType.types";
import { usePostUserSignUp } from "./usePostUserSignUp";

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
