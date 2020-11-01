import { Schema } from "mongoose";
import BaseModel from "./baseModel";

class Recipe extends BaseModel {
    constructor() {
        super("recipe");
    }

    createSchema() {
        const recipeSchema = new Schema({
            _id: { type: Number },
            quantity: { type: Number, required: true },
            unit: { type: String, required: true },
            name: { type: String, required: true },
            comment: { type: String },
        }, { _id: false })

        const schema = new Schema({
            name: { type: String, required: true, },
            course: { type: String, required: true },
            description: { type: String },
            tags: [{ type: String, }],
            images: [{ type: String }],
            steps: [recipeSchema]
        });

        return schema;
    }
}

export default Recipe;