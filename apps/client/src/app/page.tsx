"use client";

import { Center, Container, Flex } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import type { ProductType } from "~/mocks/Apis/product/productApi";
import { ConvertingStoreButton } from "./(home)/_components/ConvertingStoreButton/ConvertingStoreButton";
import { KakaoMap } from "./(home)/_components/Map/KakaoMap";
import { StoreList } from "./(home)/_components/StoreList/StoreList";
import { SearchBar } from "./_components/SearchBar/SearchBar";
import { TopBar } from "./_components/TopBar/TopBar";

export default function Home() {
  // 퍼블리싱용
  const [data, setData] = useState<ProductType[]>();

  useEffect(() => {
    const getProductData = async () => {
      const res = await axios.get("/api/products");
      const { result } = res.data;

      setData(result);
    };

    getProductData();
  }, []);

  return (
    data && (
      <Container w="100%" h="100vh" padding="0">
        <Center w="90%" minW="358px" m="0 auto">
          <KakaoMap />
          <Flex w="100%" flexDir="column">
            <TopBar>LOGO</TopBar>
            <SearchBar />
          </Flex>
        </Center>
        <StoreList data={data} />
        <ConvertingStoreButton setData={setData} />
      </Container>
    )
  );
}
