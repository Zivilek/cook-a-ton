import Recipe from "../models/recipe";
import RecipeRepository from "./../repositories/recipeRepository";
import Controller from './Controller';
const recipeRepository = new RecipeRepository(
    new Recipe()
);

class RecipeController extends Controller {
    constructor(service) {
        super(service);
    }
}

export default new RecipeController(recipeRepository);