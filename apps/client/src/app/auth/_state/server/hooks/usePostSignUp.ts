import { useModal } from "@shophub/ui";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import type { SignUpFormValues } from "~/app/auth/_types";
import { API_SIGN_UP } from "../api";

export const usePostUserSignUp = () => {
  const modal = useModal();
  const router = useRouter();

  return useMutation({
    mutationFn: (userInfo: SignUpFormValues) => API_SIGN_UP.postSignUp(userInfo),
    onSuccess: () =>
      modal.open({
        title: "회원가입이 완료되었습니다.",
        type: "positive",
        onConfirm: () => router.push("/"),
      }),
    onError: (error) =>
      modal.open({
        title: "회원가입을 실패하였습니다.",
        type: "negative",
      }),
  });
};
