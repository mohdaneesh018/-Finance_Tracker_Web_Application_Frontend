import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/send-signup-otp", {
        email: formData.email,
      });

      toast.success(res.data.message);

      localStorage.setItem("signupData", JSON.stringify(formData));

      navigate("/verify-otp");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
          Sign Up
        </h1>

        <form onSubmit={handleSendOtp} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-green-400"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            Send OTP
          </button>
        </form>

        <div className="text-center mt-4 text-sm">
          <span>Already have an account? </span>
          <Link to="/" className="text-green-700 font-semibold hover:underline">
            Signin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;