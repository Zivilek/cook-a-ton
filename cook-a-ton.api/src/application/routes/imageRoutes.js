import imageController from '../controllers/imageController';

export default (router) => {
    router.post(`/images`, imageController.post);
}