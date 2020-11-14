import AbstractRepository from './abstractRepository';
import userSchema from '../../domain/schemas/userSchema';

class UserRepository extends AbstractRepository {
    constructor(model) {
        super(model);
    }
};

export default new UserRepository(userSchema);