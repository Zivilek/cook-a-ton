import { Schema } from "mongoose";
import BaseModel from "./baseModel";

class Recipe extends BaseModel {
    constructor() {
        super('recipe');
    }

    createSchema() {
        const schema = new Schema({
            name: {
                type: String,
                // required: true,
            },
            description: {
                type: String,
                // required: false,
            },
            course: {
                type: [{
                    type: String,
                    enum: ['dinner', 'lunch', 'breakfast', 'snack']
                }],
                default: ['lunch']
            }
        });

        return schema;
    }
}

export default Recipe;