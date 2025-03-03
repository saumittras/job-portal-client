import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
// import createUserWithEmailAndPassword from "firebase/auth";
import auth from "../../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // for creating an User by email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // for login with email and password
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user log Out
  const userSignut = () => {
    setLoading(true);
    return signOut(auth);
  };
  //signin with google popup
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Sate capture", currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  //AuthContex variable
  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    userSignut,
    signInWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
