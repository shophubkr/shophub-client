import { Flex, Text } from "@chakra-ui/react";
import { useShophubTheme } from "@shophub/theme";
import { useRouter } from "next/navigation";

export const TabBar = () => {
  const router = useRouter();
  const theme = useShophubTheme();

  // TODO : 상수 파일로 분리합니다.
  const tabContentsArray = [
    {
      iconSymbol: "home",
      iconName: "홈",
      path: "",
    },
    {
      iconSymbol: "storefront",
      iconName: "팔로우",
      path: "",
    },
    {
      iconSymbol: "discount",
      iconName: "쿠폰",
      path: "",
    },
    {
      iconSymbol: "perm_identity",
      iconName: "마이 페이지",
      path: "",
    },
  ];

  const onPathRoutingHandler = (path: string) => {
    router.push(path);
  };

  return (
    <Flex
      w="full"
      padding="12px 8px"
      position="absolute"
      left="0"
      bottom="0"
      zIndex="9999"
      columnGap="12px"
      justifyContent="center"
      bgColor={theme.COLORS.white}
      boxShadow="0 -4px 8px rgba(0,0,0,0.05)"
    >
      {tabContentsArray.map((content) => (
        <Flex
          w="84px"
          flexDir="column"
          alignItems="center"
          rowGap="4px"
          onClick={() => onPathRoutingHandler(content.path)}
          cursor="pointer"
          color={theme.COLORS.grey[500]}
        >
          <Text className="material-icons-outlined">{content.iconSymbol}</Text>
          <Text>{content.iconName}</Text>
        </Flex>
      ))}
    </Flex>
  );
};
