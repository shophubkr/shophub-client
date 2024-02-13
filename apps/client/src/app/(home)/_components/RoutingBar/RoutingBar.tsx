import { Box, Flex } from "@chakra-ui/react";
import { useShophubTheme } from "@shophub/theme";
import { useRouter } from "next/navigation";
import { Icon } from "~/components";

export const RoutingBar = () => {
  const router = useRouter();
  const theme = useShophubTheme();

  const onRoutingHandler = () => {
    router.prefetch(`/search?page=0&size=10&search=`);
  };

  return (
    <Box w="full" position="relative" onClick={onRoutingHandler} zIndex="1">
      <Flex
        w="full"
        h="48px"
        p="0 16px"
        color={theme.COLORS.grey[500]}
        boxShadow="0 4px 8px rgba(0,0,0,0.05)"
        bgColor={theme.COLORS.white}
        alignItems="center"
      >
        장소, 매장, 상품 검색
      </Flex>
      <Box h="24px" position="absolute" top="50%" right="8px" transform="transLateY(-50%)">
        <Icon name="search" size={24} color={theme.COLORS.primary[100]} />
      </Box>
    </Box>
  );
};
