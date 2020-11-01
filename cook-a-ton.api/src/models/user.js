import { Schema } from "mongoose";
import BaseModel from "./baseModel";

class User extends BaseModel {
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

export default User;