import client from '../api/client';

class RecipeTagDataService {
  getRecipeTags = () => {
    return client.get('/userRecipeTags');
  };
}

export default new RecipeTagDataService();

// router.get(`/userRecipeTags/:id`, userRecipeTagController.get);
// router.get(`/userRecipeTags`, userRecipeTagController.getAll);
// router.post(`/userRecipeTags`, userRecipeTagController.insert);
// router.put(`/userRecipeTags/:id`, userRecipeTagController.update);
// router.delete(`/userRecipeTags/:id`, userRecipeTagController.delete);
