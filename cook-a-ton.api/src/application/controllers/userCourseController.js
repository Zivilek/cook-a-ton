import UserSchema from '../../domain/schemas/userSchema';
import UserCourseSchema from '../../domain/schemas/userCourseSchema';
import UserCourseRepository from '../../dal/repositories/userCourseRepository';
import AbstractCRUDController from './abstractCRUDController';
const userCourseRepository = new UserCourseRepository(
    new UserCourseSchema()
);

class UserCourseController extends AbstractCRUDController {
    constructor(service) {
        super(service);
    }
}

export default new UserCourseController(userCourseRepository);