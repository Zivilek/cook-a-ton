import recipeRepository from '../dal/repositories/recipeRepository';

class RecipeService {
    constructor() {
        this.createRecipe = this.createRecipe.bind(this);
    }

    async createRecipe(recipeModel) {
        let recipeCourse = recipeModel.course; //todo: convert to guid
        let recipeTags = recipeModel.tags; // todo: convert to guids
        // let recipeEntity = new RecipeEntity(...)
        let result = await recipeRepository.insert(recipeEntity);

        return result;
    }
}

export default new RecipeService(recipeRepository);