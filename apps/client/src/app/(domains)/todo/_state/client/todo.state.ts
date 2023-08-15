import { atom, useRecoilState, useRecoilValue } from "recoil";
import type { Product } from "../server/api";

export const todoAtom = atom<Product[]>({
  key: "todoAtom",
  default: [],
});

export const useTodoState = () => useRecoilState(todoAtom);
export const useTodoValue = () => useRecoilValue(todoAtom);
