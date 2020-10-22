import React from 'react';
import './recipe-widget.css';

const RecipeWidget = ({picture, title}) => {
    return (
        <div className="recipe-wrapper">
            <img src={picture} alt="recipe" className="recipe-picture" />
            <h4>{title}</h4>
        </div>
    );
}

export default RecipeWidget;