import React from 'react';
import './RecipeWidget.css';

import TagList from '../../TagList/TagList';
// import ImagesViewer from '../../ImagesViewer/ImagesViewer';

const RecipeWidget = ({ recipe }) => {
  return (
    <div className="recipe-wrapper">
      <div className="image-wrapper">
        <img
          src={
            recipe.images.length
              ? recipe.images[0]
              : 'https://picsum.photos/200'
          }
          alt="recipe"
          className="recipe-picture"
        />
      </div>
      <h3>{recipe.name}</h3>
      <br />
      <div>Course: {recipe.course}</div>
      <TagList tags={recipe.tags} />

      {/* <ImagesViewer images={recipe.images} /> */}
    </div>
  );
};

export default RecipeWidget;
