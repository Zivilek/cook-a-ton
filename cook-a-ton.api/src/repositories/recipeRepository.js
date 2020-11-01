import AbstractRepository from './abstractRepository';

class RecipeRepository extends AbstractRepository {
    constructor(model) {
        super(model);
    }

    async find(query, skip, limit) {
        return await this.model
            .find(query)
            .populate('course')
            .populate('tags')
            .skip(skip)
            .limit(limit);
    }

    async findById(id) {
        return await this.model
            .findById(id)
            .populate('course')
            .populate('tags');
    }
};

export default RecipeRepository;