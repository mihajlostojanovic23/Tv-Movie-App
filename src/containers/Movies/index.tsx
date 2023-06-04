import React, { useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import { getDiscoverMovies } from '../../api/axiosInstance';
import Card from '../../components/Card';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import Button from '../../components/Button';

export interface IMovieData {
  id: number;
  backdrop_path: string;
  original_title: string;
}

//Todo: Export types in type file
//Todo: Export logic to custom hook

type setFocus = {
  setFocus: (focus: string) => void;
};

function Movies() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const fetchMovies = async (page = 1) => {
    const data = await getDiscoverMovies(page);

    return data;
  };

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    'movies',
    ({ pageParam }) => fetchMovies(pageParam),
    {
      getNextPageParam: (lastPage) => {
        const currentPage = lastPage.page || 1;
        return currentPage + 1;
      },
    }
  );
  const onProgramFocused = ({ y }: { y: number }) => {
    if (scrollRef.current) {
      scrollRef.current.style.transform = `translateY(-${y}px)`;
      scrollRef.current.style.transition = '300ms';
    }
  };

  return (
    <div className='bg-[#292727] '>
    <div
      ref={scrollRef}
      className="grid gap-4 grid-cols-4 items-center  justify-center"
    >
      {data?.pages.map((page) =>
        page.results.map((movie: IMovieData) => (
          <Card
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
      </div>
      <div>HEJ BRO</div>
      {hasNextPage && (
        <div className='w-[100%] justify-center flex bg-[red]'> 
          <Button
          onEnterPress={({ setFocus }: setFocus) => {
            fetchNextPage();
            setFocus(
              `movie-${data?.pages[data?.pages.length - 1]?.results[16].id}`
            );
          }}
        />
        </div>
      )}
    
    </div>
  );
}

export default withFocusable({ trackChildren: true })(Movies);
