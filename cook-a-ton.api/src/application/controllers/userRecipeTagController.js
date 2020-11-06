import UserRecipeTagSchema from '../../domain/schemas/userRecipeTagSchema';
import UserRecipeTagRepository from '../../dal/repositories/userRecipeTagRepository';
import AbstractCRUDController from './abstractCRUDController';
const userRecipeTagRepository = new UserRecipeTagRepository(
    new UserRecipeTagSchema()
);

class UserRecipeTagController extends AbstractCRUDController {
    constructor(service) {
        super(service);
    }
}

export default new UserRecipeTagController(userRecipeTagRepository);