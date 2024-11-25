import { useState } from "react";
import toast from "react-hot-toast";
//import useNavigate to naviagte to verify email page on signup success
import { useNavigate } from "react-router-dom";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signUp = async (values) => {
    //set loading to true to show loading spinner
    setLoading(true);
    try {
      // make API call to sign up user
      const response = await fetch("/api/v1/auth/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      const data = await response.json();
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
