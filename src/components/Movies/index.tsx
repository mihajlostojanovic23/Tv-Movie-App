import React, { useEffect, useState } from 'react';
import { getDiscoverMovies } from '../../api/services/apiService';

//Component
import Movie from '../Movie';

export interface IMovieData {
  id: number;
  backdrop_path: string;
  original_title: string;
}

function Movies() {
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
    <div className="flex flex-wrap gap-4 items-center bg-[#292727] justify-center">
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          data={movie}
          focusKey={`movie-${movie.id}`}
          onEnterPress={() => {
            alert(movie.id);
          }}
        />
      ))}
    </div>
  );
}

export default Movies;
