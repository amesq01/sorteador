
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

import { useLocalStorage } from 'react-use';

import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';



type IProviderProps = {
  user: any,
  signIn: (email: string, password: string) => void,
  logout: () => void,
}


const UserContext = createContext<IProviderProps>({} as any);


export const UserContextProvider = ({ children }: any) => {



  const [user, setUser] = useLocalStorage('teste', null as any);

  function signIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
      console.log('intoUserEffectContext ', currentUser);
      setUser(currentUser);
    });
    return ()=> unsubscribe();
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
