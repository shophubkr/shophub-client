import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { useShophubTheme } from "@shophub/theme";
import type { ChangeEvent } from "react";
import { useEffect } from "react";

import { Icon } from "~/components";
import { useEnterEvent, useRouteWithQuery, useInput } from "~/hooks";
import { isEmptyWord } from "~/utils";

export const SearchBar = ({ initialKeyword }: { initialKeyword: string }) => {
  const theme = useShophubTheme();
  const { router, handleNavigateToQuery } = useRouteWithQuery();
  const { value: keyword, setValue: setKeyword, handleChangeValue: handleChangeKeyword } = useInput(initialKeyword);

  useEffect(() => {
    setKeyword(initialKeyword);
  }, [setKeyword, initialKeyword]);

  const handleSearch = () => {
    if (isEmptyWord(keyword) || initialKeyword === keyword) return;
    handleNavigateToQuery("keyword", keyword);
  };

  const { handlePressEnter } = useEnterEvent(handleSearch);

  const handleKeywordInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") return router.replace("/search");
    return handleChangeKeyword(e);
  };

  return (
    <InputGroup h="36px">
      <Input
        value={keyword}
        onChange={handleKeywordInput}
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
