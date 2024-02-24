import { Flex, Select, Text } from "@chakra-ui/react";
import type { MyShopSelectProps } from "./MyShopSelect.types";

export const MyShopSelect = ({ shopNameList }: MyShopSelectProps) => {
  return (
    <Flex flexDir="column" rowGap="16px" px="16px">
      <Text fontSize="18px" fontWeight={700}>
        매장 리스트
      </Text>
      <Select>
        {shopNameList.map((shopName, index) => (
          <option key={shopName} selected={index === 0}>
            {shopName}
          </option>
        ))}
      </Select>
    </Flex>
  );
};
