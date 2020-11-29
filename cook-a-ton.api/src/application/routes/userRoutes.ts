import { Router } from 'express';
import { body } from 'express-validator';
import userController from '../controllers/userController';
import { validate } from '../middlewares/requestBodyValidationMiddleware';

export default (router: Router) => {
    router.get(`/users/:id`, userController.get);
    router.get(`/users`, userController.getAll);
    router.post(`/users`, userController.insert)
    router.put(`/users/:id`, userController.update);
    router.delete(`/users/:id`, userController.delete);
    router.post('/register', [body('email').isEmail(), body('password').exists()], validate, userController.register);
    router.post('/login', userController.login);
}