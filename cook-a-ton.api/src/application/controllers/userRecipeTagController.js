import userRecipeTagRepository from '../../dal/repositories/userRecipeTagRepository';
import AbstractCRUDController from './abstractCRUDController';

class UserRecipeTagController extends AbstractCRUDController {
    constructor(service) {
        super(service);
    }
}

export default new UserRecipeTagController(userRecipeTagRepository);