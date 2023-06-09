import React, { useEffect } from 'react';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';

//Interface
interface IMenuItem {
  data: {
    id: number;
    title: string;
  };
  setFocus: (focus: string) => void;
  focused: boolean;
}

function MenuItem({ data, setFocus, focused }: IMenuItem) {
  //Initial setting focus
  useEffect(() => {
    setFocus('item-1');
  }, [setFocus]);

  return (
    <div
      className={`my-3 ${
        focused ? 'text-[white]' : 'text-[grey]'
      } cursor-default`}
    >
      {data.title}
    </div>
  );
}

export default withFocusable()(MenuItem);
