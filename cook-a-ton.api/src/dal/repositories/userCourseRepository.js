import AbstractRepository from './abstractRepository';
import userCourseSchema from '../../domain/schemas/userCourseSchema';

class UserCourseRepository extends AbstractRepository {
    constructor(model) {
        super(model);
    }
};

export default new UserCourseRepository(userCourseSchema);