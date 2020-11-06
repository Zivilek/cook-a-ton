import userRecipeTagController from "../controllers/userRecipeTagController";

export default (router) => {
    router.get(`/userRecipeTags/:id`, userRecipeTagController.get);
    router.get(`/userRecipeTags`, userRecipeTagController.getAll);
    router.post(`/userRecipeTags`, userRecipeTagController.insert);
    router.put(`/userRecipeTags/:id`, userRecipeTagController.update);
    router.delete(`/userRecipeTags/:id`, userRecipeTagController.delete);
};