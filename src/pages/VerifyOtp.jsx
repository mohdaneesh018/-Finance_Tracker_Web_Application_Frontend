import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import toast from "react-hot-toast";

const VerifyOtp = () => {
  const navigate = useNavigate();

  const signupData = JSON.parse(localStorage.getItem("signupData"));

  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      if (signupData) {
        await API.post("/auth/verify-otp", {
          email: formData.email,
          otp: formData.otp,
          newPassword: formData.newPassword,
        });

        const res = await API.post("/auth/signup", signupData);

        toast.success(res.data.message);

        localStorage.removeItem("signupData");

        navigate("/");
      } else {
        const res = await API.post("/auth/verify-otp", formData);

        toast.success(res.data.message);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-purple-600 mb-6">
          Verify OTP
        </h1>

        <form onSubmit={handleVerify} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="otp"
            placeholder="Enter OTP"
            value={formData.otp}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            name="newPassword"
            placeholder="Enter New Password"
            value={formData.newPassword}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700">
            Verify OTP
          </button>
        </form>

        <div className="text-center mt-4 text-sm">
          <Link to="/" className="text-purple-500 hover:underline">
            Back to Signin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;