import { Schema } from "mongoose";
import BaseSchema from "./baseSchema";

class UserSchema extends BaseSchema {
    constructor() {
        super('user');
    }

    createSchema() {
        const schema = new Schema({
            name: { type: String, required: true, },
            login: { type: String, required: true, },
            passwordHash: { type: String }
        });

        return schema;
    }
}

export default new UserSchema();