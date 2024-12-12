import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import AuthService from "../services/AuthService";

const useEmailVerify = () => {
  const [loading, setLoading] = useState(false);
  const { setAccessToken, setUserInfo } = useAuthContext();
  const navigate = useNavigate();

  const verifyOtp = async (otp) => {
    setLoading(true);

    try {
      const response = await AuthService.verifyEmail({ otp });
      console.log(response);

      if (response.status !== 200) {
        throw new Error(response.data.message);
      }

      const data = response.data;

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
