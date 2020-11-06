import recipeController from '../controllers/recipeController';

export default (router) => {
    router.get(`/recipes/:id`, recipeController.get);
    router.get(`/recipes`, recipeController.getAll);
    router.post(`/recipes`, recipeController.insert)
    router.put(`/recipes/:id`, recipeController.update);
    router.delete(`/recipes/:id`, recipeController.delete);
}