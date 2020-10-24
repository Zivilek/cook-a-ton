import React, { useState, useEffect } from "react";
import RecipeWidget from "./recipe-widget/recipe-widget";
import client from "../../api/client";
import "./recipe-list.css";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const renderRecipes = async () => {
      const { data } = await client.get("/recipes");
      setRecipes(data);
    };

    renderRecipes();
  }, []);

  const renderedRecipeWidgets = recipes.map((recipe) => {
    return (
      <RecipeWidget
        picture={recipe.image}
        title={recipe.title}
        key={recipe.id}
      />
    );
  });

  return <div className="recipes-container">{renderedRecipeWidgets}</div>;
};

export default RecipeList;
