import React from 'react';
import { getImageUrl } from '../../api/services/apiService';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';

interface IMovie {
  data: {
    id: number;
    backdrop_path: string;
    original_title: string;
  };
  setFocus: (focus: string) => void;
  focused: boolean;
}

function Movie({ data, setFocus, focused }: IMovie) {
  return (
    <div>
      <img height={300} src={getImageUrl(data.backdrop_path)} />
      <span
        className={`${
          focused ? 'text-[red]' : 'text-[white]'
        } justify-center flex text-[20px] py-2`}
      >
        {data.original_title}
      </span>
    </div>
  );
}

export default withFocusable()(Movie);
