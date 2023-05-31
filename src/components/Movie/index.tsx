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

function Movie({ data, focused }: IMovie) {
  return (
    <div className="h-[330px] transition-all duration-500 ease-in-out">
      <img
        className={`${
          focused ? 'border-4 border-sky-500' : 'border-4 border-transparent'
        }`}
        src={getImageUrl(data.backdrop_path)}
      />
      <span className={` text-[white] justify-center flex text-[20px] py-2 `}>
        {data.original_title}
      </span>
    </div>
  );
}

export default withFocusable({
  trackChildren: true,
})(Movie);
