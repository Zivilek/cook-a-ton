import { RecipeCourseModel } from "../../domain/models/recipeCourseModel";

class RecipeCourseMapper {
    constructor() {
        this.toModel = this.toModel.bind(this);
    }

    toModel(recipeCourseEntity) {
        let id = recipeCourseEntity._id;
        let name = recipeCourseEntity.name;

        return new RecipeCourseModel(id, name);
    }
}

export default new RecipeCourseMapper();