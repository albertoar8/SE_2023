// here the code to import from api
import { CircularProgress } from "@mui/material";
import RecipeReviewCard from "./Card";
import axios from "axios";
import React from "react";

export default function Recipies() {
  const [APIData, setAPIData] = React.useState([]);
  const [loading, setloading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get("https://the-cocktail-db.p.rapidapi.com/popular.php", {
        headers: {
          "X-RapidAPI-Key":
            "0cc4c302acmsh1319b32e08bcd0ep178f40jsn0adb7f951f53",
          "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
        },
      })
      .then((response) => {
        setAPIData(response.data.drinks);
        setloading(false);
      });
  }, []);

  return (
    <div>
      <h1>Cocktail Recipes</h1>
      <p>Courtesy of The Cocktail DB API</p>
      <div>
        {loading ? <CircularProgress /> : <RecipeReviewCard allRecipes={APIData} />}
      </div>
    </div>
  );
}
