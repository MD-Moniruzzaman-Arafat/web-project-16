import { useState } from "react";
import { AuthContext } from ".";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebaseConfiq";

const AuthContextProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);
  const [authError, setAuthError] = useState(null);

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

  return (
    <>
      <AuthContext.Provider
        value={{
          authData,
          setAuthData,
          authError,
          setAuthError,
          googleSignIn,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContextProvider;
