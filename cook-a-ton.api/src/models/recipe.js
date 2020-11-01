import mongoose, { Schema } from "mongoose";
import BaseModel from "./baseModel";

class Recipe extends BaseModel {
  constructor() {
    super("recipe");
  }

  createSchema() {
    const schema = new Schema({
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: false,
      },
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userCourse",
      },
      tags: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "userRecipeTag",
        },
      ],
      images: [
        {
          // type: Buffer
          type: String,
        },
      ],
    });

    return schema;
  }
}

export default Recipe;
