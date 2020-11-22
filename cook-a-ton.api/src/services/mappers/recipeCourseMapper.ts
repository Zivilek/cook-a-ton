import { RecipeCourseEntity } from "../../domain/entities/recipeCourseEntity";
import { RecipeCourseModel } from "../../domain/models/recipeCourseModel";

class RecipeCourseMapper {
    constructor() {
        this.toModel = this.toModel.bind(this);
    }

    toModel(recipeCourseEntity: RecipeCourseEntity): RecipeCourseModel {
        console.log({ recipeCourseEntity })
        return {
            id: recipeCourseEntity._id,
            name: recipeCourseEntity.name,
        }
    }
}

export default new RecipeCourseMapper();