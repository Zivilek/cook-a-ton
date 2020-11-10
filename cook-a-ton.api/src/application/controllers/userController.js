import UserSchema from '../../domain/schemas/userSchema';
import UserRepository from '../../dal/repositories/userRepository';
import AbstractCRUDController from './abstractCRUDController';
const userRepository = new UserRepository(
    new UserSchema()
);

class UserController extends AbstractCRUDController {
    constructor(service) {
        super(service);
    }
}

export default new UserController(userRepository);