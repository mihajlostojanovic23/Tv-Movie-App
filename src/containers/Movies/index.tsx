import React, { useEffect, useRef, useState } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';
import { getDiscoverMovies } from '../../api/services/apiService';
import Movie from '../../components/Movie';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';

export interface IMovieData {
  id: number;
  backdrop_path: string;
  original_title: string;
}

function Movies() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [movies, setMovies] = useState();
  const fetchMovies = async (page = 1) => {
    const data = await getDiscoverMovies(page);
    setMovies(data);
    return data;
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery('movies', ({ pageParam }) => fetchMovies(pageParam), {
      getNextPageParam: (lastPage) => {
        console.log(lastPage.page);
        const currentPage = lastPage.page || 1;
        return currentPage + 1;
      },
    });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0); // Scroll to the top when new pages are loaded
    }
  }, [data]);

  const onProgramFocused = ({ y }: { y: number }) => {
    if (scrollRef.current) {
      scrollRef.current.style.transform = `translateY(-${y}px)`;
      scrollRef.current.style.transition = '300ms';
    }
  };
  console.log(data);
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
        <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? 'Loading more...' : 'Load More'}
        </button>
      )}
    </div>
  );
}

export default withFocusable({})(Movies);
