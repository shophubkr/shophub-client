import { CHOICE_USER_TYPE_GROUP } from "@auth/_constants";
import type { ChoiceUserTypeProps, UserType } from "@auth/_types";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import * as Styled from "./ChoiceUserType.style";

export const ChoiceUserType = ({ userChoice, setUserChoice, theme }: ChoiceUserTypeProps) => {
  const handleClickUserType = (user: UserType) => {
    setUserChoice(user);
  };

  return (
    <Flex w="full" columnGap="8px" mt="80px">
      {CHOICE_USER_TYPE_GROUP.map((user) => (
        <Button
          key={user.userType}
          onClick={() => handleClickUserType(user.userType)}
          w="full"
          h="175px"
          flexDir="column"
          color={userChoice === user.userType ? theme.COLORS.white : theme.COLORS.black}
          bgColor={userChoice === user.userType ? theme.COLORS.primary[100] : theme.COLORS.white}
          boxShadow="0 0 4px rgba(0, 0, 0, 0.15)"
        >
          <Heading as="h4" fontSize="20px">
            {user.userType === "USER_BUYER" ? "BUYER" : "SELLER"}
          </Heading>
          <Styled.IconBox justify="center" alignItems="center" mt="8px" gap="4px">
            <Text className="material-icons-outlined">{user.materialIcons}</Text>
            <Text fontSize="14px">{user.description}</Text>
          </Styled.IconBox>
        </Button>
      ))}
    </Flex>
  );
};
