"use client";

import { Flex, Text } from "@chakra-ui/react";
import { useCallback, useState } from "react";

import { HorizontalLine, StoreItem } from "~/components";
import { SearchBar, FilterBar } from "./_components";
import { useSetSearchWordValue } from "./_states/client";

// 퍼블리싱용
const STORE_LIST = [
  {
    id: 1,
    thumbnailUrl: "https://picsum.photos/200",
    name: "title",
    description: "전문 스트릿 브랜드샵",
    isCouponAvailable: true,
    address: "서울특별시 강남구 테헤란로 123",
    minimumPrice: 69000,
    distance: "도보 120m",
  },
  {
    id: 2,
    thumbnailUrl: "https://picsum.photos/200",
    name: "title",
    description: "전문 스트릿 브랜드샵",
    isCouponAvailable: true,
    address: "서울특별시 강남구 테헤란로 124",
    minimumPrice: 69000,
    distance: "도보 120m",
  },
];
const RECENT_SEARCH_WORDS = ["양말", "홍대입구"];

const SearchPage = () => {
  const [isSearchResult, setIsSearchResult] = useState(true);
  const setSearchWordValue = useSetSearchWordValue();

  const onClickRecentSearchWord = useCallback(
    (e: React.MouseEvent<HTMLParagraphElement>) => {
      const word = e.currentTarget.textContent;
      if (word) setSearchWordValue(word);
    },
    [setSearchWordValue],
  );

  return (
    <>
      <SearchBar />
      {isSearchResult ? (
        <>
          <Text>
            검색 결과 <span>102개</span>
          </Text>
          <FilterBar />
          <Flex flexDir="column" rowGap="24px" pt="24px">
            {STORE_LIST.map((item) => (
              <>
                <StoreItem key={item.address} storeInformation={item} />
                <HorizontalLine h="1px" />
              </>
            ))}
          </Flex>
        </>
      ) : (
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
      )}
    </>
  );
};

export default SearchPage;
