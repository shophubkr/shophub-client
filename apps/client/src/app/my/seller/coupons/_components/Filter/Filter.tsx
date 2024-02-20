import { Select } from "@chakra-ui/react";
import type { ChangeEvent } from "react";
import type { FilterProps } from "./Filter.types";

export const Filter = ({ setTerminatedFilter }: FilterProps) => {
  const handleChangeFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    setTerminatedFilter(event.target.value === "null" ? null : Boolean(event.target.value));
  };

  return (
    <Select w="121px" h="32px" fontSize="14px" fontWeight={400} onChange={handleChangeFilter}>
      <option value="null" selected>
        전체
      </option>
      <option value="false">진행중</option>
      <option value="true">종료</option>
    </Select>
  );
};
