import User from '../models/user';
import UserRepository from '../repositories/userRepository';
import AbstractCRUDController from './abstractCRUDController';
const userRepository = new UserRepository(
    new User()
);

class UserController extends AbstractCRUDController {
    constructor(service) {
        super(service);
    }
}

export default new UserController(userRepository);