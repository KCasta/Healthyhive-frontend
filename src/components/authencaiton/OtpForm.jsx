import { useState } from "react";
import OTPInput from "react-otp-input";
import { ClipLoader } from "react-spinners";
import { useEmailVerify } from "../../hooks/useEmailVerify";

const OTPPage = () => {
  const [otp, setOtp] = useState(""); // OTP state
  const { verifyOtp, loading } = useEmailVerify();

  const handleChange = (otpValue) => {
    setOtp(otpValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyOtp(otp);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-100 via-orange-200 to-orange-300">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-orange-600 text-center">
          OTP Verification
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Enter the 6-digit code sent to your email or phone
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* OTP Input */}
          <div className="flex justify-center">
            <OTPInput
              renderInput={(props) => <input {...props} />}
              value={otp}
              onChange={handleChange}
              numInputs={6}
              separator={<span className="mx-2">-</span>}
              inputStyle={{
                width: "2.5rem",
                height: "2.5rem",
                margin: "0 0.5rem",
                fontSize: "1.5rem",
                borderRadius: "0.375rem",
                border: "1px solid #d1d5db",
                outline: "none",
                textAlign: "center",
              }}
              focusStyle={{
                border: "2px solid #fb923c",
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={otp.length !== 6 || loading}
            className={`w-full px-4 py-2 text-white ${
              otp.length === 6 && !loading
                ? "bg-orange-600 hover:bg-orange-700"
                : "bg-orange-300 cursor-not-allowed"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300`}
          >
            {loading ? <ClipLoader color="#ffffff" size={20} /> : "Verify OTP"}
          </button>
        </form>

        {/* Didn't receive the OTP? */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            {`Didn't receive the OTP?`}
            <button className="text-orange-600 font-semibold hover:underline">
              Resend
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OTPPage;
