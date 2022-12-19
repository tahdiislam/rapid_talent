import React, { createContext, useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const UserContext = createContext({});
const auth = getAuth(app);

type childrenType = {
  children: React.ReactNode;
};

type User = {
  displayName: string;
  uid: string;
};

const AuthProvider = ({ children }: childrenType) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // create user with email and password
  const createNewUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // create user with provider
  //   const createUserWithProvider = (provider) => {
  //     setLoading(true);
  //     return signInWithPopup(auth, );
  //   };

  const authInfo = {
    user,
  };
  return (
    <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
  );
};

export default AuthProvider;
