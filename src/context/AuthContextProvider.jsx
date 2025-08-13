import { useEffect, useState } from "react";
import { AuthContext } from ".";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebaseConfiq";
import Loading from "../components/loading/Loading";

const AuthContextProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);
  const [authError, setAuthError] = useState(null);
  const [loading, setLoading] = useState(true);

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

  // google signOut function
  async function googleSignOut() {
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
        setAuthData(user);
        setLoading(false);
      } else {
        setAuthData();
        setLoading(false);
      }
    });
  }, []);

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
          googleSignOut,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContextProvider;
