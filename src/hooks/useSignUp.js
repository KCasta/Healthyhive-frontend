import { useState } from "react";
import toast from "react-hot-toast";
//import useNavigate to naviagte to verify email page on signup success
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signUp = async (values) => {
    //set loading to true to show loading spinner
    setLoading(true);
    try {
      // make API call to sign up user
      const response = await AuthService.register(values);

      if (response.status !== 200) {
        console.log(response);
        throw new Error(response.data.message);
      }
      const data = response.data;

      console.log(data);
      //store the verification token in session storage
      sessionStorage.setItem("verificationToken", data.verificationToken);

      toast.success(`Verification email sent to ${values.email}`);
      navigate("/auth/verify-email");
      //set loading to false to hide loading spinner
      setLoading(false);
    } catch (err) {
      toast.error(err.message);
    } finally {
      //set loading to false to hide loading spinner
      setLoading(false);
    }
  };
  return { signUp, loading };
};
export default useSignUp;
