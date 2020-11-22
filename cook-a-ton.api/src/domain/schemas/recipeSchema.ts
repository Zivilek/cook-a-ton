import { Schema } from "mongoose";
import { RecipeEntity } from "../entities/recipeEntity";
import BaseSchema from "./baseSchema";

class RecipeSchema extends BaseSchema<RecipeEntity> {
    constructor() {
        super("recipe");
    }

    protected createSchema() {
        const recipeStepSchema = new Schema({
            seqId: { type: Number, required: true },
            quantity: { type: Number, required: true },
            unit: { type: String, required: true },
            name: { type: String, required: true },
            comment: { type: String }
        }, { _id: false })

        const recipeSchema = new Schema({
            name: { type: String, required: true, },
            courses: [{ type: Schema.Types.ObjectId, ref: 'userCourse' }],
            description: { type: String },
            tags: [{ type: Schema.Types.ObjectId, ref: 'userRecipeTag' }],
            images: [{ type: String }],
            steps: [recipeStepSchema],
            source: { type: String }
        }, { timestamps: true });

        return recipeSchema;
    }
}

export default new RecipeSchema().getMongooseModel();