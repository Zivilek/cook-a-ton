import express from 'express';
import { Express } from 'express';
import userRoutes from './routes/userRoutes';
import userRecipeTagRoutes from './routes/userRecipeTagRoutes';
import userCourseRoutes from './routes/userCourseRoutes';
import recipeRoutes from './routes/recipeRoutes';
import healthCheckRoutes from './routes/healthCheckRoutes';
import swaggerRoutes from './routes/swaggerRoutes';
import imageRoutes from './routes/imageRoutes';

export default (server: Express) => {
  let router = express.Router();

  swaggerRoutes(router);
  healthCheckRoutes(router);
  recipeRoutes(router);
  userRoutes(router);
  userRecipeTagRoutes(router);
  userCourseRoutes(router);
  imageRoutes(router);

  server.use(`/api`, router);
};
