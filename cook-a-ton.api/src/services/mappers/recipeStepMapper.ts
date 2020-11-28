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
            comment: recipeStepEntity.comment,
        }
    }

    toEntity(recipeStepModel: RecipeStepModel): RecipeStepEntity {
        return {
            seqId: recipeStepModel.seqId,
            quantity: recipeStepModel.quantity,
            unit: recipeStepModel.unit,
            name: recipeStepModel.name,
            comment: recipeStepModel.comment,
        }
    }
}

export default new RecipeStepMapper();