import { rest } from "msw";
import { signInResponse, signUpResponse } from "./signResponse";
import { userMock } from "./userMock";

export interface SignUpBody {
  email: string;
  password: string;
  passwordConfirm?: string;
  nickName: string;
  userType: string;
  tel?: string;
  businessNum?: string;
}

export interface SignInBody {
  email: string;
  password: string;
}

export const postSignUp = rest.post<SignUpBody>("/api/signup", (req, res, ctx) => {
  const { userType, email, password, passwordConfirm, nickName, tel, businessNum } = req.body;
  const user = userMock.find((db) => db.email === email || db.nickName === nickName) || undefined;

  return res(ctx.status(signUpResponse.Status(user)), ctx.json(signUpResponse.Message(user)));
});

export const postSignIn = rest.post<SignInBody>("/api/login", (req, res, ctx) => {
  const { email, password } = req.body;
  const validUser = userMock.find((db) => db.email === email && db.password === password);
  const inValidUser = userMock.some((db) => db.email === email || db.password === password);

  return res(
    ctx.status(signInResponse.Status(validUser, inValidUser)),
    ctx.json(signInResponse.Message(validUser, inValidUser)),
  );
});
