import express from "express";
import userRoutes from '../api/routes/userRoutes';
import userRecipeTagRoutes from '../api/routes/userRecipeTagRoutes';
import userCourseRoutes from '../api/routes/userCourseRoutes';
import recipeRoutes from '../api/routes/recipeRoutes';
import healthCheckRoutes from '../api/routes/healthCheckRoutes';
import swaggerRoutes from "../api/routes/swaggerRoutes";

export default (server) => {
    let router = express.Router();

    swaggerRoutes(router);
    healthCheckRoutes(router);
    recipeRoutes(router);
    userRoutes(router);
    userRecipeTagRoutes(router);
    userCourseRoutes(router);

    server.use(`/api`, router);
}