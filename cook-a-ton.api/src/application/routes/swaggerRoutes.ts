import { Router } from "express";
import swaggerUI from "swagger-ui-express";
import yaml from "yamljs";

const swaggerDoc = yaml.load("./swagger.yaml");

export default (router: Router) => {
    router.use(`/docs`, swaggerUI.serve, swaggerUI.setup(swaggerDoc));
}