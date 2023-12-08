import type { SingUpFormValues } from "@auth/_types";
import { useModal } from "@shophub/ui";
import { useMutation } from "@tanstack/react-query";
import { authApi } from "~/app/_apis/apis";

export const usePostUserSignUp = () => {
  const modal = useModal();

  const { isLoading, mutateAsync } = useMutation(
    async (userInfo: SingUpFormValues) => {
      const res = await authApi.signUp(userInfo);
      return res.data;
    },
    {
      onSuccess: (data) =>
        data?.result?.id &&
        modal.open({
          title: "회원가입이 완료되었습니다.",
          type: "positive",
          onConfirm: () => alert("회원가입 완료"),
        }),
      onError: (error) =>
        modal.open({
          title: "회원가입을 실패하였습니다.",
          type: "negative",
          onConfirm: () => alert(error),
        }),
    },
  );

  return { isLoading, mutateAsync };
};
