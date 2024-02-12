import { CHOICE_USER_TYPE_GROUP } from "@auth/_constants";
import type { ChoiceUserTypeProps, UserType } from "@auth/_types";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import * as Styled from "./ChoiceUserType.style";

export const ChoiceUserType = ({ userChoice, setUserChoice }: ChoiceUserTypeProps) => {
  const handleClickUserType = (user: UserType) => {
    setUserChoice(user);
  };

  return (
    <Flex w="full" h="149px" columnGap="8px" mt="80px">
      {CHOICE_USER_TYPE_GROUP.map((user) => (
        <Button
          key={user.userType}
          onClick={() => handleClickUserType(user.userType)}
          w="full"
          h="149px"
          flexDir="column"
          colorScheme={userChoice === user.userType ? "facebook" : "gray"}
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
