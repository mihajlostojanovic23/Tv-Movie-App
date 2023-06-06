import React from 'react';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';

//Interface
interface IButton {
  focused: boolean;
  isFetchingNextPage: boolean;
}

function Button({ focused, isFetchingNextPage }: IButton) {
  return (
    <div
      className={`w-[300px] h-[70px] flex justify-center items-center${
        focused
          ? ' border-white-500 bg-[#414141]'
          : ' border-transparent bg-[#1b1b1b]'
      } text-3xl border-2 text-[white] `}
    >
      {isFetchingNextPage ? 'Loading...' : 'Load more'}
    </div>
  );
}

export default withFocusable({ trackChildren: true })(Button);
