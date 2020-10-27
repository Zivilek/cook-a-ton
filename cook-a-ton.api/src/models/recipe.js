import mongoose, { Schema } from "mongoose";
import mongooseStringQuery from "mongoose-string-query";
import timestamps from "mongoose-timestamp";

class Recipe {
    initSchema() {
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

        schema.plugin(timestamps);
        schema.plugin(mongooseStringQuery);
        mongoose.model("recipe", schema, 'Recipe');
    }

    getInstance() {
        this.initSchema();
        return mongoose.model("recipe");
    }
}

export default Recipe;