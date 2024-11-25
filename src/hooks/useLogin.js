import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { setAccessToken, setUserInfo } = useAuthContext();

  const navigate = useNavigate(); // For programmatic navigation

  const handleLogin = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/v1/auth/login-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "An error occurred. Please try again.");
      }

      if (data.verificationToken) {
        // Save the verification token in session storage
        sessionStorage.setItem("verificationToken", data.verificationToken);
        // Navigate to the email verification page
        toast.success("Please verify your email to continue");
        navigate("/auth/verify-email");
        // Handle sending the verification token to the user
      } else {
        // Save the access token in local storage
        localStorage.setItem("accessToken", data.accessToken);
        setAccessToken(data.accessToken);

        // Save the user info in local storage
        localStorage.setItem("userInfo", JSON.stringify(data.userInfo));
        setUserInfo(data.userInfo);

        toast.success("Login successful");

        // Navigate to the dashboard
        navigate("/dashboard");
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    error,
    handleLogin,
  };
};

export default useLogin;
