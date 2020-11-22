import { Router } from 'express';
import userController from '../controllers/userController';

export default (router: Router) => {
    router.get(`/users/:id`, userController.get);
    router.get(`/users`, userController.getAll);
    router.post(`/users`, userController.insert)
    router.put(`/users/:id`, userController.update);
    router.delete(`/users/:id`, userController.delete);
}