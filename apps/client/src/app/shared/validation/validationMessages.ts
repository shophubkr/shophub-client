export const ERROR_MESSAGES = {
  email: {
    required: "이메일을 입력해주세요.",
    pattern: "올바른 이메일 형식으로 입력해주세요.",
  },
  password: {
    required: "비밀번호를 입력해주세요.",
    min: "최소 8자 이상 입력해주세요.",
    max: "최대 20자리까지 입력이 가능해요.",
    pattern: "비밀번호는 숫자와 영문자 그리고 특수문자를 혼합해주세요.",
  },
  passwordConfirm: {
    required: "비밀번호를 한번 더 입력해주세요.",
    notSame: "비밀번호가 일치하지 않아요.",
  },
  nickname: {
    required: "닉네임을 입력해주세요.",
    min: "최소 2자 이상 입력해주세요.",
    pattern: "닉네임은 영문자, 한글, 숫자만 가능해요.",
  },
  phoneNumber: {
    required: "연락처를 입력해주세요.",
    pattern: "연락처 형식에 맞는 번호를 입력해주세요.",
  },
} as const;
