import React, { useContext } from 'react';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';

import { useHistory } from 'react-router-dom';
import UserContext from '../../../../context/userContext';
import { MenuData } from '../../../../data/MenuData';
import MenuItem from './SideBarItem/';
interface ISideBar {
  hasFocusedChild: boolean;
}

function SideBar({ hasFocusedChild }: ISideBar) {
  const history = useHistory();
  const { userAuth } = useContext(UserContext);
  const ShowId = (route: string) => history.push(`${route}`);
  return (
    <div
      className={` bg-[#000000] h-[100vh] flex justify-center pt-[10px] ${
        hasFocusedChild
          ? 'w-[300px] transition-all duration-500 ease-in-out '
          : 'w-[200px] transition-all duration-500 ease-in-out '
      }`}
    >
      <div className="flex justify-center flex-col items-center">
        {MenuData.map(
          (item) =>
            userAuth && (
              <MenuItem
                key={item.id}
                data={item}
                focusKey={`item-${item.id}`}
                onEnterPress={() => ShowId(item.route)}
              />
            )
        )}
      </div>
    </div>
  );
}

export default withFocusable({ trackChildren: true })(SideBar);
