'use strict';

module.exports = function(server) {
    var userFavoriteRecipes = require('../controllers/userFavoriteRecipeController');

    server.get('/userFavoriteRecipe', userFavoriteRecipes.getAllUserFavoriteRecipes);
    server.post('/userFavoriteRecipe', userFavoriteRecipes.createUserFavoriteRecipe);

    server.get('/userFavoriteRecipe/:userId', userFavoriteRecipes.getUserFavoriteRecipe);
    server.put('/userFavoriteRecipe/:userId', userFavoriteRecipes.updateUserFavoriteRecipe);
    server.del('/userFavoriteRecipe/:userId', userFavoriteRecipes.deleteUserFavoriteRecipe);
};