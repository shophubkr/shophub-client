import { Center } from "@chakra-ui/react";
import type { ProductType } from "~/mocks/Apis/product/productApi";
import { Card } from "./_components";

export const MainStoreCard = ({ storeDatas }: { storeDatas: ProductType[] }) => {
  return (
    <Center position="absolute" top="0" flexDir="column" w="100%" height="auto" padding="40px 0 48px">
      {storeDatas.map((store) => (
        // api 통신 이후, storeIdx만 key prop 설정 예정
        <Card key={store.storeIdx + Math.random()} store={store} />
      ))}
    </Center>
  );
};
