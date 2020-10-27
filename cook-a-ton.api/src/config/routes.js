import RecipeController from './../../src/controllers/recipeController';

export default (server) => {
    server.get(`/recipe/:id`, RecipeController.get);
    server.get(`/recipe`, RecipeController.getAll);
    server.post(`/recipe`, RecipeController.insert)
    server.put(`/recipe/:id`, RecipeController.update);
    server.delete(`/recipe/:id`, RecipeController.delete);
}