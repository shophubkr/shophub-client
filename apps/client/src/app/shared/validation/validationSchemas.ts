import * as yup from "yup";
import { ERROR_MESSAGES } from "./validationMessages";
import { FORM_VALIDATION_REGEX } from "./validationRegex";

export const email = yup.string().required(ERROR_MESSAGES.email.required).email(ERROR_MESSAGES.email.pattern);

export const password = yup
  .string()
  .min(8, ERROR_MESSAGES.password.min)
  .max(20, ERROR_MESSAGES.password.max)
  .matches(FORM_VALIDATION_REGEX.password, ERROR_MESSAGES.password.pattern)
  .required(ERROR_MESSAGES.password.required);

export const passwordConfirm = yup
  .string()
  .oneOf([yup.ref("password")], ERROR_MESSAGES.passwordConfirm.notSame)
  .required(ERROR_MESSAGES.passwordConfirm.required);

export const nickname = yup
  .string()
  .min(2, ERROR_MESSAGES.nickname.min)
  .matches(FORM_VALIDATION_REGEX.nickname, ERROR_MESSAGES.nickname.pattern)
  .required(ERROR_MESSAGES.nickname.required);

export const phoneNumber = yup
  .string()
  .required(ERROR_MESSAGES.phoneNumber.required)
  .matches(FORM_VALIDATION_REGEX.phoneNumber, ERROR_MESSAGES.phoneNumber.pattern);

export const isAgeOverAgree = yup.boolean().oneOf([true], "필수값");

export const isSendAdsAgree = yup.boolean();
