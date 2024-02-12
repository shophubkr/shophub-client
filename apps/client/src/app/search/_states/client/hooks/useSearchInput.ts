import { useCallback } from "react";
import type { ChangeEvent } from "react";
import { useSearchWordState } from "..";

export const useSearchInput = (): [string, (e: ChangeEvent<HTMLInputElement>) => void] => {
  const [searchWord, setSearchWord] = useSearchWordState();

  const onChangeSearchWord = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearchWord(e.target.value);
    },
    [setSearchWord],
  );

  return [searchWord, onChangeSearchWord];
};
