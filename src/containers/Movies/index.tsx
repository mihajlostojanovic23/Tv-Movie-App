import React, { useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import { getDiscoverMovies } from '../../api/services/apiService';
import Movie from '../../components/Movie';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import Button from '../../components/Button';

export interface IMovieData {
  id: number;
  backdrop_path: string;
  original_title: string;
}

type setFocus = {
  setFocus: (focus: string) => void;
};

function Movies() {
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
  const onProgramFocused = (
    {
      y,
      width,
      height,
      top,
      left,
      node,
    }: {
      y: number;
      width: number;
      height: number;
      top: number;
      left: number;
      node: number;
    },
    { prop1, prop2 }: { prop1: any; prop2: any },
    { event, other }: { event: any; other: any }
  ) => {
    console.log(event);
    if (scrollRef.current) {
      scrollRef.current.style.transform = `translateY(-${y}px)`;
      scrollRef.current.style.transition = '300ms';
    }
  };

  return (
    <div
      ref={scrollRef}
      className="grid gap-4 grid-cols-4 items-center bg-[#292727] justify-center"
    >
      {data?.pages.map((page) =>
        page.results.map((movie: any) => (
          <Movie
            key={movie.id}
            data={movie}
            onBecameFocused={onProgramFocused}
            focusKey={`movie-${movie.id}`}
            onEnterPress={() => {
              alert(movie.id);
            }}
          />
        ))
      )}
      {hasNextPage && (
        <Button
          onEnterPress={({ setFocus }: setFocus) => {
            fetchNextPage();
            setFocus(
              `movie-${data?.pages[data?.pages.length - 1]?.results[16].id}`
            );
          }}
        />

        // <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
        //   {isFetchingNextPage ? 'Loading more...' : 'Load More'}
        // </button>
      )}
    </div>
  );
}

export default withFocusable({ trackChildren: true })(Movies);
