import userRepository from '../../dal/repositories/userRepository';
import AbstractCRUDController from './abstractCRUDController';

class UserController extends AbstractCRUDController {
    constructor(service) {
        super(service);
    }
}

export default new UserController(userRepository);