import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Recipes from "../Components/Recipes";
import Saverecipes from "../Components/SaveRecipes";

export const AppRoutes = (props) => {
  return (
    <Routes>
      <Route path="/home" element={<Home {...props} />} />
      <Route path="/recipes" element={<Recipes {...props} />} />
      <Route path="/save" element={<Saverecipes {...props} />} />
    </Routes>
  );
};
