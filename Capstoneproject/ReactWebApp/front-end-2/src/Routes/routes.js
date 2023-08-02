import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Components/Dashboard/Dashboard";
import Preferences from "../Components/Preferences/Preferences";
import Login from "../Components/Login/Login";

export const AppRoutes = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Login {...props} />} />
      <Route path="/dashboard" element={<Dashboard {...props} />} />
      <Route path="/preferences" element={<Preferences {...props} />} />
      <Route path="/login" element={<Login {...props} />} />
    </Routes>
  );
};
