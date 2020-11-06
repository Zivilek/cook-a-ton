import React from "react";
import "./recipe-widget.css";

import TagList from "../../TagList/TagList";

const RecipeWidget = ({ recipe }) => {
  return (
    <div className="recipe-wrapper">
      <div className="image-wrapper">
        <img
          src={
            recipe.images.length
              ? recipe.images[0]
              : "https://picsum.photos/200"
          }
          alt="recipe"
          className="recipe-picture"
        />
      </div>
      <h3>{recipe.name}</h3>
      <br />
      <div>Course: {recipe.course}</div>
      <TagList tags={recipe.tags} />
    </div>
  );
};

export default RecipeWidget;
