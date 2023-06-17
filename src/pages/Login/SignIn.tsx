import React from "react";
import { Link } from "react-router-dom";
import FormInput from "../../components/FormControl/FormInput";
import FormButton from "../../components/FormControl/FormButton";

const SignIn = () => {
  return (
    <div className="login-container w-full flex justify-center py-36 min-h-screen">
      <form className="w-4/12 rounded-lg bg-slate-100">
        <div className="text-center py-5">
          <span className="text-5xl font-semibold text-[#51596a]">Log In</span>
        </div>
        <div className="flex justify-center my-5">
          <FormInput type="email" name="email" placeholder="Email..." />
        </div>
        <div className="flex justify-center my-5">
          <FormInput
            type="password"
            name="password"
            placeholder="Password..."
          />
        </div>
        <div className="flex justify-center mt-5">
          <FormButton
            className="p-3 rounded-lg w-6/12 bg-violet-800 text-white"
            title="Log In"
          />
        </div>
        <div className="flex justify-center my-5">
          <span>
            Not registered yet?{" "}
            <Link
              to={"/signup"}
              className="link-primary text-gray-600 font-medium"
            >
              Sign Up
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
