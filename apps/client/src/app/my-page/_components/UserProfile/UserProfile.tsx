"use client";

import { Avatar, Button, Flex, Text } from "@chakra-ui/react";

import type { UserProfileProps } from "./UserProfile.types";

export const UserProfile = ({ imgSrc, email, userType }: UserProfileProps) => {
  return (
    <Flex h="72px" gap="16px" alignItems="center">
      <Avatar w="72px" h="72px" src={imgSrc} />
      <div>
        <Text mb="16px" fontSize="18px">
          {email}
        </Text>
        <Flex gap="8px" h="32px">
          <Button h="full" fontSize="14px" fontWeight="400">
            프로필 관리
          </Button>
          {userType === "seller" && (
            <Button h="full" fontSize="14px" fontWeight="400">
              매장 관리
            </Button>
          )}
        </Flex>
      </div>
    </Flex>
  );
};
