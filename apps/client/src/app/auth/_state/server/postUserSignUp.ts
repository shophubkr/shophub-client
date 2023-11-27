import type { SingUpFormValues } from "@auth/_types";
import { useMutation } from "@tanstack/react-query";
import { authApi } from "~/app/_apis/apis";

export const usePostUserSignUp = () => {
  const { isLoading, mutateAsync } = useMutation(
    async (userInfo: SingUpFormValues) => {
      const res = await authApi.signUp(userInfo);
      return res.data;
    },
    {
      onSuccess: (data) => data?.result?.id && "모달 상태 업데이트",
      onError: (error) => console.log(error),
    },
  );

  return { isLoading, mutateAsync };
};
