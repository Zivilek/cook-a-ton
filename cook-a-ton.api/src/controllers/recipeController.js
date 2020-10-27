import Controller from './Controller';
import RecipeRepository from "./../repositories/recipeRepository";
import Recipe from "../models/recipe";
const recipeRepository = new RecipeRepository(
    new Recipe().getInstance()
);

class RecipeController extends Controller {
    constructor(service) {
        super(service);
    }
}

export default new RecipeController(recipeRepository);