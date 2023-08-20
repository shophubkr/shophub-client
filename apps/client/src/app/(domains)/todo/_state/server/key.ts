import { queryKeys } from "~/app/shared/server/queryKeys";

export const todoQueryKey = {
  fetchTodo: [queryKeys.todo, "투두 조회"] as const,
};
