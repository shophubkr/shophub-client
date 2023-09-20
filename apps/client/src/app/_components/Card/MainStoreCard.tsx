import { Center } from "@chakra-ui/react";
import type { ProductType } from "~/mocks/Apis/product/productApi";
import { Card } from "./Components/Card";

export const MainStoreCard = ({ data }: { data: ProductType[] }) => {
  return (
    <Center position="absolute" top="0" flexDir="column" w="100%" height="auto" padding="40px 0 48px">
      {data.map((it) => {
        return <Card data={it} />;
      })}
    </Center>
  );
};
