import { RecipeStepEntity } from "../../domain/entities/recipeStepEntity";
import { RecipeStepModel } from "../../domain/models/recipeStepModel";

class RecipeStepMapper {
    constructor() {
        this.toModel = this.toModel.bind(this);
    }

    toModel(recipeStepEntity: RecipeStepEntity): RecipeStepModel {
        return {
            seqId: recipeStepEntity.seqId,
            quantity: recipeStepEntity.quantity,
            unit: recipeStepEntity.unit,
            name: recipeStepEntity.name,
            comment: recipeStepEntity.comment
        }
    }
}

export default new RecipeStepMapper();