import { Flex, Grid } from "@chakra-ui/react";

import { ShopProduct } from "../ShopProduct";

export const ShopProductSection = () => {
  return (
    <>
      <Flex mt="32px">브랜드 상품</Flex>
      <Grid gridTemplateColumns="172px 172px" gap="24px 12px" mt="16px">
        <ShopProduct id={0} imageUrl="https://picsum.photos/200" topCategory="" introduce="" price={0} />
      </Grid>
    </>
  );
};
