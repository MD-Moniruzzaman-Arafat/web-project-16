import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { AuthContext } from "../context";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const {
    authError,
    setAuthError,
    googleSignIn,
    setIsRegister,
    signinUsingEmailAndPassword,
  } = useContext(AuthContext);

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  }

  async function handleSignInUsingEmailPassword(e) {
    e.preventDefault();

    setIsRegister(false);
    try {
      await signinUsingEmailAndPassword(loginData.email, loginData.password);
    } catch (error) {
      setAuthError(error);
    }
  }

  async function handleGoogleSignIn() {
    setIsRegister(false);
    try {
      await googleSignIn();
    } catch (error) {
      setAuthError(error);
    }
  }
  return (
    <>
      <div className="container mx-auto min-h-screen flex justify-center items-center text-white">
        <div className="lg:min-w-xl bg-[#1A1A1A] rounded-lg p-10 my-10">
          <h1 className="font-bold text-center text-2xl">Login Page</h1>
          <form onSubmit={handleSignInUsingEmailPassword}>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-white">Email</legend>
              <input
                name="email"
                onChange={handleChange}
                value={loginData.email}
                type="email"
                className="w-full input text-black"
                placeholder="write valid email"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-white">Password</legend>
              <input
                name="password"
                onChange={handleChange}
                value={loginData.password}
                type="password"
                className="w-full input text-black"
                placeholder="write valid password"
              />
            </fieldset>
            <button className="btn my-3 w-full bg-black text-white border-none shadow-none">
              Login
            </button>
          </form>
          <div className="text-center">
            <button
              onClick={handleGoogleSignIn}
              className="btn my-3 rounded-full w-10 p-0 text-center bg-black text-white border-none shadow-none"
            >
              <FcGoogle />
            </button>
          </div>
          <p className="text-center">
            <small>
              Don't have an account{" "}
              <Link
                to={"/register"}
                className="text-warning border-b-1"
                href=""
              >
                Register
              </Link>
            </small>
          </p>
          {authError}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
