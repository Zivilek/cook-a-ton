import AbstractRepository from './abstractRepository';
import userRecipeTagSchema from '../schemas/userRecipeTagSchema';
import { RecipeTagEntity } from '../../domain/entities/recipeTagEntity';
import { Document, Model, Types } from 'mongoose';

class UserRecipeTagRepository extends AbstractRepository<RecipeTagEntity> {
    constructor(schema: Model<Document & RecipeTagEntity>) {
        super(schema);
    }

    private async getNewSeqIdForUser(userId: Types.ObjectId) {
        var latestSeqIdEntity = await this.model.findOne({ user: userId }).sort({ seqId: -1 }).select('seqId');
        return (latestSeqIdEntity.seqId || 0) + 1;
    }

    async insert(data: RecipeTagEntity) {
        try {
            data.seqId = await this.getNewSeqIdForUser(data.user!);
            let item = await this.model.create(data);
            if (item)
                return {
                    statusCode: 201,
                    data: item
                };
        } catch (error) {
            console.log("error", error);
            return {
                statusCode: 500,
                message: error.errmsg || "Not able to create item",
                errors: error.errors
            };
        }
    }
};

export default new UserRecipeTagRepository(userRecipeTagSchema);