import React from 'react';
import RecipeWidget from './components/recipe-widget';

const recipe = {
    pictureUrl: 'https://prod-wolt-venue-images-cdn.wolt.com/5b2a9c77e4d0ef000d2bbe40/f091ab5fe619d82e32510df20211dfc5',
    title: 'Pica su pievagrybiais'
}

const App = () => {
    return (
        <div>
            <RecipeWidget 
                picture = {recipe.pictureUrl}
                title = {recipe.title}
            />
            <RecipeWidget 
                picture = {recipe.pictureUrl}
                title = {recipe.title}
            />
            <RecipeWidget 
                picture = {recipe.pictureUrl}
                title = {recipe.title}
            />
            <RecipeWidget 
                picture = {recipe.pictureUrl}
                title = {recipe.title}
            />
            <RecipeWidget 
                picture = {recipe.pictureUrl}
                title = {recipe.title}
            />
            <RecipeWidget 
                picture = {recipe.pictureUrl}
                title = {recipe.title}
            />
            
        </div>
    );
}

export default App;