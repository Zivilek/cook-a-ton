import AbstractCRUDController from './abstractCRUDController';
import userCourseRepository from '../../dal/repositories/userCourseRepository';

class UserCourseController extends AbstractCRUDController {
    constructor(service) {
        super(service);
    }
}

export default new UserCourseController(userCourseRepository);