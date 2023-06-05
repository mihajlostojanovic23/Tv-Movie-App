import React from 'react';
import { getImageUrl } from '../../api/axiosInstance';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import NotFound from '../../assets/img/notfound.jpg';
//Interface
interface ICard {
  data: {
    id: number;
    backdrop_path: string;
    original_title: string;
  };
  setFocus: (focus: string) => void;
  focused: boolean;
}

function Card({ data, focused }: ICard) {
  return (
    <div className="h-[330px] transition-all duration-500 ease-in-out">
      <img
        width={400}
        height={225}
        className={`${
          focused ? 'border-4 border-sky-500' : 'border-4 border-transparent'
        }`}
        src={
          data.backdrop_path !== null
            ? getImageUrl(data.backdrop_path)
            : NotFound
        }
      />
      <span className={` text-[white] justify-center flex text-[20px] py-2 `}>
        {data.original_title}
      </span>
    </div>
  );
}

export default withFocusable({
  trackChildren: true,
})(Card);
