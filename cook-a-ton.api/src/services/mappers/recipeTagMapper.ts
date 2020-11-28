import { RecipeTagEntity } from "../../domain/entities/recipeTagEntity";
import { RecipeTagModel } from "../../domain/models/recipeTagModel";

class RecipeTagMapper {
    constructor() {
        this.toModel = this.toModel.bind(this);
    }

    toModel(recipeTagEntity: RecipeTagEntity): RecipeTagModel {
        return {
            id: recipeTagEntity._id,
            name: recipeTagEntity.name,
            seqId: recipeTagEntity.seqId,
        };
    }

    toEntity(recipeTagModel: RecipeTagModel): RecipeTagEntity {
        return {
            _id: recipeTagModel.id,
            name: recipeTagModel.name,
            seqId: recipeTagModel.seqId,
        };
    }
}

export default new RecipeTagMapper();