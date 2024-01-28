import { Flex, Grid, Spinner } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

import { ShopProduct } from "../ShopProduct";
import { productApi } from "../../_states/server";

import type { ShopProductSectionProps } from "../../_types";

export const ShopProductSection = ({ shopId }: ShopProductSectionProps) => {
  const { isLoading, data, isError } = useQuery(["productsByShop", shopId], () => productApi.getProductsByShop(shopId));

  if (isLoading) return <Spinner />;
  if (isError) return null;

  return (
    <>
      <Flex mt="32px">브랜드 상품</Flex>
      <Grid gridTemplateColumns="172px 172px" gap="24px 12px" mt="16px">
        {data.productList.length === 0 ? (
          <>등록된 상품이 없습니다</>
        ) : (
          data.productList.map((product) => {
            const { id, imageUrl, introduce, name, price, topCategory } = product;
            return (
              <ShopProduct
                key={name + id}
                id={id}
                name={name}
                imageUrl="https://picsum.photos/200"
                topCategory={topCategory}
                introduce={introduce}
                price={price}
              />
            );
          })
        )}
      </Grid>
    </>
  );
};
