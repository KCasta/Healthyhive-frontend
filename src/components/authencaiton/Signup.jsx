import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useSignUp from "../../hooks/useSignUp";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  // Validation Schema
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
    gender: Yup.string().required("Gender is required"),
  });

  // Initial Values
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  };

  // Call the signUp function from the useSignUp hook
  const { signUp, loading } = useSignUp();

  const handleSubmit = (values) => {
    console.log(values);
    signUp(values);
    // Handle form submission logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-100 via-orange-200 to-orange-300">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-orange-600 text-center">
          Sign Up
        </h1>
        <p className="text-gray-500 text-center mb-6">
          Register with your valid email address
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          // handleSubmit function is called when the form is submitted
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-4">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullname"
                  className="text-sm font-semibold text-gray-600"
                >
                  Full Name
                </label>
                <Field
                  type="text"
                  id="fullname"
                  name="fullName"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
                <ErrorMessage
                  name="fullName"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-600"
                >
                  Email Address
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-600"
                >
                  Password
                </label>
                <Field
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
                <div
                  className="absolute top-10 right-3 text-gray-500 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <label
                  htmlFor="confirmPassword"
                  className="text-sm font-semibold text-gray-600"
                >
                  Confirm Password
                </label>
                <Field
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
                <div
                  className="absolute top-10 right-3 text-gray-500 cursor-pointer"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
                <ErrorMessage
                  name="confirmPassword"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Gender */}
              <div>
                <label
                  htmlFor="gender"
                  className="text-sm font-semibold text-gray-600"
                >
                  Gender
                </label>
                <Field
                  as="select"
                  id="gender"
                  name="gender"
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                >
                  <option value="" disabled>
                    Select your gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Field>
                <ErrorMessage
                  name="gender"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              {/* <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
              >
                Sign Up
              </button> */}

              <button
                type="submit"
                className={` w-full px-4 py-2 text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-30 ${
                  loading ? "bg-slate-300" : "bg-orange-600 hover:bg-orange-700"
                } `}
                disabled={loading}
              >
                <span>
                  {loading ? <ClipLoader color="black" size={30} /> : "Sign up"}
                </span>
              </button>
            </Form>
          )}
        </Formik>

        {/* Already have an account section */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/auth/signin">
              <button className="text-orange-600 font-semibold hover:underline">
                Login
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
