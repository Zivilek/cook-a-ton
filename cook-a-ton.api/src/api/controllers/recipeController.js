import Recipe from "../../models/recipe";
import RecipeRepository from "../../repositories/recipeRepository";
import AbstractCRUDController from './abstractCRUDController';
const recipeRepository = new RecipeRepository(
    new Recipe()
);

class RecipeController extends AbstractCRUDController {
    constructor(service) {
        super(service);
    }
}

export default new RecipeController(recipeRepository);