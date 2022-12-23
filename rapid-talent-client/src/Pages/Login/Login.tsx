import React from "react";
import LoginBanner from "../../assets/LoginPageBanner/login_img.jpg";

const Login = () => {
  // login handler
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target;
    // const name : string = form.email.value;
    console.log(form);
  };
  return (
    <div>
      <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
        <div className="flex shadow-md">
          <div
            className="flex flex-wrap content-center justify-center rounded-l-md bg-white"
            style={{ width: "24rem", height: "32rem" }}
          >
            <div className="w-72">
              <h1 className="text-xl font-semibold">Welcome back</h1>
              <small className="text-gray-400">
                Welcome back! Please enter your details
              </small>
              <form onSubmit={handleLogin} className="mt-4">
                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="block w-full rounded-md border border-gray-300 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 py-1 px-1.5 text-gray-500"
                  />
                </div>

                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="*****"
                    className="block w-full rounded-md border border-gray-300 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 py-1 px-1.5 text-gray-500"
                  />
                </div>

                <div className="mb-3 flex flex-wrap content-center">
                  <a href="#" className="text-xs font-semibold text-sky-500">
                    Forgot password?
                  </a>
                </div>

                <div className="mb-3">
                  <button
                    type="submit"
                    className="mb-1.5 block w-full text-center text-white bg-sky-500 hover:bg-sky-600 px-2 py-1.5 rounded-md"
                  >
                    Sign in
                  </button>
                  <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
                    <img
                      className="w-5 mr-2"
                      src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                    />
                    Sign in with Google
                  </button>
                </div>
              </form>
              <div className="text-center">
                <span className="text-xs text-gray-400 font-semibold">
                  Don't have account?
                </span>
                <a href="#" className="text-xs font-semibold text-sky-500">
                  Sign up
                </a>
              </div>
            </div>
          </div>
          <div
            className="flex flex-wrap content-center justify-center rounded-r-md"
            style={{ width: "24rem", height: "32rem" }}
          >
            <img
              className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
              src={LoginBanner}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
