import { Schema } from "mongoose";
import BaseModel from "./baseModel";

class UserCourse extends BaseModel {
    constructor() {
        super('userCourse');
    }

    createSchema() {
        const schema = new Schema({
            user: { type: Schema.Types.ObjectId, ref: 'user' },
            name: { type: String, required: true, }
        });

        return schema;
    }
}

export default UserCourse;