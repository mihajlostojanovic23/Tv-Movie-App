import React from 'react';
import { createContext, Dispatch, SetStateAction, useState } from 'react';

// Interface
interface IDataValueContext {
  userInfo: object;
  setUserInfo: Dispatch<SetStateAction<object>>;
}

interface UserProviderProps {
  children: React.ReactNode;
}

const UserContext = createContext<IDataValueContext>({
  userInfo: {},
  setUserInfo: () => null,
});

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userInfo, setUserInfo] = useState({});

  return (
    <div>
      <UserContext.Provider value={{ userInfo, setUserInfo }}>
        {children}
      </UserContext.Provider>
    </div>
  );
};

export default UserContext;
