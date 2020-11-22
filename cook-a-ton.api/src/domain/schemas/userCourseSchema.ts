import { Schema } from "mongoose";
import { RecipeCourseEntity } from "../entities/recipeCourseEntity";
import BaseSchema from "./baseSchema";

class UserCourseSchema extends BaseSchema<RecipeCourseEntity> {
    constructor() {
        super('userCourse');
    }

    protected createSchema() {
        const schema = new Schema({
            user: { type: Schema.Types.ObjectId, ref: 'user' },
            name: { type: String, required: true, }
        }, { timestamps: true });

        return schema;
    }
}

export default new UserCourseSchema().getMongooseModel();