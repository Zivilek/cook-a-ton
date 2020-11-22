import AbstractRepository from './abstractRepository';
import userSchema from '../../domain/schemas/userSchema';
import { UserEntity } from '../../domain/entities/userEntity';
import { Document, Model } from 'mongoose';

class UserRepository extends AbstractRepository<UserEntity> {
    constructor(schema: Model<Document & UserEntity>) {
        super(schema);
    }
};

export default new UserRepository(userSchema);