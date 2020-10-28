import User from '../models/user';
import UserRepository from '../repositories/userRepository';
import Controller from './Controller';
const userRepository = new UserRepository(
    new User()
);

class UserController extends Controller {
    constructor(service) {
        super(service);
    }
}

export default new UserController(userRepository);