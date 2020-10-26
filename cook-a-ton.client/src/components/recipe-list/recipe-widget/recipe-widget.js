import React from "react";
import "./recipe-widget.css";

const RecipeWidget = ({ picture, title, source }) => {
  return (
    <div className="recipe-wrapper">
      <div className="image-wrapper">
        <img src={picture} alt="recipe" className="recipe-picture" />
      </div>
      <div>{title}</div>
      <div>Source: {source}</div>
    </div>
  );
};

export default RecipeWidget;
