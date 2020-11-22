import AbstractRepository from './abstractRepository';
import userCourseSchema from '../../domain/schemas/userCourseSchema';
import { RecipeCourseEntity } from '../../domain/entities/recipeCourseEntity';
import { Document, Model } from 'mongoose';

class UserCourseRepository extends AbstractRepository<RecipeCourseEntity> {
    constructor(schema: Model<Document & RecipeCourseEntity>) {
        super(schema);
    }
};

export default new UserCourseRepository(userCourseSchema);