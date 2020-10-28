import { Schema } from "mongoose";
import BaseModel from "./baseModel";

class User extends BaseModel {
    constructor() {
        super('user');
    }

    createSchema() {
        const schema = new Schema({
            login: {
                type: String,
                // required: true,
            },
            passwordHash: {
                type: String,
                // required: false,
            }
        });

        return schema;
    }
}

export default User;