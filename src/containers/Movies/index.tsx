import React, { useContext } from 'react';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';

//Components
import Card from '../../components/Card';
import Button from '../../components/Button';

//Interface
import { IMovieData } from './types';

//Custom hook
import { useMovies } from './useMovies';

//Context
import MoviesContext from '../../context/moviesContext';

type setFocus = {
  setFocus: (focus: string) => void;
};

function Movies({ hasFocusedChild }: { hasFocusedChild: any }) {
  console.log(hasFocusedChild);
  const { fetchNextPage, hasNextPage, data, scrollRef, isFetchingNextPage } =
    useMovies();
  const { moviesId, setMoviesId } = useContext(MoviesContext);
  const onProgramFocused = ({ y }: { y: number }, { id }: { id: number }) => {
    setMoviesId(id);

    if (scrollRef.current) {
      scrollRef.current.style.transform = `translateY(-${y}px)`;
      scrollRef.current.style.transition = '300ms';
    }
  };

  return (
    <div
      className="bg-[#000000] mx-[10px] w-[100%] flex-col items-center justify-center"
      ref={scrollRef}
    >
      <div className={`grid gap-4 grid-cols-4 items-center  justify-center`}>
        {data?.pages.map((page) =>
          page.results.map((movie: IMovieData) => (
            <Card
              id={movie.id}
              key={movie.id}
              data={movie}
              movies={page}
              onBecameFocused={onProgramFocused}
              focusKey={`movie-${movie.id}`}
              onEnterPress={() => {
                alert(movie.id);
              }}
            />
          ))
        )}
      </div>

      {hasNextPage && (
        <div className="w-[100%] justify-center items-center flex bg-[#000000]">
          <Button
            onEnterPress={({ setFocus }: setFocus) => {
              fetchNextPage();
              setFocus(`movie-${moviesId}`);
              isFetchingNextPage;
            }}
          />
        </div>
      )}
    </div>
  );
}

export default withFocusable({ trackChildren: true })(Movies);
