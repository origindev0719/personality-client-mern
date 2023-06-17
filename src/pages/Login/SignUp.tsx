import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import FormInput from "../../components/FormControl/FormInput";
import FormButton from "../../components/FormControl/FormButton";

interface FormValue {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const validate = (values: FormValue): Partial<FormValue> => {
    const errors: Partial<FormValue> = {};
    if (!values.password) {
      errors.password = "Password is Required";
    } else if (values.password.length < 7) {
      errors.password = "Must be greater than 6 characters";
    }

    if (!values.email) {
      errors.email = "Email is Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="w-full flex justify-center min-h-screen bg-[#51596a]">
      <form
        className="w-4/12 rounded-lg bg-slate-100 my-36"
        onSubmit={formik.handleSubmit}
      >
        <div className="text-center py-5">
          <span className="text-5xl font-semibold text-[#51596a]">Sign Up</span>
        </div>
        <div className="flex justify-center my-5">
          <FormInput
            type="type"
            name="email"
            placeholder="Email..."
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        {formik.errors.email ? (
          <div className=" text-pink-800 mt-primary px-5">
            {formik.errors.email}
          </div>
        ) : null}
        <div className="flex justify-center my-5">
          <FormInput
            type="password"
            name="password"
            placeholder="Password..."
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        {formik.errors.password ? (
          <div className=" text-pink-800 mt-primary px-5">
            {formik.errors.password}
          </div>
        ) : null}
        <div className="flex justify-center mt-5">
          <FormButton
            className="p-3 rounded-lg w-6/12 bg-violet-800 text-white"
            title="Sign Up"
          />
        </div>
        <div className="flex justify-center my-5">
          <span>
            Not registered yet?{" "}
            <Link to={"/"} className="link-primary text-gray-600 font-medium">
              Sign In
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
