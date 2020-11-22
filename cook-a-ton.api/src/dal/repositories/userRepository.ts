import AbstractRepository from './abstractRepository';
import userSchema from '../../domain/schemas/userSchema';
import { UserEntity } from '../../domain/entities/userEntity';
import BaseSchema from '../../domain/schemas/baseSchema';

class UserRepository extends AbstractRepository<UserEntity> {
    constructor(schema: BaseSchema<UserEntity>) {
        super(schema);
    }
};

export default new UserRepository(userSchema);