import mongoose, { Schema } from "mongoose";
import BaseModel from "./baseModel";

class UserRecipeTag extends BaseModel {
    constructor() {
        super('userRecipeTag');
    }

    createSchema() {
        const schema = new Schema({
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'
            },
            name: {
                type: String,
                required: true,
            }
        });

        return schema;
    }
}

export default UserRecipeTag;