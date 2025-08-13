const LoginPage = () => {
  return (
    <>
      <div className="container mx-auto min-h-screen flex justify-center items-center text-white">
        <div className="lg:min-w-xl bg-[#1A1A1A] rounded-lg p-10">
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
            <button className="btn my-3 w-full bg-black text-white border-none shadow-none">
              Login
            </button>
          </form>
          <p className="text-center">
            <small>
              Don't have an account{" "}
              <a className="text-warning border-b-1" href="">
                Register
              </a>
            </small>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
