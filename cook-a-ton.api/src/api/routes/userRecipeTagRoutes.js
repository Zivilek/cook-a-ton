import userRecipeTagController from "../controllers/userRecipeTagController";

export default (router) => {
  router.get(`/userRecipeTag/:id`, userRecipeTagController.get);
  router.get(`/userRecipeTag`, userRecipeTagController.getAll);
  router.post(`/userRecipeTag`, userRecipeTagController.insert);
  router.put(`/userRecipeTag/:id`, userRecipeTagController.update);
  router.delete(`/userRecipeTag/:id`, userRecipeTagController.delete);
};
