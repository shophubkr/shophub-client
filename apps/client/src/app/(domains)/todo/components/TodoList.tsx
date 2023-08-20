"use client";

import { useFetchTodo } from "../_state/server";

export const TodoList = () => {
  const { data } = useFetchTodo();

  return <div>{JSON.stringify(data)}</div>;
};
