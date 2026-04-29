import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import toast from "react-hot-toast";

const Signin = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSignin = async (e) => {
        e.preventDefault();

        try {
            const res = await API.post("/auth/signin", formData);

            localStorage.setItem("token", res.data.token);

            toast.success(res.data.message);

            navigate("/home");
        } catch (error) {
            toast.error(error.response?.data?.message || "Signin failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
                    Sign In
                </h1>

                <form onSubmit={handleSignin} className="space-y-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Sign In
                    </button>
                </form>

                <div className="flex justify-between mt-4 text-sm">
                    <Link to="/forgot-password" className="text-blue-500 hover:underline">
                        Forgot Password?
                    </Link>

                    <Link to="/signup" className="text-blue-700 font-semibold hover:underline">
                        Signup
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Signin;