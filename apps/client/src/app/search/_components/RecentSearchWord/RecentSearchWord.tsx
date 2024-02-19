import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useCreateQuery } from "~/hooks";

// 퍼블리싱용
const RECENT_SEARCH_WORDS = ["양말", "홍대입구"];

export const RecentSearchWord = () => {
  const router = useRouter();
  const { createQuery } = useCreateQuery();

  const onClickRecentSearchWord = (e: React.MouseEvent<HTMLParagraphElement>) => {
    const query = createQuery("search", e.currentTarget.innerText);
    router.push(query);
  };

  return (
    <>
      <Text fontSize="16px" fontWeight="700" mb="24px">
        최근 검색어
      </Text>
      <Flex gap="16px" overflowX="scroll" as="ul">
        {RECENT_SEARCH_WORDS.map((word) => (
          <Text
            key={word}
            fontSize="14px"
            fontWeight="500"
            borderRadius="8px"
            p="4px 8px"
            bgColor="#EEEEEE"
            flex="0 0 auto"
            onClick={onClickRecentSearchWord}
          >
            {word}
          </Text>
        ))}
      </Flex>
    </>
  );
};