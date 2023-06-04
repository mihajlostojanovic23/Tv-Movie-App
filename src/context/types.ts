import { Dispatch, SetStateAction } from "react";

export interface IDataValueContext {
    userInfo: object;
    setUserInfo: Dispatch<SetStateAction<object>>;
    userAuth: boolean;
    setUserAuth: Dispatch<SetStateAction<boolean>>;
  }
  
  export  interface UserProviderProps {
    children: React.ReactNode;
  }