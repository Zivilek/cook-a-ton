import { Types } from "mongoose";
import { RecipeCourseEntity } from "../../domain/entities/recipeCourseEntity";
import { RecipeEntity } from "../../domain/entities/recipeEntity";
import { RecipeTagEntity } from "../../domain/entities/recipeTagEntity";
import { RecipeCourseModel } from "../../domain/models/recipeCourseModel";
import { RecipeModel } from "../../domain/models/recipeModel";
import recipeCourseMapper from "./recipeCourseMapper";
import recipeStepMapper from "./recipeStepMapper";
import recipeTagMapper from "./recipeTagMapper";

const { RecipeModel } = require("../../domain/models/recipeModel")

class RecipeMapper {
    constructor() {
        this.toModel = this.toModel.bind(this);
    }

    toModel(recipeEntity: RecipeEntity): RecipeModel {
        return {
            id: recipeEntity._id,
            name: recipeEntity.name,
            courses: (recipeEntity.courses as RecipeCourseEntity[])?.map((course) => recipeCourseMapper.toModel(course)) || recipeEntity.courses,
            tags: (recipeEntity.tags as RecipeTagEntity[])?.map((tag) => recipeTagMapper.toModel(tag)) || recipeEntity.tags,
            images: recipeEntity.images,
            source: recipeEntity.source,
            steps: recipeEntity.steps?.map((step) => recipeStepMapper.toModel(step))
        }
    }
}

export default new RecipeMapper();