import { RecipeStepModel } from "../../domain/models/recipeStepModel";

class RecipeStepMapper {
    constructor() {
        this.toModel = this.toModel.bind(this);
    }

    toModel(recipeStepEntity) {
        let seqId = recipeStepEntity.seqId;
        let quantity = recipeStepEntity.quantity;
        let unit = recipeStepEntity.unit;
        let name = recipeStepEntity.name;
        let comment = recipeStepEntity.comment;

        return new RecipeStepModel(seqId, quantity, unit, name, comment);
    }
}

export default new RecipeStepMapper();