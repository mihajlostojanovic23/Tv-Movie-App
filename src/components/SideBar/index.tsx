import React, { useContext } from 'react';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';

import { MenuData } from '../../data/MenuData';
import MenuItem from './SideBarItem';
import UserContext from '../../context/userContext';
import { useHistory } from 'react-router-dom';

interface ISideBar {
  hasFocusedChild: boolean;
}

//Todo rename alert in something logic
//Todo move Sidebar to layout folder

function SideBar({ hasFocusedChild }: ISideBar) {
  const history = useHistory();
  const { userAuth } = useContext(UserContext);
  const Alert = (route: string) => history.push(`${route}`);
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
            item.userAuth === userAuth && (
              <MenuItem
                key={item.id}
                data={item}
                focusKey={`item-${item.id}`}
                onEnterPress={() => Alert(item.route)}
              />
            )
        )}
      </div>
    </div>
  );
}

export default withFocusable({ trackChildren: true })(SideBar);
