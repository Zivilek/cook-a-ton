import imageController from '../controllers/imageController';

export default (router) => {
    router.post(`/image`, imageController.post);
}