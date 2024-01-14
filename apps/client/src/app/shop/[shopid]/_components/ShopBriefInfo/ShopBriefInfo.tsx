import { Button, Flex, Image, Text } from "@chakra-ui/react";

export const ShopBriefInfo = () => {
  return (
    <>
      <Image boxSize="358px" borderRadius="8px" src="https://picsum.photos/200" alt="Shop Thumbnail Images" />
      <Flex mt="40px">
        <Flex direction="column" flex="1">
          <Flex align="center" mb="12px" columnGap="8px">
            <Image
              boxSize="24px"
              objectFit="cover"
              src="https://picsum.photos/200"
              alt="ShopLogoImage"
              borderRadius="50%"
            />
            <Flex align="baseline" columnGap="8px">
              <Text fontSize="20px" fontWeight="700">
                가게이름
              </Text>
              <Text fontSize="14px" fontWeight="500">
                가게레벨
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
            가게소개
          </Text>
        </Flex>
        <Flex alignItems="flex-end" columnGap="4px">
          <Button h="inherit" p="4px 8px" fontSize="14px" fontWeight="500">
            <span className="material-icons-outlined" style={{ fontSize: "14px" }}>
              location_on
            </span>
            공유
          </Button>
          <Button h="inherit" p="4px 8px" fontSize="14px" fontWeight="500">
            <span className="material-icons-outlined" style={{ fontSize: "14px" }}>
              person
            </span>
            팔로우
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
