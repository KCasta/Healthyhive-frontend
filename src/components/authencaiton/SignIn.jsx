import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { isLoading, error, handleLogin } = useLogin();

  // Toggle password visibility
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  // Validation Schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  // Initial form values
  const initialValues = {
    email: "",
    password: "",
  };

  // Submit handler
  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    // Call the handleLogin function from the useLogin hook
    await handleLogin(values.email, values.password);

    // Reset the form upon successful login
    resetForm();
    setSubmitting(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-100 via-orange-200 to-orange-300">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-orange-600 text-center">
          Login
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Enter your credentials to login
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              {/* Email Field */}
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

              {/* Password Field */}
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

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full px-4 py-2 text-white rounded-md ${
                  isSubmitting || isLoading
                    ? "bg-orange-400 cursor-not-allowed"
                    : "bg-orange-600 hover:bg-orange-700"
                } focus:outline-none focus:ring-2 focus:ring-orange-300`}
                disabled={isSubmitting || isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>

              {/* Error Message */}
              {error && (
                <p className="text-red-500 text-center mt-2">{error}</p>
              )}
            </Form>
          )}
        </Formik>

        {/* Don’t have an account */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link to="/auth/signup">
              <button className="text-orange-600 font-semibold hover:underline">
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
