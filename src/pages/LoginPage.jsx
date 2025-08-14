import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { AuthContext } from "../context";

const LoginPage = () => {
  const { authError, setAuthError, googleSignIn, setIsRegister } =
    useContext(AuthContext);

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
          <form action="">
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-white">Email</legend>
              <input
                type="email"
                className="w-full input text-black"
                placeholder="write valid email"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-white">Password</legend>
              <input
                type="password"
                className="w-full input text-black"
                placeholder="write valid password"
              />
            </fieldset>
          </form>
          <div className="text-center">
            <button className="btn my-3 w-full bg-black text-white border-none shadow-none">
              Login
            </button>
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
