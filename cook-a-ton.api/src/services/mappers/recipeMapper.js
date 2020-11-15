import recipeCourseMapper from "./recipeCourseMapper";
import recipeStepMapper from "./recipeStepMapper";
import recipeTagMapper from "./recipeTagMapper";

const { RecipeModel } = require("../../domain/models/recipeModel")

class RecipeMapper {
    constructor() {
        this.toModel = this.toModel.bind(this);
    }

    toModel(recipeEntity) {
        let id = recipeEntity._id;
        let name = recipeEntity.name;
        let course = recipeCourseMapper.toModel(recipeEntity.course);
        let tags = recipeEntity.tags?.map((tag) => recipeTagMapper.toModel(tag));
        let images = recipeEntity.images;
        let source = recipeEntity.source;
        let steps = recipeEntity.steps?.map((step) => recipeStepMapper.toModel(step));

        return new RecipeModel(id, name, course, tags, images, source, steps);
    }
}

export default new RecipeMapper();