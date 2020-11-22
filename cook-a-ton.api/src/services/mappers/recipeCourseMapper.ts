import { RecipeCourseEntity } from "../../domain/entities/recipeCourseEntity";
import { RecipeCourseModel } from "../../domain/models/recipeCourseModel";

class RecipeCourseMapper {
    constructor() {
        this.toModel = this.toModel.bind(this);
    }

    toModel(recipeCourseEntity: RecipeCourseEntity): RecipeCourseModel {
        return {
            id: recipeCourseEntity._id,
            name: recipeCourseEntity.name,
        }
    }

    toEntity(recipeCourseModel: RecipeCourseModel): RecipeCourseEntity {
        return {
            _id: recipeCourseModel.id,
            name: recipeCourseModel.name,
        }
    }
}

export default new RecipeCourseMapper();