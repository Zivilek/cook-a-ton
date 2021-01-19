import AbstractRepository from './abstractRepository';
import recipeSchema from '../../domain/schemas/recipeSchema';

class RecipeRepository extends AbstractRepository {
  constructor(model) {
    super(model);
  }

  async find(query) {
    return await this.model.apiQuery(query).populate('tags').populate('course');
  }

  async findById(id) {
    return await this.model.findById(id).populate('tags').populate('course');
  }
}

export default new RecipeRepository(recipeSchema);
