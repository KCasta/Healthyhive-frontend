import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useEmailVerify = () => {
  const [loading, setLoading] = useState(false);
  const { setAccessToken, setUserInfo } = useAuthContext();
  const navigate = useNavigate();

  const verifyOtp = async (otp) => {
    setLoading(true);
    const verificationToken = sessionStorage.getItem("verificationToken");
    try {
      // Make a request to the backend to verify the otp
      const response = await fetch("/api/v1/auth/verify-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${verificationToken ? verificationToken : ""}`,
        },
        body: JSON.stringify({ otp }),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }
      const data = await response.json();

      sessionStorage.removeItem("verificationToken");

      // Save the access token in the local storage
      localStorage.setItem("accessToken", data.accessToken);
      // Save the access token in the context
      setAccessToken(data.accessToken);

      // Save the user info in the local storage
      localStorage.setItem("userInfo", JSON.stringify(data.userInfo));
      // Save the user info in the context
      setUserInfo(data.userInfo);

      toast.success("Email verified successfully");

      // Redirect the user to the dashboard
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { verifyOtp, loading };
};

export { useEmailVerify };
