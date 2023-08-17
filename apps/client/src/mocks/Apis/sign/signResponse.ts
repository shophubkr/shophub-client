import type { SignInBody, SignUpBody } from "./signApi";

export const signUpResponse = {
  Status(user: SignUpBody | undefined) {
    return user ? 403 : 200;
  },
  Message(user: SignUpBody | undefined) {
    return user ? { message: "이미 가입된 회원정보입니다." } : { message: "success" };
  },
};

export const signInResponse = {
  Status(validUser: SignInBody | undefined, inValidUser: boolean) {
    if (validUser) {
      return 200;
    }
    if (inValidUser) {
      return 403;
    }
    return 401;
  },
  Message(validUser: SignUpBody | undefined, inValidUser: boolean) {
    if (validUser) {
      return {
        email: validUser.email,
        nickName: validUser.nickName,
        userType: validUser.userType,
        tel: validUser.tel,
        businessNum: validUser.businessNum,
      };
    }
    if (inValidUser) {
      return { message: "가입하신 회원정보와 일치하지 않습니다." };
    }

    return { message: "회원이 아닙니다. 회원가입하러 가시겠습니까?" };
  },
};
