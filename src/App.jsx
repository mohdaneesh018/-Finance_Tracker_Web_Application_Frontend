import React from "react";
import { Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyOtp from "./pages/VerifyOtp";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import PrivateRoute from "./routes/PrivateRoute";
import ChangePassword from "./pages/ChangePassword";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-otp" element={<VerifyOtp />} />
      <Route path="/change-password" element={<ChangePassword />} />

      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default App;