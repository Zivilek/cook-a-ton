import React, { useState, useEffect } from 'react';
import RecipeWidget from './RecipeWidget/RecipeWidget';
import './RecipeList.css';
import recipeDataService from '../../api/RecipeDataService';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const renderRecipes = async () => {
      const { data } = await recipeDataService.getRecipes();
      setRecipes(data.data);
    };

    renderRecipes();
  }, []);

  const renderedRecipeWidgets = recipes.map((recipe) => {
    return <RecipeWidget recipe={recipe} key={recipe._id} />;
  });

  return (
    <div className="recipe-list">
      <div className="recipes-container">{renderedRecipeWidgets}</div>
    </div>
  );
};

export default RecipeList;
