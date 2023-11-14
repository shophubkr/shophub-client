import * as yup from "yup";
import { signUpValidationMsg } from "./validationMessages";
import { formValidationRegex } from "./validationRegex";

export const signUpSchema = yup
  .object({
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
    nickName: yup
      .string()
      .matches(formValidationRegex.nickname, signUpValidationMsg.nickName.pattern)
      .required(signUpValidationMsg.nickName.required),
    tel: yup
      .string()
      .matches(formValidationRegex.tel, signUpValidationMsg.tel.pattern)
      .required(signUpValidationMsg.tel.required),
    isAgeOverAgree: yup.boolean().oneOf([true], "필수값"),
    isSendAdsAgree: yup.boolean(),
  })
  .required();
