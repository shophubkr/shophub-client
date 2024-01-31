import { Button, Flex } from "@chakra-ui/react";

import { Icon } from "~/components";

import type { GetShopDetailInfoResponse } from "../../_types";

export const ShopOperationInfo = ({
  address,
  hour,
  telNum,
  tags,
}: Pick<GetShopDetailInfoResponse["result"], "address" | "hour" | "telNum" | "tags">) => {
  const handleCopyAddressToClipboard = async () => {
    await navigator.clipboard.writeText(address);
  };

  return (
    <Flex as="ul" flexDir="column" rowGap="16px" m="24px 0">
      <Flex alignItems="center" columnGap="4px" fontSize="14px" fontWeight="400" as="li">
        <Icon name="location_on" />
        {address}
        <Button
          p="0 0 0 8px"
          h="full"
          bg="none"
          fontSize="12px"
          fontWeight="400"
          onClick={handleCopyAddressToClipboard}
        >
          <Icon name="content_copy" size={14} />
          복사
        </Button>
      </Flex>
      <Flex alignItems="center" columnGap="4px" fontSize="14px" fontWeight="400" as="li">
        <Icon name="schedule" />
        {hour}
      </Flex>
      <Flex alignItems="center" columnGap="4px" fontSize="14px" fontWeight="400" as="li">
        <Icon name="call" />
        {telNum}
      </Flex>
      <Flex alignItems="center" columnGap="4px" fontSize="14px" fontWeight="400" as="li">
        <Icon name="tag" />
        {tags?.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </Flex>
    </Flex>
  );
};
