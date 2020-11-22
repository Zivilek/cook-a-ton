import { Types } from "mongoose"
import { BaseEntity } from "./baseEntity"
import { RecipeCourseEntity } from "./recipeCourseEntity"
import { RecipeStepEntity } from "./recipeStepEntity"
import { RecipeTagEntity } from "./recipeTagEntity"

type RecipeEntity = BaseEntity & {
    name: string;
    courses?: RecipeCourseEntity[] | Types.ObjectId[];
    tags?: RecipeTagEntity[] | Types.ObjectId[];
    images?: string[];
    source: string;
    steps?: RecipeStepEntity[];
}

export { RecipeEntity }