import React, { useContext } from 'react';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';

import { MenuData } from '../../data/MenuData';
import MenuItem from './SideBarItem';
import UserContext from '../../context/userContext';

function SideBar() {
  const { userAuth } = useContext(UserContext);
  const Alert = (title: string) => {
    alert(title);
  };
  return (
    <div className=" w-[300px] fixed bg-[#000000] h-[100vh] flex justify-center pt-[10px]">
      <div className="flex justify-center flex-col items-center">
        {MenuData.map(
          (item) =>
            item.userAuth === userAuth && (
              <MenuItem
                key={item.id}
                data={item}
                focusKey={`item-${item.id}`}
                onEnterPress={() => Alert(item.title)}
              />
            )
        )}
      </div>
    </div>
  );
}

export default withFocusable({})(SideBar);
