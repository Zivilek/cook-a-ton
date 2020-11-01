import React from "react";
import "./recipe-widget.css";

const RecipeWidget = ({ recipe }) => {
  return (
    <div className="recipe-wrapper">
      <div className="image-wrapper">
        <img src={recipe.images[0]} alt="recipe" className="recipe-picture" />
      </div>
      <div>{recipe.name}</div>
      <div>Course: {recipe.course}</div>
    </div>
  );
};

export default RecipeWidget;
