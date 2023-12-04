import { Flex } from "@chakra-ui/react";
import { FormElement, type FormProps } from "@components/index";

interface RoleProp extends FormProps {
  role: string | null;
}

export const SignUpForm = ({ control, role }: RoleProp) => {
  return (
    <Flex flexDir="column" rowGap="40px">
      <FormElement control={control} name="email" label="이메일 계정 *" placeholder="이메일 계정을 입력해주세요" />
      <FormElement
        control={control}
        name="password"
        label="비밀번호 *"
        type="password"
        placeholder="비밀번호를 입력해주세요"
      />
      <FormElement
        control={control}
        name="passwordConfirm"
        label="비밀번호 확인 *"
        type="password"
        placeholder="비밀번호를 재입력해주세요"
      />
      <FormElement control={control} name="nickname" label="닉네임 *" placeholder="닉네임을 입력해주세요" />
      {role === "USER_SELLER" && (
        <FormElement control={control} name="phoneNumber" label="연락처 *" placeholder="연락처를 입력해주세요" />
      )}
    </Flex>
  );
};
