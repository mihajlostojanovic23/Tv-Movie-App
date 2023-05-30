import React from 'react';
import { createContext, Dispatch, SetStateAction, useState } from 'react';

// Interface
interface IDataValueContext {
  userInfo: object;
  setUserInfo: Dispatch<SetStateAction<object>>;
  userAuth: boolean;
  setUserAuth: Dispatch<SetStateAction<boolean>>;
}

interface UserProviderProps {
  children: React.ReactNode;
}

const UserContext = createContext<IDataValueContext>({
  userInfo: {},
  setUserInfo: () => null,
  userAuth: false,
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
