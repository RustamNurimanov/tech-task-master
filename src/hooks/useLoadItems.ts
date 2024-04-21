import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import type { IntersectionObserverHookRefCallback } from "react-intersection-observer-hook";

import { type GlobalTypes } from "../types/global";
import { flatten } from "lodash";

export namespace UseLoadItemsTypes {
  export interface LoadItemsProps<T> {
    queryKey: unknown[];
    count?: number;
    fetchFn: (page: number) => Promise<GlobalTypes.PaginationResponse<T>>;
  }
  export interface UseLoadItemsReturnType<T> {
    data: T[];
    isFetchingNextPage: boolean;
    isLoading: boolean;
    hasNextPage: boolean;
    sentryRef: IntersectionObserverHookRefCallback;
    error: Error | null;
    queryKey: unknown[];
    fetchNextPage: ReturnType<typeof useInfiniteQuery>["fetchNextPage"];
  }
}

export const useLoadItems = <T>({
  queryKey,
  fetchFn,
}: UseLoadItemsTypes.LoadItemsProps<T>): UseLoadItemsTypes.UseLoadItemsReturnType<T> => {
  const { data, isError, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage, error } =
    useInfiniteQuery({
      queryKey,
      queryFn: async ({ pageParam = 1 }) => await fetchFn(pageParam),
      getNextPageParam: lastPage => {
        const next = lastPage.pagination.page + 1;
        return lastPage.pagination.total_pages < next ? null : next;
      },
      initialPageParam: 1,
    });

  const [sentryRef] = useInfiniteScroll({
    loading: isFetchingNextPage,
    disabled: isError,
    hasNextPage: Boolean(hasNextPage),
    onLoadMore: fetchNextPage,
  });

  const flatData = useMemo(() => flatten(data?.pages.map(item => item.data)), [data]);

  return {
    data: flatData ?? [],
    isLoading,
    hasNextPage,
    sentryRef,
    error,
    fetchNextPage,
    queryKey,
    isFetchingNextPage,
  };
};
