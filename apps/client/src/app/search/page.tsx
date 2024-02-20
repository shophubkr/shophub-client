"use client";

import { Flex } from "@chakra-ui/react";

import { HorizontalLine, Icon, ListTotal, SearchBar, StoreItem } from "~/components";
import { FilterBar, RecentSearchWord } from "./_components";
import { isEmptyWord } from "~/utils";
import { useRouteWithQuery } from "~/hooks";

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
  const { router, searchParams } = useRouteWithQuery();
  const PARAMS_KEYWORD = searchParams.get("keyword") ?? "";

  const handleNavigateToBack = () => router.back();

  return (
    <>
      <Flex as="header" alignItems="center" columnGap="8px" m="16px 0 24px 0">
        <Flex onClick={handleNavigateToBack}>
          <Icon name="arrow_back_ios_new" size={24} />
        </Flex>
        <SearchBar initialKeyword={PARAMS_KEYWORD} />
      </Flex>
      {isEmptyWord(PARAMS_KEYWORD) ? (
        <RecentSearchWord />
      ) : (
        <>
          <ListTotal title="검색 결과" total={102} />
          <FilterBar />
          <HorizontalLine h="1px" />
          <Flex flexDir="column" rowGap="24px" pt="24px">
            {STORE_LIST.map((store) => (
              <>
                <StoreItem
                  key={store.id}
                  id={store.id}
                  image={store.thumbnailUrl}
                  name={store.name}
                  introduce={store.description}
                  checkCoupon={store.isCouponAvailable}
                  address={store.address}
                  minPrice={store.minimumPrice}
                />
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
