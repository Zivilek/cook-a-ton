'use strict';
module.exports = function(app) {
  var recipes = require('../controllers/recipeController');

  app.route('/recipes')
    .get(recipes.getAllRecipes)
    .post(recipes.createRecipe);

  app.route('/recipes/:recipeId')
    .get(recipes.getRecipe)
    .put(recipes.updateRecipe)
    .delete(recipes.deleteRecipe);
};