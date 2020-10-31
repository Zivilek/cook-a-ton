import userController from '../controllers/userController';

export default (router) => {
    router.get(`/user/:id`, userController.get);
    router.get(`/user`, userController.getAll);
    router.post(`/user`, userController.insert)
    router.put(`/user/:id`, userController.update);
    router.delete(`/user/:id`, userController.delete);
}