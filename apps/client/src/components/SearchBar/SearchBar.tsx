import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { useShophubTheme } from "@shophub/theme";
import { useRouter } from "next/navigation";

import { useCallback, useEffect } from "react";
import { Icon } from "~/components";
import { useCreateQuery, useEnterEvent } from "~/hooks";
import { isEmptyWord } from "~/utils";
import { useInput } from "~/hooks/useInput";

export const SearchBar = () => {
  const theme = useShophubTheme();
  const router = useRouter();
  const { pathname, searchParams, createQuery } = useCreateQuery();
  const [word, setWord, handleChangeWord] = useInput("");

  const handleSearch = () => {
    const query = createQuery("search", word);
    if (isEmptyWord(word)) return router.push(pathname);
    return router.push(query);
  };

  const { handlePressEnter } = useEnterEvent(handleSearch);

  const keepSearchWordOnRefresh = useCallback(() => {
    const SEARCH_WORD = searchParams.get("search");
    if (SEARCH_WORD) setWord(SEARCH_WORD);
  }, [searchParams, setWord]);

  useEffect(() => keepSearchWordOnRefresh(), [keepSearchWordOnRefresh]);

  return (
    <InputGroup h="36px">
      <Input
        value={word}
        onChange={handleChangeWord}
        variant="unstyled"
        border={`1px solid ${theme.COLORS.grey[200]}`}
        borderRight="none"
        borderRadius="36px"
        p="10px 12px"
        fontSize="14px"
        placeholder="검색어를 입력해주세요."
        onKeyDown={handlePressEnter}
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
