import { Router } from 'express';
import imageController from '../controllers/imageController';

export default (router: Router) => {
    router.post(`/images`, imageController.post);
}