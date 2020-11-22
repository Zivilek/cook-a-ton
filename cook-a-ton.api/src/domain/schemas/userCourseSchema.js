import { Schema } from "mongoose";
import BaseSchema from "./baseSchema";

class UserCourseSchema extends BaseSchema {
    constructor() {
        super('userCourse');
    }

    createSchema() {
        const schema = new Schema({
            user: { type: Schema.Types.ObjectId, ref: 'user' },
            name: { type: String, required: true, }
        }, { timestamps: true });

        return schema;
    }
}

export default new UserCourseSchema();