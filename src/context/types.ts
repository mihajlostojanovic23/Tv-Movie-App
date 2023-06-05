import React, { Dispatch, SetStateAction } from 'react';

export interface IDataValueContext {
  userInfo: object;
  setUserInfo: Dispatch<SetStateAction<object>>;
  userAuth: boolean;
  setUserAuth: Dispatch<SetStateAction<boolean>>;
}
export interface UserProviderProps {
  children: React.ReactNode;
}

export interface IMoviesContext {
  moviesId: number;
  setMoviesId: Dispatch<SetStateAction<number>>;
}

export interface MoviesProviderProps {
  children: React.ReactNode;
}
