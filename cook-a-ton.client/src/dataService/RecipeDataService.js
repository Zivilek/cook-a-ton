import client from '../api/client';

class RecipeDataService {
  getRecipes = (params = {}) => {
    return client.get('/recipes', { params });
  };

  getRecipe = (id) => {
    return client.get(`/recipes/${id}`);
  };

  postRecipe = (recipe) => {
    return client.post('/recipes', recipe);
  };
}

export default new RecipeDataService();

// router.get(`/recipes/:id`, recipeController.get);
// router.get(`/recipes`, recipeController.getAll);
// router.post(`/recipes`, recipeController.insert);
// router.put(`/recipes/:id`, recipeController.update);
// router.delete(`/recipes/:id`, recipeController.delete);

// swaggerRoutes(router);
// healthCheckRoutes(router);
// recipeRoutes(router);
// userRoutes(router);
// userRecipeTagRoutes(router);
// userCourseRoutes(router);
// imageRoutes(router);
