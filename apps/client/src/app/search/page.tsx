"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { Button } from "@shophub/ui";
import { useRouter } from "next/navigation";

import { SearchHeader } from "./_components";

const RECENT_SEARCH_WORDS = ["양말", "홍대입구"];

const SearchPage = () => {
  const router = useRouter();

  const handleClickRecentWord = (word: string) => () => router.replace(`/search/${word}`);

  return (
    <>
      <SearchHeader initialKeyword="" />
      <Text fontSize="16px" fontWeight="700" mb="24px">
        최근 검색어
      </Text>
      <Flex gap="16px" overflowX="scroll" as="ul" pb="10px">
        {RECENT_SEARCH_WORDS.map((word) => (
          <Box key={word} flex="0 0 auto">
            <Button variant="gray" size="tiny" w="fit-content" onClick={handleClickRecentWord(word)}>
              {word}
            </Button>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default SearchPage;
