import User from '../../models/user';
import UserCourse from '../../models/userCourse';
import UserCourseRepository from '../../repositories/userCourseRepository';
import AbstractCRUDController from './abstractCRUDController';
const userCourseRepository = new UserCourseRepository(
    new UserCourse()
);

class UserCourseController extends AbstractCRUDController {
    constructor(service) {
        super(service);
    }
}

export default new UserCourseController(userCourseRepository);