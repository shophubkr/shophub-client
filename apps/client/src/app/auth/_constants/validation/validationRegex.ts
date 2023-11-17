export const formValidationRegex = {
  password: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]/,
  nickname: /^[A-Za-z0-9가-힣]/,
  tel: /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
  businessNum: /^[0-9]{3}?[0-9]{2}?[0-9]{5}$/,
};
