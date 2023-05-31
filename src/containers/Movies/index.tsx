import React, { useEffect, useRef, useState } from 'react';
import { getDiscoverMovies } from '../../api/services/apiService';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';

//Component
import Movie from '../../components/Movie';

export interface IMovieData {
  id: number;
  backdrop_path: string;
  original_title: string;
}

function Movies() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const onProgramFocused = ({ y }: { y: number }) => {
    if (scrollRef.current) {
      scrollRef.current.style.transform = `translateY(-${y}px)`;
      scrollRef.current.style.transition = '300ms';
    }
  };

  const [movies, setMovies] = useState<IMovieData[]>([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getDiscoverMovies();
        setMovies(data.results);
      } catch (error) {
        // Handle error
        console.log(error);
      }
    };

    fetchMovies();
  }, []);
  return (
    <div
      ref={scrollRef}
      className=" grid gap-4 grid-cols-4 items-center bg-[#292727] justify-center"
    >
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          data={movie}
          onBecameFocused={onProgramFocused}
          focusKey={`movie-${movie.id}`}
          onEnterPress={() => {
            alert(movie.id);
          }}
        />
      ))}
    </div>
  );
}

export default withFocusable()(Movies);
