import { CheckBox } from "@auth/_components/index";
import { Flex } from "@chakra-ui/react";
import type { FormProps } from "@components/index";

export const AgreeCheckBox = ({ control }: FormProps) => {
  return (
    <Flex mt="48px" flexDir="column" rowGap="8px">
      <CheckBox control={control} name="isAgeOverAgree">
        [필수] 만 14세 이상이며 모두 동의합니다.
      </CheckBox>
      <CheckBox control={control} name="isSendAdsAgree">
        [선택] 광고성 정보 수신에 모두 동의합니다.
      </CheckBox>
    </Flex>
  );
};
