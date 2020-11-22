import { Types } from "mongoose";
import { RecipeCourseModel } from "./recipeCourseModel";
import { RecipeStepModel } from "./recipeStepModel";
import { RecipeTagModel } from "./recipeTagModel";

type RecipeModel = {
    id?: Types.ObjectId;
    name: string;
    courses?: RecipeCourseModel[] | Types.ObjectId[];
    tags?: RecipeTagModel[] | Types.ObjectId[];
    images?: string[];
    source: string;
    steps?: RecipeStepModel[];
}

export { RecipeModel };