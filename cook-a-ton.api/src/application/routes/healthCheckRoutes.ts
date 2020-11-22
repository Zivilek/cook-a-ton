import { Router } from 'express';
import healthCheckController from '../controllers/healthCheckController';

export default (router: Router) => {
    router.get(`/health`, healthCheckController.get);
}