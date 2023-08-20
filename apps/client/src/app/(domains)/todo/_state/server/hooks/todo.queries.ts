import { useQuery } from "@tanstack/react-query";
import { getTodo } from "../api";
import { todoQueryKey } from "../key";

export const useFetchTodo = () => {
  return useQuery({
    queryKey: todoQueryKey.fetchTodo,
    queryFn: getTodo,
  });
};
