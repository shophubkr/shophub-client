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
    isBusinessNumState: yup.boolean(),
    businessNum: yup
      .string()
      // 사업자 번호 입력 필드(businessNum)와 사업자 상태 진위 확인 필드(isBusinessNumState)를
      // when을 통해 필드값을 매핑하여 입력 필드의 유효성을 추가로 핸들링하고 싶은데 실패 했습니다.
      .when("isBusinessNumState", {
        is: false,
        then: (schema) => schema.required("사업자 번호를 확인해주세요."),
      }),
    // .required(signUpValidationMsg.businessNum.required)
    // .matches(formValidationRegex.businessNum, signUpValidationMsg.businessNum.pattern)
    isAgeOverAgree: yup.boolean().oneOf([true], "필수값"),
    isSendAdsAgree: yup.boolean(),
  })
  .required();
