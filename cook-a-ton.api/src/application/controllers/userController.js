import userRepository from '../../dal/repositories/userRepository';
import userManagementService from '../../services/userManagementService';
import AbstractCRUDController from './abstractCRUDController';

class UserController extends AbstractCRUDController {
    constructor(service) {
        super(service);
    }

    async register(req, res) {
        let user = await userManagementService.register(req.query.login, req.query.password);
        return res.status(200).send(user);
    }

    async login(req, res) {
        let user = await userManagementService.login(req.query.login, req.query.password);
        return res.status(200).send(user);
    }
}

export default new UserController(userRepository);