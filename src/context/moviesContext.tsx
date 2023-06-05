import React from 'react';
import { createContext, useState } from 'react';

//Interfaces
import { IMoviesContext, MoviesProviderProps } from './types';

const MoviesContext = createContext<IMoviesContext>({
  moviesId: 0,
  setMoviesId: () => null,
});

export const MoviesProvider = ({ children }: MoviesProviderProps) => {
  const [moviesId, setMoviesId] = useState(0);

  return (
    <div>
      <MoviesContext.Provider value={{ moviesId, setMoviesId }}>
        {children}
      </MoviesContext.Provider>
    </div>
  );
};

export default MoviesContext;
