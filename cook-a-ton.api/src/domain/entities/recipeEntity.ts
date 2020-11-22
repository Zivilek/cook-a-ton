import { Document, Types } from "mongoose"
import { RecipeCourseEntity } from "./recipeCourseEntity"
import { RecipeStepEntity } from "./recipeStepEntity"
import { RecipeTagEntity } from "./recipeTagEntity"

type RecipeEntity = Document & {
    name: string;
    course?: RecipeCourseEntity | Types.ObjectId;
    tags?: [RecipeTagEntity] | [Types.ObjectId];
    images?: [string];
    source: string;
    steps?: [RecipeStepEntity];
}

export { RecipeEntity }