import { useMemo } from 'react'
import useInfiniteScroll from 'react-infinite-scroll-hook'
import type { IntersectionObserverHookRefCallback } from 'react-intersection-observer-hook'
import { useInfiniteQuery } from '@tanstack/react-query'

import { paginationConstants } from '../constants/pagination'
import { type GlobalTypes } from '../types/global'

export namespace UseLoadItemsTypes {
  export interface LoadItemsProps<T> {
    queryKey: unknown[]
    count?: number
    fetchFn: (page: number) => Promise<GlobalTypes.PaginationResponse<T>>
  }
  export interface UseLoadItemsReturnType<T> {
    data: T[]
    isLoading: boolean
    hasNextPage: boolean
    sentryRef: IntersectionObserverHookRefCallback
    isLoadingError: boolean
    fetchNextPage: ReturnType<typeof useInfiniteQuery>['fetchNextPage']
  }
}

export const useLoadItems = <T>({ queryKey, fetchFn, count = paginationConstants.listCount }: UseLoadItemsTypes.LoadItemsProps<T>): UseLoadItemsTypes.UseLoadItemsReturnType<T> => {
  const { data, isError, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage, isLoadingError } = useInfiniteQuery(
    {
      queryKey,
      queryFn: async ({ pageParam = 1 }) => await fetchFn(pageParam),
      getNextPageParam: (lastPage) => {
        return lastPage.pagination.page + 1
      },
      initialPageParam: 1
    }
  )

  const [sentryRef] = useInfiniteScroll({
    loading: isFetchingNextPage,
    disabled: isError,
    hasNextPage: Boolean(hasNextPage),
    onLoadMore: fetchNextPage
  })

  const flatData = useMemo(() => data?.pages?.reduce<T[]>((acc, item) => [...acc, ...item.data], []), [data])

  return {
    data: flatData ?? [],
    isLoading,
    hasNextPage,
    sentryRef,
    isLoadingError,
    fetchNextPage
  }
}
