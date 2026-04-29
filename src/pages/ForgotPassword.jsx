import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleForgot = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/forgot-password", { email });

      toast.success(res.data.message);

      navigate("/verify-otp");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
          Forgot Password
        </h1>

        <form onSubmit={handleForgot} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-red-400"
          />

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
          >
            Send OTP
          </button>
        </form>

        <div className="text-center mt-4 text-sm">
          <Link to="/" className="text-red-500 hover:underline">
            Back to Signin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;