import recipeController from '../controllers/recipeController';

export default (router) => {
    router.get(`/recipe/:id`, recipeController.get);
    router.get(`/recipe`, recipeController.getAll);
    router.post(`/recipe`, recipeController.insert)
    router.put(`/recipe/:id`, recipeController.update);
    router.delete(`/recipe/:id`, recipeController.delete);
}