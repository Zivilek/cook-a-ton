import React from "react";
import "./recipe-widget.css";

const RecipeWidget = ({ picture, title }) => {
  return (
    <div className="recipe-wrapper">
      <div className="image-wrapper">
        <img src={picture} alt="recipe" className="recipe-picture" />
      </div>
      <h4>{title}</h4>
    </div>
  );
};

export default RecipeWidget;
