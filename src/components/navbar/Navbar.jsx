import logo from "../../assets/navbar/Logo.png";
import Menu from "./Menu";
import bg from "../../assets/navbar/Abstract Design.png";
import { Link } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../context";

const Navbar = () => {
  const { authData, googleSignOut, setAuthError } = useContext(AuthContext);

  async function handleGoogleSignOut() {
    try {
      await googleSignOut();
    } catch (error) {
      setAuthError(error);
    }
  }

  return (
    <>
      <div
        className="text-center text-white bg-[#1A1A1A] py-1"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <p className="text-xs px-0.5">
          ✨Discover Your Dream Property with Estatein{" "}
          <span className="border-b-1">Learn More</span>
        </p>
      </div>
      <div className="bg-[#1A1A1A] text-white">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm bg-[#1A1A1A] dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <Menu />
              </ul>
            </div>
            <a className="text-xl cursor-pointer">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <Menu />
            </ul>
          </div>
          <div className="navbar-end gap-2">
            {authData ? (
              <>
                <div
                  className="tooltip avatar avatar-placeholder"
                  data-tip={`${authData?.displayName}`}
                >
                  <div className="bg-neutral text-neutral-content w-8 rounded-full">
                    <img src={authData?.photoURL} alt="" />
                  </div>
                </div>
                <Link
                  onClick={handleGoogleSignOut}
                  className="py-1 px-5 bg-white text-black rounded-xs"
                >
                  Logout
                </Link>
              </>
            ) : (
              <Link
                to={"/login"}
                className="py-1 px-5 bg-white text-black rounded-xs"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
