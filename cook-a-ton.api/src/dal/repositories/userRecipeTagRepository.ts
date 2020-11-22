import AbstractRepository from './abstractRepository';
import userRecipeTagSchema from '../../domain/schemas/userRecipeTagSchema';
import { RecipeTagEntity } from '../../domain/entities/recipeTagEntity';
import { Document, Model } from 'mongoose';

class UserRecipeTagRepository extends AbstractRepository<RecipeTagEntity> {
    constructor(schema: Model<Document & RecipeTagEntity>) {
        super(schema);
    }
};

export default new UserRecipeTagRepository(userRecipeTagSchema);