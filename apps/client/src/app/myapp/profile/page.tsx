"use client";

import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { Button } from "@shophub/ui";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, FormElement } from "~/components";
import type { ProfileFormProps } from "./_types";
import { PROFILE_FORM_SCHEMA } from "./_constants";
import { useUploadImage } from "~/hooks";

// TODO: api 연동 후 제거
const myInfo = {
  nickname: "testhubman",
  image: "https://picsum.photos/200",
};

const ProfilePage = () => {
  const { imageRef, readImgFile, onClickImageButton, onChangeImageFile } = useUploadImage();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ProfileFormProps>({
    resolver: yupResolver(PROFILE_FORM_SCHEMA),
    defaultValues: {
      image: myInfo.image,
      nickname: myInfo.nickname,
    },
  });

  const passwordErrorMessage = errors.newPassword?.message || errors.oldPassword?.message || "";

  const handleNicknameDuplicationCheck = () => {
    // TODO: api 요청 처리
  };

  const handleCheckCurrentPassword = () => {
    // TODO: api 요청 처리
  };

  const handleEditProfileSubmit = (data: ProfileFormProps) => {
    // TODO: api요청 처리
  };

  return (
    <form onSubmit={handleSubmit(handleEditProfileSubmit)}>
      <Center w="full" h="160px">
        <Avatar
          edit
          src={readImgFile || myInfo.image}
          ref={imageRef}
          onClick={onClickImageButton}
          onChange={onChangeImageFile}
        />
      </Center>
      <Flex flexDir="column" rowGap="32px" alignItems="flex-start">
        <Text fontWeight="700">프로필 정보</Text>
        <Flex w="full" alignItems="flex-end" columnGap="8px">
          <FormElement control={control} name="nickname" label="닉네임" placeholder="변경할 닉네임을 입력해주세요" />
          <Button w="20%" size="medium" variant="gray" type="button">
            중복
          </Button>
        </Flex>
        <Flex position="relative" w="full" flexDir="column" rowGap="8px">
          <Flex w="full" alignItems="flex-end" columnGap="8px">
            <FormElement
              control={control}
              name="oldPassword"
              label="비밀번호"
              placeholder="현재 비밀번호를 입력해주세요"
              showValidationMessage={false}
              type="password"
            />
            <Button w="20%" size="medium" variant="gray" type="button">
              확인
            </Button>
          </Flex>
          <FormElement
            control={control}
            name="newPassword"
            placeholder="변경할 비밀번호를 입력해주세요"
            showValidationMessage={false}
            type="password"
          />
          <Text position="absolute" top="100%" marginTop="8px" fontSize="12px" color="#ff6565">
            {passwordErrorMessage}
          </Text>
        </Flex>
      </Flex>
      <Box mt="48px">
        <Button variant="gray">회원정보 수정</Button>
      </Box>
    </form>
  );
};

export default ProfilePage;
