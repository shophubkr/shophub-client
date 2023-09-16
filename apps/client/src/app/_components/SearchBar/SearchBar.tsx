import { Box, Flex, Input } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const SearchBar = () => {
  const [keyword, setKeyword] = useState<string>();
  const router = useRouter();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const onSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      router.refresh();
      router.push(`search/${keyword}`);
    }
  };

  return (
    <Flex
      w="100%"
      padding="4px 8px"
      boxShadow="0 4px 8px rgba(0,0,0,0.15)"
      borderRadius="8px"
      columnGap="8px"
      alignItems="center"
      background="white"
    >
      <Box className="material-icons-outlined" fontSize="24px">
        search
      </Box>
      <Input onChange={onChange} onKeyDown={onSearch} padding={0} border="none" />
    </Flex>
  );
};
