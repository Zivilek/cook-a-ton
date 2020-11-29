import AbstractCRUDController from './abstractCRUDController';
import recipeRepository from '../../dal/repositories/recipeRepository';
import recipeMapper from '../../services/mappers/recipeMapper';

class RecipeController extends AbstractCRUDController {
    constructor(service) {
        super(service);
    }

    async get(req, res) {
        const { id } = req.params;

        let response = await this.service.get(id);
        // let responseModel = recipeMapper.toModel(response.data);

        return res.status(response.statusCode).send(response);
    }
}

export default new RecipeController(recipeRepository);