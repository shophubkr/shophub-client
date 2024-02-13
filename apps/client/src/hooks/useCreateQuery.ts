import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useCreateQuery = () => {
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

  return { pathname, createQuery };
};
