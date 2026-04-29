import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const fetchProfile = async () => {
    try {
      const res = await API.get("/user/profile");
      setUser(res.data);
    } catch (error) {
      toast.error("Failed to fetch profile");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out");
    window.location.href = "/";
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-3xl mx-auto mt-10 bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          My Profile
        </h1>

        <div className="space-y-5">
          <div>
            <label className="font-semibold">Username</label>
            <input
              type="text"
              value={user.username || ""}
              readOnly
              className="w-full border p-3 rounded-lg mt-1 bg-gray-100"
            />
          </div>

          <div>
            <label className="font-semibold">Email</label>
            <input
              type="email"
              value={user.email || ""}
              readOnly
              className="w-full border p-3 rounded-lg mt-1 bg-gray-100"
            />
          </div>

          <div>
            <label className="font-semibold">Password</label>
            <input
              type="password"
              value="********"
              readOnly
              className="w-full border p-3 rounded-lg mt-1 bg-gray-100"
            />
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={() => navigate("/change-password")}
              className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600">
              Change Password
            </button>

            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;