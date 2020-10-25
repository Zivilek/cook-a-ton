'use strict';

module.exports = function(server) {
    var recipes = require('../controllers/recipeController');

    server.get('/recipe', recipes.getAllRecipes);
    server.post('/recipe', recipes.createRecipe);

    server.get('/recipe/:recipeId', recipes.getRecipe);
    server.put('/recipe/:recipeId', recipes.updateRecipe);
    server.del('/recipe/:recipeId', recipes.deleteRecipe);
};