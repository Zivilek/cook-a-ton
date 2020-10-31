import UserRecipeTag from '../../models/userRecipeTag';
import UserRecipeTagRepository from '../../repositories/userRecipeTagRepository';
import AbstractCRUDController from './abstractCRUDController';
const userRecipeTagRepository = new UserRecipeTagRepository(
    new UserRecipeTag()
);

class UserRecipeTagController extends AbstractCRUDController {
    constructor(service) {
        super(service);
    }
}

export default new UserRecipeTagController(userRecipeTagRepository);