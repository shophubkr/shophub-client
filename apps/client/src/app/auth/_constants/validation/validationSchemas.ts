import * as yup from "yup";
import { signUpValidationMsg } from "./validationMessages";
import { formValidationRegex } from "./validationRegex";

const signUpCommonSchema = {
  email: yup.string().required(signUpValidationMsg.email.required).email(signUpValidationMsg.email.pattern),
  password: yup
    .string()
    .min(8, signUpValidationMsg.password.min)
    .max(20, signUpValidationMsg.password.max)
    .matches(formValidationRegex.password, signUpValidationMsg.password.pattern)
    .required(signUpValidationMsg.password.required),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], signUpValidationMsg.passwordConfirm.noSame)
    .required(signUpValidationMsg.passwordConfirm.required),
  nickname: yup
    .string()
    .min(2, signUpValidationMsg.nickname.min)
    .matches(formValidationRegex.nickname, signUpValidationMsg.nickname.pattern)
    .required(signUpValidationMsg.nickname.required),
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
    .required(signUpValidationMsg.phoneNumber.required)
    .matches(formValidationRegex.phoneNumber, signUpValidationMsg.phoneNumber.pattern),
});
