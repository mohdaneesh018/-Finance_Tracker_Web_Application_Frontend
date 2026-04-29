import React, { useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        oldPassword: "",
        newPassword: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await API.post("/auth/change-password", formData);

            toast.success(res.data.message);
            navigate("/profile");
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />

            <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-2xl p-8">
                <h1 className="text-3xl font-bold text-center text-yellow-500 mb-6">
                    Change Password
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="password"
                        name="oldPassword"
                        placeholder="Enter Old Password"
                        value={formData.oldPassword}
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

                    <button className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600">
                        Change Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;