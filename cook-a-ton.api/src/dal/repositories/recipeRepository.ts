import AbstractRepository from './abstractRepository';
import recipeSchema from "../../domain/schemas/recipeSchema";
import { RecipeEntity } from '../../domain/entities/recipeEntity';
import { Document, Model, Types } from 'mongoose';

class RecipeRepository extends AbstractRepository<RecipeEntity> {
    constructor(schema: Model<Document & RecipeEntity>) {
        super(schema);
    }

    async find(query: string) {
        return await this.model
            .find(query)
            .populate('tags')
            .populate('courses');
    }

    async findById(id: Types.ObjectId) {
        return await this.model
            .findById(id)
            .populate('tags')
            .populate('courses');
    }
};

export default new RecipeRepository(recipeSchema);