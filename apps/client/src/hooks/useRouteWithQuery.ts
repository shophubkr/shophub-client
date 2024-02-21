import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useRouteWithQuery = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQuery = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(key, value);

      return `${pathname}?${params.toString()}`;
    },
    [pathname, searchParams],
  );

  const handleNavigateToQuery = (key: string, value: string) => {
    const QUERY = createQuery(key, value);
    router.replace(QUERY);
  };

  return { router, pathname, searchParams, handleNavigateToQuery };
};
