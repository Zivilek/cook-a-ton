import { Schema } from "mongoose";
import BaseSchema from "./baseSchema";

class RecipeSchema extends BaseSchema {
    constructor() {
        super("recipe");
    }

    createSchema() {
        const recipeSchema = new Schema({
            seqId: { type: Number, required: true },
            quantity: { type: Number, required: true },
            unit: { type: String, required: true },
            name: { type: String, required: true },
            comment: { type: String }
        }, { _id: false })

        const schema = new Schema({
            name: { type: String, required: true, },
            course: { type: String, required: true },
            description: { type: String },
            tags: [{ type: String, }],
            images: [{ type: String }],
            steps: [recipeSchema],
            source: { type: String }
        });

        return schema;
    }
}

export default RecipeSchema;