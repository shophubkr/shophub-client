import { Flex, Text } from "@chakra-ui/react";
import { useShophubTheme } from "@shophub/theme";
import { Icon } from "../Icon";
import { TAB_BAR_NAVIGATION_GROUP } from "./TabBar.constant";
import type { TabBarProps } from "./TabBar.type";

export const TabBar = ({ onPathRoutingHandler }: TabBarProps) => {
  const theme = useShophubTheme();

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
      {TAB_BAR_NAVIGATION_GROUP.map((navigation) => (
        <Flex
          w="84px"
          flexDir="column"
          alignItems="center"
          rowGap="4px"
          onClick={() => onPathRoutingHandler(navigation.path)}
          cursor="pointer"
          color={theme.COLORS.grey[500]}
          key={navigation.iconName}
        >
          <Icon name={navigation.iconSymbol} size={24} />
          <Text>{navigation.iconName}</Text>
        </Flex>
      ))}
    </Flex>
  );
};
