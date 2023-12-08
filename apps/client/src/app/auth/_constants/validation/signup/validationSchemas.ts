import * as yup from "yup";
import { signUpErrMsg } from "./validationMsg";
import { signUpFormValidationRegex } from "./validationRegex";

const signUpCommonSchema = {
  email: yup.string().required(signUpErrMsg.email.required).email(signUpErrMsg.email.pattern),
  password: yup
    .string()
    .min(8, signUpErrMsg.password.min)
    .max(20, signUpErrMsg.password.max)
    .matches(signUpFormValidationRegex.password, signUpErrMsg.password.pattern)
    .required(signUpErrMsg.password.required),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], signUpErrMsg.passwordConfirm.noSame)
    .required(signUpErrMsg.passwordConfirm.required),
  nickname: yup
    .string()
    .min(2, signUpErrMsg.nickname.min)
    .matches(signUpFormValidationRegex.nickname, signUpErrMsg.nickname.pattern)
    .required(signUpErrMsg.nickname.required),
  isAgeOverAgree: yup.boolean().oneOf([true], "필수값"),
  isSendAdsAgree: yup.boolean(),
};

export const signUpBuyerSchema = yup.object({
  ...signUpCommonSchema,
});

export const signUpSellerSchema = yup.object({
  ...signUpCommonSchema,
  phoneNumber: yup
    .string()
    .required(signUpErrMsg.phoneNumber.required)
    .matches(signUpFormValidationRegex.phoneNumber, signUpErrMsg.phoneNumber.pattern),
});
