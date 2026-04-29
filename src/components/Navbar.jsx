import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Finance Tracker</h1>

        <div className="space-x-4">
          <Link to="/home" className="hover:underline">
            Home
          </Link>
          <Link to="/profile" className="hover:underline">
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;