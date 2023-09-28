import { Box, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import * as S from "./ConvertingStoreButton.style";

export const ConvertingStoreButton = ({ setStoreData }: { setStoreData: (value: []) => void }) => {
  const onStoreType = (type: "nearby" | "recommend") => {
    // 퍼블리싱용
    const getData = async () => {
      const res = await axios.get("/api/products", { params: { storeType: type } });

      const { result } = res.data;
      setStoreData(result);
    };
    getData();
  };

  return (
    <Flex w="100%" position="absolute" left="0" bottom="0">
      <S.StyledButton
        w="100%"
        columnGap="8px"
        h="48px"
        bgColor="black"
        color="white"
        onClick={() => onStoreType("nearby")}
      >
        <Box className="material-icons-outlined">local_mall</Box>
        <Text fontSize="16px">인근 매장</Text>
      </S.StyledButton>
      <S.StyledButton w="100%" columnGap="8px" h="48px" bgColor="#E5EFAD" onClick={() => onStoreType("recommend")}>
        <Box className="material-icons-outlined">stars</Box>
        <Text fontSize="16px">추천 매장</Text>
      </S.StyledButton>
    </Flex>
  );
};
