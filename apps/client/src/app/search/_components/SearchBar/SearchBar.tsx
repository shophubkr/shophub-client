import { Flex, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import Link from "next/link";

import { Icon } from "~/components";
import { useSearchInput } from "../../_states/client";

export const SearchBar = () => {
  const [searchWord, onChangeSearchWord] = useSearchInput();

  return (
    <Flex as="header" alignItems="center" h="36px" columnGap="8px" mb="24px">
      <Link href="/">
        <Icon name="arrow_back_ios_new" />
      </Link>
      <InputGroup h="36px">
        <Input
          w="full"
          value={searchWord}
          onChange={onChangeSearchWord}
          variant="unstyled"
          border="1px solid #cccccc"
          borderRight="none"
          borderRadius="36px"
          p="10px 12px"
          fontSize="14px"
          placeholder="검색어를 입력해주세요."
        />
        <InputRightAddon
          h="36px"
          bg="none"
          border="1px solid #cccccc"
          borderLeft="none"
          borderRadius="0 36px 36px 0"
          w="unset"
          p="0 8px 0 0"
        >
          <Icon name="search" size={24} color="#cccccc" />
        </InputRightAddon>
      </InputGroup>
    </Flex>
  );
};
