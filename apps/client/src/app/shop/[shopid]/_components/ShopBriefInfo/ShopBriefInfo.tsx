import { Button, Flex, Text } from "@chakra-ui/react";

import { Icon, ImageBox } from "~/components";

import type { ShopBriefInfoProps } from "../../_types";

export const ShopBriefInfo = ({ name, level, introduce }: ShopBriefInfoProps) => {
  return (
    <>
      <ImageBox
        src="https://picsum.photos/200"
        alt="ShopThumbnailImage"
        boxSize="358px"
        borderRadius="8px"
        imgOptions={{ priority: true }}
      />
      <Flex mt="40px">
        <Flex direction="column" flex="1">
          <Flex align="center" mb="12px" columnGap="8px">
            <ImageBox
              src="https://picsum.photos/200"
              alt="ShopLogoImage"
              boxSize="24px"
              borderRadius="50%"
              imgOptions={{ priority: true }}
            />
            <Flex align="baseline" columnGap="8px">
              <Text fontSize="20px" fontWeight="700">
                {name}
              </Text>
              <Text fontSize="14px" fontWeight="500">
                Lv.{level}
              </Text>
            </Flex>
          </Flex>
          <Text
            fontSize="16px"
            fontWeight="300"
            w="200px"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
          >
            {introduce}
          </Text>
        </Flex>
        <Flex alignItems="flex-end" columnGap="4px">
          <Button h="inherit" p="4px 8px" fontSize="14px" fontWeight="500">
            <Icon name="location_on" size={14} />
            공유
          </Button>
          <Button h="inherit" p="4px 8px" fontSize="14px" fontWeight="500">
            <Icon name="person" size={14} />
            팔로우
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
