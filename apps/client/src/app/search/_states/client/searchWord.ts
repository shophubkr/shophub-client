import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

export const searchWordAtom = atom<string>({
  key: "searchWordAtom",
  default: "",
});

export const useSearchWordState = () => useRecoilState(searchWordAtom);
export const useSearchWordValue = () => useRecoilValue(searchWordAtom);
export const useSetSearchWordValue = () => useSetRecoilState(searchWordAtom);
