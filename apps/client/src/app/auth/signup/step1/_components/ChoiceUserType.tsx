import { userTypeList } from "@auth/_constants/signUpStep1UserType.Array";
import { Flex, Heading, Text } from "@chakra-ui/react";
import * as S from "../page.style";

interface PropsType {
  userChoice: "buyer" | "seller" | undefined;
  setUserChoice: (user: "buyer" | "seller") => void;
}

export const ChoiceUserType = ({ userChoice, setUserChoice }: PropsType) => {
  const onClickUserType = (user: "buyer" | "seller") => {
    setUserChoice(user);
  };

  return (
    <>
      {userTypeList.map((user) => (
        <S.StyledButton
          onClick={() => onClickUserType(user.userType === "buyer" ? "buyer" : "seller")}
          colorScheme={userChoice === user.userType ? "facebook" : "gray"}
          flexDir="column"
        >
          <Heading as="h4" fontSize="20px">
            {user.userType.toUpperCase()}
          </Heading>
          <Flex justify="center" alignItems="center" mt="8px" gap="4px">
            <Text className="material-icons-outlined">{user.materialIcons}</Text>
            <Text fontSize="14px">{user.description}</Text>
          </Flex>
        </S.StyledButton>
      ))}
    </>
  );
};
