import AbstractCRUDController from './abstractCRUDController';
import recipeRepository from '../../dal/repositories/recipeRepository';

class RecipeController extends AbstractCRUDController {
    constructor(service) {
        super(service);
    }
}

export default new RecipeController(recipeRepository);