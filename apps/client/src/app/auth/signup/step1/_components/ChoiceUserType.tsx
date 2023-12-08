import { userTypeArray } from "@auth/_constants";
import { Button, Heading, Text } from "@chakra-ui/react";
import * as Styled from "./ChoiceUserType.style";

interface PropsType {
  userChoice: "USER_BUYER" | "USER_SELLER" | undefined;
  setUserChoice: (user: "USER_BUYER" | "USER_SELLER") => void;
}

export const ChoiceUserType = ({ userChoice, setUserChoice }: PropsType) => {
  const onClickUserType = (user: "USER_BUYER" | "USER_SELLER") => {
    setUserChoice(user);
  };

  return (
    <>
      {userTypeArray.map((user) => (
        <Button
          key={user.id}
          onClick={() => onClickUserType(user.userType === "USER_BUYER" ? "USER_BUYER" : "USER_SELLER")}
          w="100%"
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
    </>
  );
};
