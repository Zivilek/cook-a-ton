import { RecipeTagModel } from "../../domain/models/recipeTagModel";

class RecipeTagMapper {
    constructor() {
        this.toModel = this.toModel.bind(this);
    }

    toModel(recipeTagEntity) {
        let id = recipeTagEntity._id;
        let name = recipeTagEntity.name;

        return new RecipeTagModel(id, name);
    }
}

export default new RecipeTagMapper();