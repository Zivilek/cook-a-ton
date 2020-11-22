import { Schema } from "mongoose";
import { UserEntity } from "../entities/userEntity";
import BaseSchema from "./baseSchema";

class UserSchema extends BaseSchema<UserEntity> {
    constructor() {
        super('user');
    }

    createSchema(): Schema {
        const schema = new Schema({
            name: { type: String, required: true, },
            login: { type: String, required: true, },
            passwordHash: { type: String }
        }, { timestamps: true });

        return schema;
    }
}

export default new UserSchema();