import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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

      if (response.ok) {
        if (data.verificationToken) {
          setError("Please verify your email address first.");
          // Handle sending the verification token to the user
        } else {
          // Save the access token in local storage
          localStorage.setItem("accessToken", data.accessToken);

          // Navigate to the dashboard
          navigate("/dashboard");
        }
      } else {
        setError(data.message || "Invalid credentials. Please try again.");
      }
    } catch (err) {
      setError("An error occurred during login. Please try again.");
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
