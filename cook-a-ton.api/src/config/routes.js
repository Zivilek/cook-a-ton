import userController from '../controllers/userController';
import userRecipeTagController from '../controllers/userRecipeTagController';
import recipeController from './../../src/controllers/recipeController';

export default (server) => {
    server.get(`/recipe/:id`, recipeController.get);
    server.get(`/recipe`, recipeController.getAll);
    server.post(`/recipe`, recipeController.insert)
    server.put(`/recipe/:id`, recipeController.update);
    server.delete(`/recipe/:id`, recipeController.delete);

    server.get(`/user/:id`, userController.get);
    server.get(`/user`, userController.getAll);
    server.post(`/user`, userController.insert)
    server.put(`/user/:id`, userController.update);
    server.delete(`/user/:id`, userController.delete);

    server.get(`/userRecipeTag/:id`, userRecipeTagController.get);
    server.get(`/userRecipeTag`, userRecipeTagController.getAll);
    server.post(`/userRecipeTag`, userRecipeTagController.insert)
    server.put(`/userRecipeTag/:id`, userRecipeTagController.update);
    server.delete(`/userRecipeTag/:id`, userRecipeTagController.delete);
}