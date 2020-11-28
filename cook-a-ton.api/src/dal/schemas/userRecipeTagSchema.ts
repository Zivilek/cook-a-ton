import { Schema } from "mongoose";
import { RecipeTagEntity } from "../../domain/entities/recipeTagEntity";
import BaseSchema from "./baseSchema";

class UserRecipeTagSchema extends BaseSchema<RecipeTagEntity> {
    constructor() {
        super('userRecipeTag');
    }

    protected createSchema() {
        const schema = new Schema({
            user: { type: Schema.Types.ObjectId, ref: 'user' },
            seqId: { type: Number, required: true },
            name: { type: String, required: true, }
        }, { timestamps: true });

        return schema;
    }
}

export default new UserRecipeTagSchema().getMongooseModel();