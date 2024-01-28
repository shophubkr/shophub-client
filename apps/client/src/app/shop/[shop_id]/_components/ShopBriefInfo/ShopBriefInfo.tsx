import { Flex, Text } from "@chakra-ui/react";
import { Button } from "@shophub/ui";

import { ImageBox } from "~/components";

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
      <Flex mt="40px" flexDir="column">
        <Flex>
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
        </Flex>
        <Flex alignItems="center">
          <Text fontSize="16px" fontWeight="300" overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis" flex="1">
            {introduce}
          </Text>
          <Flex columnGap="8px">
            <Button iconNamed="share" iconSized={14} size="tiny" variant="gray" w="auto">
              공유
            </Button>
            <Button iconNamed="person_add_alt_1" iconSized={14} size="tiny" w="auto">
              팔로우
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
