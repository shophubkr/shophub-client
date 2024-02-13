import { useState } from "react";
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { useShophubTheme } from "@shophub/theme";
import { useRouter } from "next/navigation";

import { Icon } from "~/components";
import { useCreateQuery } from "~/hooks";
import { isEmptySearchWord, isEnterKey } from "~/utils";

export const SearchBar = () => {
  const theme = useShophubTheme();
  const router = useRouter();
  const { pathname, createQuery } = useCreateQuery();
  const [searchWord, setSearchWord] = useState("");

  const handleChangeSearchWord = (e: React.ChangeEvent<HTMLInputElement>) => setSearchWord(e.target.value);

  const handleKeyDownSearch = (e: React.KeyboardEvent<HTMLInputElement>) => isEnterKey(e) && handleSearch();

  const handleSearch = () => {
    const query = createQuery("search", searchWord);
    if (isEmptySearchWord(searchWord)) router.push(pathname);
    else router.push(query);
  };

  return (
    <InputGroup h="36px">
      <Input
        value={searchWord}
        onChange={handleChangeSearchWord}
        variant="unstyled"
        border={`1px solid ${theme.COLORS.grey[200]}`}
        borderRight="none"
        borderRadius="36px"
        p="10px 12px"
        fontSize="14px"
        placeholder="검색어를 입력해주세요."
        onKeyDown={handleKeyDownSearch}
      />
      <InputRightAddon
        h="36px"
        bg="none"
        border={`1px solid ${theme.COLORS.grey[200]}`}
        borderLeft="none"
        borderRadius="0 36px 36px 0"
        w="unset"
        pr="8px"
        cursor="pointer"
        onClick={handleSearch}
      >
        <Icon name="search" size={24} color={theme.COLORS.grey[200]} />
      </InputRightAddon>
    </InputGroup>
  );
};
