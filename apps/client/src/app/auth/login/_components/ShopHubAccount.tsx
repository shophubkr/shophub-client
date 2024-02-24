import { Flex, Text } from "@chakra-ui/react";
import { useShophubTheme } from "@shophub/theme";
import { Button } from "@shophub/ui";
import Link from "next/link";
import type { FormProps } from "~/components";
import { FormElement } from "~/components";

export const ShopHubAccountLogin = ({ control }: FormProps) => {
  const theme = useShophubTheme();

  return (
    <>
      <Flex flexDir="column" rowGap="24px" mb="48px">
        <FormElement
          control={control}
          name="email"
          label="이메일 계정"
          placeholder="이메일 계정"
          borderColor={theme.COLORS.grey[200]}
        />
        <FormElement
          control={control}
          name="password"
          label="비밀번호"
          type="password"
          placeholder="비밀번호"
          borderColor={theme.COLORS.grey[200]}
        />
      </Flex>
      <Button type="submit" size="large">
        로그인
      </Button>
      <Flex justifyContent="flex-end" mt="16px">
        <Link href="/auth/forget-password">
          <Text fontSize="16px">비밀번호 찾기</Text>
        </Link>
      </Flex>
    </>
  );
};
