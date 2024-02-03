import * as yup from "yup";
import { SIGN_UP_COMMON_SCHEMA } from "~/app/auth/_constants/validation/validationSchemas";

const { nickname, password } = SIGN_UP_COMMON_SCHEMA;

export const PROFILE_FORM_SCHEMA = yup.object({ nickname, oldPassword: password, newPassword: password });
