import { useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import { getDiscoverMovies } from '../../api/axiosInstance';

export const useMovies = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const fetchMovies = async (page = 1) => {
    const data = await getDiscoverMovies(page);
    return data;
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery('movies', ({ pageParam }) => fetchMovies(pageParam), {
      getNextPageParam: (lastPage) => {
        const currentPage = lastPage.page || 1;
        return currentPage + 1;
      },
    });

  return {
    scrollRef,
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
