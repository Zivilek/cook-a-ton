import AbstractRepository from './abstractRepository';
import recipeSchema from "../schemas/recipeSchema";
import { RecipeEntity } from '../../domain/entities/recipeEntity';
import { Document, Model, Types } from 'mongoose';

class RecipeRepository extends AbstractRepository<RecipeEntity> {
    constructor(schema: Model<Document & RecipeEntity>) {
        super(schema);
    }

    protected async find(query: string): Promise<RecipeEntity[]> {
        return await this.model
            .find(query)
            .populate('tags')
            .populate('courses');
    }

    protected async findById(id: Types.ObjectId): Promise<RecipeEntity> {
        return await this.model
            .findById(id)
            .populate('tags')
            .populate('courses');
    }
};

export default new RecipeRepository(recipeSchema);