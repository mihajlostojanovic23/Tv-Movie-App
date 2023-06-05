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
      className={`${
        focused ? ' border-sky-500' : ' border-transparent'
      } text-3xl border-2 text-[white] `}
    >
      {isFetchingNextPage ? 'Loading...' : 'Load more'}
    </div>
  );
}

export default withFocusable({ trackChildren: true })(Button);
