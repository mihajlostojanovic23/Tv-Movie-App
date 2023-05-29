import { createContext, Dispatch, SetStateAction, useState } from "react";

// Interface
interface IDataValueContext {
  userInfo: {};
  setUserInfo: Dispatch<SetStateAction<object>>;
}

const UserContext = createContext<IDataValueContext>({
  userInfo: {},
  setUserInfo: () => {},
});

export const UserProvider = ({ children }: any) => {
  const [userInfo, setUserInfo] = useState({});

  return (
    <div>
      <UserContext.Provider value={{ userInfo, setUserInfo}}>
        {children}
      </UserContext.Provider>
    </div>
  );
};

export default UserContext;