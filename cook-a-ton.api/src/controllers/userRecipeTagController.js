import UserRecipeTag from '../models/userRecipeTag';
import UserRecipeTagRepository from '../repositories/userRecipeTagRepository';
import Controller from './Controller';
const userRecipeTagRepository = new UserRecipeTagRepository(
    new UserRecipeTag()
);

class UserRecipeTagController extends Controller {
    constructor(service) {
        super(service);
    }
}

export default new UserRecipeTagController(userRecipeTagRepository);