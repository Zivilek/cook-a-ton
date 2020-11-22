import { Router } from 'express';
import healthCheckController from '../controllers/healthCheckController';

export default (router: Router) => {
    router.get(`/health`, healthCheckController.get);
    router.get(`/error`, () => { throw new Error("Sync Error") });
    router.get(`/asyncError`, async () => { throw new Error("Async Error") });
}