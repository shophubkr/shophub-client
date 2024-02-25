import { useModal } from "@shophub/ui";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import type { SignUpFormValues } from "~/app/auth/_types";
import { ACCESS_TOKEN_KEY } from "~/app/shared/server/constants";
import { API_SIGN_UP } from "../api";

export const usePostUserSignUp = () => {
  const modal = useModal();
  const router = useRouter();

  return useMutation({
    mutationFn: (userInfo: SignUpFormValues) => API_SIGN_UP.postSignUp(userInfo),
    onSuccess: (data) => {
      Cookies.set(ACCESS_TOKEN_KEY, data.accessToken);
      modal.open({
        title: `${data.nickname}님 회원가입이 완료되었습니다.`,
        type: "positive",
        onConfirm: () => router.push("/"),
      });
    },
    onError: (error) =>
      modal.open({
        title: "회원가입을 실패하였습니다.",
        type: "negative",
      }),
  });
};
