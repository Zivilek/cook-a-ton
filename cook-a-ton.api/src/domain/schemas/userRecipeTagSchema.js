import { Schema } from "mongoose";
import BaseSchema from "./baseSchema";

class UserRecipeTagSchema extends BaseSchema {
    constructor() {
        super('userRecipeTag');
    }

    createSchema() {
        const schema = new Schema({
            user: { type: Schema.Types.ObjectId, ref: 'user' },
            name: { type: String, required: true, }
        });

        return schema;
    }
}

export default new UserRecipeTagSchema();