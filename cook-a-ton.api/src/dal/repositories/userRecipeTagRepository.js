import AbstractRepository from './abstractRepository';
import userRecipeTagSchema from '../../domain/schemas/userRecipeTagSchema';

class UserRecipeTagRepository extends AbstractRepository {
    constructor(model) {
        super(model);
    }
};

export default new UserRecipeTagRepository(userRecipeTagSchema);