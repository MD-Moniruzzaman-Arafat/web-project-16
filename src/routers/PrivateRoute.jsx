import { useContext } from "react";
import { AuthContext } from "../context";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { authData } = useContext(AuthContext);
  const location = useLocation();
  return (
    <>
      {authData ? (
        children
      ) : (
        <Navigate to={"/login"} state={location} replace />
      )}
    </>
  );
};

export default PrivateRoute;
