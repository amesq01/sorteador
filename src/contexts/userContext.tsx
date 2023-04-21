
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

import { useLocalStorage } from 'react-use';

import { auth } from '../utils/firebase';



type IProvider = {
  children: ReactNode,
  user: any,
  signIn: () => void,
  logout: () => void,
}


const UserContext = createContext({} as any);


export const UserContextProvider = ({ children }: any) => {

  const [user, setUser] = useState(null);

  function signIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
      console.log('testando unsubs', currentUser);
      setUser(currentUser);
    });
    return () => { unsubscribe(); };
  }, []);


  return (
    <UserContext.Provider value={{ user, signIn, logout }}>
      {children}
    </UserContext.Provider>
  );
};



export function authUser() {
  return useContext(UserContext);
}
