import { Schema } from "mongoose";
import { UserEntity } from "../../domain/entities/userEntity";
import BaseSchema from "./baseSchema";

class UserSchema extends BaseSchema<UserEntity> {
    constructor() {
        super('user');
    }

    protected createSchema(): Schema {
        const schema = new Schema({
            name: { type: String, required: true, },
            email: { type: String, required: true, unique: true },
            passwordHash: { type: String, required: true }
        }, { timestamps: true });

        return schema;
    }
}

export default new UserSchema().getMongooseModel();