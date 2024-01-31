import { Flex, Grid } from "@chakra-ui/react";

import { ShopProduct } from "../ShopProduct";
import { useGetProductsByShop } from "../../_hooks";

export const ShopProductSection = () => {
  const productList = useGetProductsByShop();

  return (
    <>
      <Flex mt="32px">브랜드 상품</Flex>
      <Grid gridTemplateColumns="172px 172px" gap="24px 12px" mt="16px">
        {productList &&
          productList.map((product) => {
            return <ShopProduct key={product.name + product.id} {...product} />;
          })}
      </Grid>
    </>
  );
};
