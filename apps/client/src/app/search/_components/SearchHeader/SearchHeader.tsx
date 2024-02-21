import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { Icon, SearchBar } from "~/components";
import type { SearchHeaderProps } from "./SearchHeader.types";

export const SearchHeader = ({ initialKeyword }: SearchHeaderProps) => {
  const router = useRouter();

  const handleNavigateToBack = () => router.back();

  return (
    <Flex as="header" alignItems="center" columnGap="8px" m="16px 0 24px 0">
      <Flex onClick={handleNavigateToBack}>
        <Icon name="arrow_back_ios_new" size={24} />
      </Flex>
      <SearchBar initialKeyword={initialKeyword} />
    </Flex>
  );
};
