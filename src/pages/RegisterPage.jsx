import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { AuthContext } from "../context";

const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    photoUrl: "",
    password: "",
  });

  const { createUser, setAuthError, setIsRegister } = useContext(AuthContext);

  // handleChange function
  function handleChange(e) {
    const { name, value } = e.target;
    console.log(e.target.value);
    setRegisterData({ ...registerData, [name]: value });
  }

  // handleSubmit function
  async function handleSubmit(e) {
    e.preventDefault();

    setIsRegister(true);

    try {
      const result = await createUser(
        registerData.name,
        registerData.email,
        registerData.photoUrl,
        registerData.password
      );
      console.log(result.user);
    } catch (error) {
      setAuthError(error);
    }
  }

  return (
    <>
      <div className="container mx-auto min-h-screen flex justify-center items-center text-white">
        <div className="lg:min-w-xl bg-[#1A1A1A] rounded-lg p-10 my-10">
          <h1 className="font-bold text-center text-2xl">Register Page</h1>
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-white">Name</legend>
              <input
                name="name"
                onChange={handleChange}
                value={registerData.name}
                type="text"
                className="w-full input text-black"
                placeholder="write valid name"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-white">Email</legend>
              <input
                name="email"
                onChange={handleChange}
                value={registerData.email}
                type="email"
                className="w-full input text-black"
                placeholder="write valid email"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-white">PhotoURL</legend>
              <input
                name="photoUrl"
                onChange={handleChange}
                value={registerData.photoUrl}
                type="text"
                className="w-full input text-black"
                placeholder="write valid photoUrl"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-white">Password</legend>
              <input
                name="password"
                onChange={handleChange}
                value={registerData.password}
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
            <button className="btn my-3 rounded-full w-10 p-0 text-center bg-black text-white border-none shadow-none">
              <FcGoogle />
            </button>
          </div>
          <p className="text-center">
            <small>
              have an account{" "}
              <Link to={"/login"} className="text-warning border-b-1" href="">
                Login
              </Link>
            </small>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
