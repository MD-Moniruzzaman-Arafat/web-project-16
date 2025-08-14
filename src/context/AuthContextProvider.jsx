import { useEffect, useState } from "react";
import { AuthContext } from ".";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebaseConfiq";
import Loading from "../components/loading/Loading";

const AuthContextProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);
  const [authError, setAuthError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isRegister, setIsRegister] = useState(true);

  // provider
  const googleAuthProvider = new GoogleAuthProvider();

  // google signIn function
  async function googleSignIn() {
    try {
      const response = await signInWithPopup(auth, googleAuthProvider);
      return response;
    } catch (error) {
      return error;
    }
  }

  // create user with email and password
  async function createUser(name, email, photoUrl, password) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const response = await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoUrl,
      });
      return response;
    } catch (error) {
      return error;
    }
  }

  // sign in using email and password function
  async function signinUsingEmailAndPassword(email, password) {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      return response;
    } catch (error) {
      return error;
    }
  }

  // google signOut function
  async function signOutUser() {
    try {
      const response = await signOut(auth);
      return response;
    } catch (error) {
      return error;
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (!isRegister) {
          setAuthData(user);
          console.log(user);
          setLoading(false);
        }
        setLoading(false);
      } else {
        setAuthData();
        setLoading(false);
      }
    });
  }, [isRegister]);

  if (loading) return <Loading />;

  return (
    <>
      <AuthContext.Provider
        value={{
          authData,
          setAuthData,
          authError,
          setAuthError,
          googleSignIn,
          createUser,
          signOutUser,
          setIsRegister,
          signinUsingEmailAndPassword,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContextProvider;
