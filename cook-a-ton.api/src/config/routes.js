import express from "express";
import userController from '../controllers/userController';
import userRecipeTagController from '../controllers/userRecipeTagController';
import recipeController from './../../src/controllers/recipeController';
import healthCheckController from './../../src/controllers/healthCheckController';

export default (server) => {
    let router = express.Router();
    router.get(`/health`, healthCheckController.get);

    router.get(`/recipe/:id`, recipeController.get);
    router.get(`/recipe`, recipeController.getAll);
    router.post(`/recipe`, recipeController.insert)
    router.put(`/recipe/:id`, recipeController.update);
    router.delete(`/recipe/:id`, recipeController.delete);

    router.get(`/user/:id`, userController.get);
    router.get(`/user`, userController.getAll);
    router.post(`/user`, userController.insert)
    router.put(`/user/:id`, userController.update);
    router.delete(`/user/:id`, userController.delete);

    router.get(`/userRecipeTag/:id`, userRecipeTagController.get);
    router.get(`/userRecipeTag`, userRecipeTagController.getAll);
    router.post(`/userRecipeTag`, userRecipeTagController.insert)
    router.put(`/userRecipeTag/:id`, userRecipeTagController.update);
    router.delete(`/userRecipeTag/:id`, userRecipeTagController.delete);

    server.use(`/api`, router);
}