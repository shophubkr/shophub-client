import { Flex, Text } from "@chakra-ui/react";
import type { ListTotalProps } from "./ListTotal.types";

export const ListTotal = ({ title, total }: ListTotalProps) => {
  return (
    <Flex columnGap="5px">
      <Text>{title}</Text>
      <Text fontWeight={700}>{total}</Text>
    </Flex>
  );
};
