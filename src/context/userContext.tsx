import React from 'react';
import { createContext, useState } from 'react';

//Interfaces
import {IDataValueContext, UserProviderProps} from './types'

const UserContext = createContext<IDataValueContext>({
  userInfo: {},
  setUserInfo: () => null,
  userAuth: true,
  setUserAuth: () => null,
});

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userInfo, setUserInfo] = useState({});
  const [userAuth, setUserAuth] = useState(true);

  return (
    <div>
      <UserContext.Provider
        value={{ userInfo, setUserInfo, userAuth, setUserAuth }}
      >
        {children}
      </UserContext.Provider>
    </div>
  );
};

export default UserContext;
