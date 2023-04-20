
import { ReactNode, createContext, useContext, useState } from 'react';

interface IProvider {
  children: ReactNode;
}

export interface userProps {
  name: string;
  age: number;
  eyesColor: string;
}

const UserContext = createContext({} as any);


export const UserContextProvider = ({ children }: any) => {

  const user: userProps = {
    name: 'Adailton',
    age: 36,
    eyesColor: 'greeen'
  };
  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};



export function authUser() {
  return useContext(UserContext);
}
