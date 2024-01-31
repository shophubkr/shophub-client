import { useModal } from "@shophub/ui";
import { useMutation } from "@tanstack/react-query";
import type { SignUpFormValues } from "~/app/auth/_types";
import { API_SIGN_UP } from "../api";

export const usePostUserSignUp = () => {
  const modal = useModal();

  return useMutation(
    async (userInfo: SignUpFormValues) => {
      await API_SIGN_UP.Request(userInfo);
    },
    {
      onSuccess: () =>
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
};
