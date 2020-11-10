import RecipeSchema from "../../domain/schemas/recipeSchema";
import RecipeRepository from "../../dal/repositories/recipeRepository";
import AbstractCRUDController from './abstractCRUDController';
const recipeRepository = new RecipeRepository(
    new RecipeSchema()
);

class RecipeController extends AbstractCRUDController {
    constructor(service) {
        super(service);
    }
}

export default new RecipeController(recipeRepository);