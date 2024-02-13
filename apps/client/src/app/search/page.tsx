"use client";

import { Flex } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";

import { HorizontalLine, ListTotal, SearchBar, StoreItem } from "~/components";
import { FilterBar, RecentSearchWord } from "./_components";
import { isEmptySearchWord } from "~/utils";
import { BackButton } from "~/components/BackButton";

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

const SearchPage = () => {
  const SEARCH_QUERY = useSearchParams().get("search");

  return (
    <>
      <Flex as="header" alignItems="center" columnGap="8px" m="16px 0 24px 0">
        <BackButton href="/" />
        <SearchBar />
      </Flex>
      {!isEmptySearchWord(SEARCH_QUERY) ? (
        <RecentSearchWord />
      ) : (
        <>
          <ListTotal title="검색 결과" total={102} />
          <FilterBar />
          <HorizontalLine h="1px" />
          <Flex flexDir="column" rowGap="24px" pt="24px">
            {STORE_LIST.map((item) => (
              <>
                <StoreItem key={item.address} storeInformation={item} />
                <HorizontalLine h="1px" />
              </>
            ))}
          </Flex>
        </>
      )}
    </>
  );
};

export default SearchPage;
