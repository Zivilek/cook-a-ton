import { RecipeCourseEntity } from "../../domain/entities/recipeCourseEntity";
import { RecipeEntity } from "../../domain/entities/recipeEntity";
import { RecipeTagEntity } from "../../domain/entities/recipeTagEntity";
import { RecipeCourseModel } from "../../domain/models/recipeCourseModel";
import { RecipeModel } from "../../domain/models/recipeModel";
import { RecipeTagModel } from "../../domain/models/recipeTagModel";
import recipeCourseMapper from "./recipeCourseMapper";
import recipeStepMapper from "./recipeStepMapper";
import recipeTagMapper from "./recipeTagMapper";

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
            steps: recipeEntity.steps?.map((step) => recipeStepMapper.toModel(step)).sort((a, b) => a.seqId - b.seqId),
        }
    }

    toEntity(recipeModel: RecipeModel): RecipeEntity {
        return {
            _id: recipeModel.id,
            name: recipeModel.name,
            courses: (recipeModel.courses as RecipeCourseModel[])?.map((course) => course.id!) || recipeModel.courses,
            tags: (recipeModel.tags as RecipeTagModel[])?.map((tag) => tag.id!) || recipeModel.tags,
            images: recipeModel.images,
            source: recipeModel.source,
            steps: recipeModel.steps?.map((step) => recipeStepMapper.toModel(step)),
        }
    }
}

export default new RecipeMapper();