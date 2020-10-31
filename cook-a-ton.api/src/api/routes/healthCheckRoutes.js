import healthCheckController from '../controllers/healthCheckController';

export default (router) => {
    router.get(`/health`, healthCheckController.get);
}