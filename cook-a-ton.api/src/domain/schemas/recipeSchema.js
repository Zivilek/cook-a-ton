import { Schema } from "mongoose";
import BaseSchema from "./baseSchema";

class RecipeSchema extends BaseSchema {
    constructor() {
        super("recipe");
    }

    createSchema() {
        const recipeStepSchema = new Schema({
            seqId: { type: Number, required: true },
            quantity: { type: Number, required: true },
            unit: { type: String, required: true },
            name: { type: String, required: true },
            comment: { type: String }
        }, { _id: false })

        const schema = new Schema({
            name: { type: String, required: true, },
            course: { type: Schema.Types.ObjectId, ref: 'userCourse' },
            description: { type: String },
            tags: [{ type: Schema.Types.ObjectId, ref: 'userRecipeTag' }],
            images: [{ type: String }],
            steps: [recipeStepSchema],
            source: { type: String }
        });

        return schema;
    }
}

export default new RecipeSchema();