import { Box, Flex, Text } from "@chakra-ui/react";
import { Button } from "@shophub/ui";
import { useRouteWithQuery } from "~/hooks";

// 퍼블리싱용
const RECENT_SEARCH_WORDS = ["양말", "홍대입구"];

export const RecentSearchWord = () => {
  const { handleNavigateToQuery } = useRouteWithQuery();

  const handleClickRecentWord = (word: string) => () => handleNavigateToQuery("keyword", word);

  return (
    <>
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
