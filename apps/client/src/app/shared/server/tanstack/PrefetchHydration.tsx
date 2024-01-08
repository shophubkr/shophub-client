import type { QueryFunction, QueryKey } from "@tanstack/react-query";
import { Hydrate, QueryClient, dehydrate } from "@tanstack/react-query";
import { cache, type PropsWithChildren } from "react";

interface FetchQueryOptions {
  queryKey: QueryKey;
  queryFn: QueryFunction;
}

export const PrefetchHydration = async ({ queryKey, queryFn, children }: PropsWithChildren<FetchQueryOptions>) => {
  const getQueryClient = cache(() => new QueryClient());
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({ queryKey, queryFn });
  const dehydratedState = dehydrate(queryClient);

  return <Hydrate state={dehydratedState}>{children}</Hydrate>;
};
