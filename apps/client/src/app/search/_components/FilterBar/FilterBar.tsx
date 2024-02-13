import { Flex, Select, Text } from "@chakra-ui/react";

import { Icon } from "~/components";

export const FilterBar = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" p="24px 0 16px 0">
      <Select
        size="sm"
        w="102px"
        borderRadius="4px"
        fontSize="14px"
        fontWeight="400"
        icon={<Icon name="keyboard_arrow_down" size={24} color="#999999" />}
        placeholder="쿠폰 여부"
        p="0"
      >
        <option value="true">있음</option>
        <option value="false">없음</option>
      </Select>
      <Flex columnGap="8px" alignItems="center">
        <Text bg="none" p="0" h="auto">
          가까운 거리순
        </Text>
        |
        <Text bg="none" p="0" h="auto">
          낮은 가격순
        </Text>
      </Flex>
    </Flex>
  );
};
