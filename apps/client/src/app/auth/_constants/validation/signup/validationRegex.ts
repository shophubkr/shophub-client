export const signUpFormValidationRegex = {
  password: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]/,
  nickname: /^[A-Za-z0-9가-힣]/,
  phoneNumber: /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
} as const;
