import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import nutritionpic3 from "../../assets/nutritionpic3.avif";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { isLoading, error, handleLogin } = useLogin();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    await handleLogin(values.email, values.password);
    resetForm();
    setSubmitting(false);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-100 via-orange-200 to-orange-300"
      // style={{
      //   backgroundImage: `url(${nutritionpic3})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      {/* Orange overlay */}
      <div
        className="absolute inset-0 bg-orange-300"
        style={{
          opacity: 0.4, // Adjust overlay intensity here
        }}
      ></div>

      {/* Login box */}
      <div
        className="relative w-full max-w-md p-8 rounded-lg shadow-lg"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <h2 className="text-3xl font-bold text-orange-600 text-center">
          Welcome Back
        </h2>
        <p className="text-gray-800 text-center mb-6">
          Login to your account to continue
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Email Address
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 mt-1 bg-transparent text-white border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Password
                </label>
                <Field
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 mt-1 bg-transparent text-white border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                  aria-label="Password"
                />
                <div
                  className="absolute top-9 right-3 text-gray-800 cursor-pointer "
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

              <button
                type="submit"
                className={`w-full px-4 py-2 text-white rounded-md ${
                  isSubmitting || isLoading
                    ? "bg-orange-400 cursor-not-allowed"
                    : "bg-orange-600 hover:bg-orange-700 active:scale-95"
                } focus:outline-none focus:ring-2 focus:ring-orange-400`}
                disabled={isSubmitting || isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>

              {error && (
                <p className="text-red-500 text-center mt-2">{error}</p>
              )}
            </Form>
          )}
        </Formik>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-800">
            Don’t have an account?{" "}
            <Link to="/auth/signup">
              <button className="text-orange-400 font-semibold hover:underline">
                Sign Up
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
