import { useModal } from "@shophub/ui";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import type { SignInFormValues } from "~/app/auth/_types";
import { ACCESS_TOKEN_KEY } from "~/app/shared/server/constants";
import { API_LOGIN } from "../api";

export const usePostLogin = () => {
  const router = useRouter();
  const modal = useModal();

  return useMutation({
    mutationFn: (value: SignInFormValues) => API_LOGIN.postLogin(value),
    onSuccess: (data) => {
      Cookies.set(ACCESS_TOKEN_KEY, data.accessToken);
      router.push("/");
    },
    onError: () => modal.open({ title: "회원 정보가 일치하지 않습니다.", type: "negative" }),
  });
};
