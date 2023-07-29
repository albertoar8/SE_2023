import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Book from "../Components/Book/Book";
import Search from "../Components/Search/Search";
import Login from "../Components/Login/Login";

export const AppRoutes = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Home {...props} />} />
      <Route path="/about" element={<About {...props} />} />
      <Route path="/search" element={<Search {...props} />} />
      <Route path="/book" element={<Book {...props} />} />
      <Route path="/login" element={<Login {...props} />} />
    </Routes>
  );
};
